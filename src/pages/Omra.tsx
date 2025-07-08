import React, { useState } from 'react';
import { Calendar, Phone, Users, Plane, MapPin, Upload, MessageSquare, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Omra = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    phone: '',
    hasCompanions: '',
    companionsCount: 0,
    departureDate: null as Date | null,
    duration: '',
    nearestAirport: '',
    preferredAirline: '',
    budget: '',
    additionalNotes: ''
  });

  const [passportFiles, setPassportFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (index: number, file: File | null) => {
    setPassportFiles(prev => {
      const newFiles = [...prev];
      if (file) {
        newFiles[index] = file;
      } else {
        newFiles.splice(index, 1);
      }
      return newFiles;
    });
  };

  const uploadPassportFiles = async (): Promise<string[]> => {
    const uploadedFiles: string[] = [];
    
    for (let i = 0; i < passportFiles.length; i++) {
      const file = passportFiles[i];
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${i}.${fileExt}`;
        
        const { data, error } = await supabase.storage
          .from('passport-files')
          .upload(fileName, file);
        
        if (error) {
          console.error('Error uploading file:', error);
          throw error;
        }
        
        if (data) {
          uploadedFiles.push(data.path);
        }
      }
    }
    
    return uploadedFiles;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Upload passport files
      const uploadedFilesPaths = await uploadPassportFiles();

      // Prepare booking data
      const bookingData = {
        destination: 'Omra',
        first_name: formData.fullName,
        last_name: formData.lastName,
        phone: formData.phone,
        adults: 1,
        children_with_bed: 0,
        children_without_bed: 0,
        babies: 0,
        total_travelers: 1 + formData.companionsCount,
        room_type: 'Standard',
        passport_files: uploadedFilesPaths,
        selected_departure: {
          departureDate: formData.departureDate?.toISOString(),
          duration: formData.duration,
          nearestAirport: formData.nearestAirport,
          preferredAirline: formData.preferredAirline,
          budget: formData.budget,
          hasCompanions: formData.hasCompanions,
          companionsCount: formData.companionsCount,
          additionalNotes: formData.additionalNotes
        }
      };

      // Insert booking into database
      const { data, error } = await supabase
        .from('bookings')
        .insert(bookingData)
        .select()
        .single();

      if (error) {
        console.error('Error inserting booking:', error);
        throw error;
      }

      // Send email
      const { error: emailError } = await supabase.functions.invoke('send-booking-email', {
        body: { bookingId: data.id }
      });

      if (emailError) {
        console.error('Error sending email:', emailError);
        // Don't throw here, as the booking was successful
      }

      toast.success('تم إرسال طلب الحجز بنجاح! سنتواصل معك قريباً.');
      
      // Reset form
      setFormData({
        fullName: '',
        lastName: '',
        phone: '',
        hasCompanions: '',
        companionsCount: 0,
        departureDate: null,
        duration: '',
        nearestAirport: '',
        preferredAirline: '',
        budget: '',
        additionalNotes: ''
      });
      setPassportFiles([]);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPassportUploads = 1 + (formData.hasCompanions === 'نعم' ? formData.companionsCount : 0);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/omra-destination.jpg" 
            alt="Omra"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            رحلة العمرة المباركة
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            اكتشف الروحانية والسكينة في أقدس الأماكن على وجه الأرض
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              احجز رحلة العمرة الخاصة بك
            </h2>
            <p className="text-xl text-gray-600">
              املأ النموذج أدناه وسنتواصل معك لتنظيم رحلتك الروحانية
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Users className="w-6 h-6 text-agency-green" />
                المعلومات الشخصية
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-right">الاسم الكامل *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                    className="text-right"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-right">اللقب *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                    className="text-right"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-right flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  رقم الهاتف (واتساب) *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className="text-right"
                  placeholder="+213..."
                />
              </div>
            </div>

            {/* Companions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Users className="w-6 h-6 text-agency-green" />
                المرافقين
              </h3>
              
              <div>
                <Label className="text-right">هل لديك مرافقين؟ *</Label>
                <Select value={formData.hasCompanions} onValueChange={(value) => handleInputChange('hasCompanions', value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="نعم">نعم</SelectItem>
                    <SelectItem value="لا">لا</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.hasCompanions === 'نعم' && (
                <div>
                  <Label htmlFor="companionsCount" className="text-right">عدد المرافقين *</Label>
                  <Input
                    id="companionsCount"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.companionsCount}
                    onChange={(e) => handleInputChange('companionsCount', parseInt(e.target.value) || 0)}
                    required
                    className="text-right"
                  />
                </div>
              )}
            </div>

            {/* Trip Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-agency-green" />
                الرحلة
              </h3>
              
              <div>
                <Label className="text-right">تاريخ انطلاق الرحلة المرغوب فيه *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-right font-normal",
                        !formData.departureDate && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="ml-2 h-4 w-4" />
                      {formData.departureDate ? format(formData.departureDate, "PPP", { locale: ar }) : "اختر التاريخ"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={formData.departureDate}
                      onSelect={(date) => handleInputChange('departureDate', date)}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="text-right">مدة العمرة *</Label>
                <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر المدة..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10 أيام">10 أيام</SelectItem>
                    <SelectItem value="15 يوم">15 يوم</SelectItem>
                    <SelectItem value="20 يوم">20 يوم</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-right flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  المطار الأقرب إليك *
                </Label>
                <Select value={formData.nearestAirport} onValueChange={(value) => handleInputChange('nearestAirport', value)}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر المطار..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="الجزائر العاصمة">الجزائر العاصمة</SelectItem>
                    <SelectItem value="وهران">وهران</SelectItem>
                    <SelectItem value="قسنطينة">قسنطينة</SelectItem>
                    <SelectItem value="عنابة">عنابة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Airline Preference */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Plane className="w-6 h-6 text-agency-green" />
                شركة الطيران المفضلة
              </h3>
              
              <Select value={formData.preferredAirline} onValueChange={(value) => handleInputChange('preferredAirline', value)}>
                <SelectTrigger className="text-right">
                  <SelectValue placeholder="اختر شركة الطيران..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="لا يهم / أرخص خيار">لا يهم / أرخص خيار</SelectItem>
                  <SelectItem value="الخطوط الجوية الجزائرية">الخطوط الجوية الجزائرية</SelectItem>
                  <SelectItem value="الخطوط السعودية">الخطوط السعودية</SelectItem>
                  <SelectItem value="الخطوط القطرية">الخطوط القطرية</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Budget */}
            <div>
              <Label htmlFor="budget" className="text-right">الميزانية المخصصة للسفر (بالدينار الجزائري)</Label>
              <Input
                id="budget"
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="text-right"
                placeholder="مثال: 500,000 دج"
              />
            </div>

            {/* Passport Upload */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Upload className="w-6 h-6 text-agency-green" />
                تحميل صورة جواز السفر
              </h3>
              
              {Array.from({ length: totalPassportUploads }, (_, index) => (
                <div key={index}>
                  <Label className="text-right">
                    {index === 0 ? 'جواز سفر صاحب الطلب *' : `جواز سفر المرافق ${index} *`}
                  </Label>
                  <Input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileChange(index, e.target.files?.[0] || null)}
                    required
                    className="text-right"
                  />
                </div>
              ))}
            </div>

            {/* Additional Notes */}
            <div>
              <Label htmlFor="notes" className="text-right flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                ملاحظات إضافية (اختياري)
              </Label>
              <Textarea
                id="notes"
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                className="text-right"
                rows={4}
                placeholder="أي متطلبات خاصة أو ملاحظات..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-agency-green text-black hover:bg-green-400 px-8 py-3 text-lg font-semibold"
              >
                {isSubmitting ? (
                  'جاري الإرسال...'
                ) : (
                  <>
                    <Send className="w-5 h-5 ml-2" />
                    أرسل طلب الحجز
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Omra;