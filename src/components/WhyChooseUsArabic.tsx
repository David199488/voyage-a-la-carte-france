import React from 'react';
import { Star, Users, Phone, Award } from 'lucide-react';

const WhyChooseUsArabic = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-agency-green" />,
      title: 'تنظيم احترافي لرحلات جماعية وفردية',
    },
    {
      icon: <Award className="w-8 h-8 text-agency-green" />,
      title: 'أسعار مناسبة وخدمة عالية الجودة',
    },
    {
      icon: <Users className="w-8 h-8 text-agency-green" />,
      title: 'مرشدون ناطقون بالعربية والفرنسية',
    },
    {
      icon: <Phone className="w-8 h-8 text-agency-green" />,
      title: 'دعم على مدار الساعة عبر الهاتف وواتساب',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif' }} dir="rtl">
            لماذا تختار وكالتنا للسفر؟
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif' }} dir="rtl">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsArabic;