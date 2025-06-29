import { useState, useEffect } from 'react';
import { X, Upload, Calculator, Users } from 'lucide-react';
import { toast } from 'sonner';

interface BookingFormProps {
  destination: string;
  prices: any;
  departureDates?: any[];
  onClose: () => void;
}

const BookingForm = ({ destination, prices, departureDates, onClose }: BookingFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    selectedDeparture: departureDates?.[0] || null,
    roomType: 'double' as 'double' | 'single',
    totalTravelers: 1,
    adults: 1,
    children: 0,
    childrenWithBed: 0,
    childrenWithoutBed: 0,
    babies: 0,
    passports: [] as File[]
  });

  const totalSteps = 4;

  const getCurrentPrices = () => {
    if (departureDates && formData.selectedDeparture) {
      return formData.selectedDeparture.prices;
    }
    return prices;
  };

  const calculateTotal = () => {
    const currentPrices = getCurrentPrices();
    const { adults, childrenWithBed, childrenWithoutBed, babies, roomType } = formData;
    let total = 0;
    
    // Prix des adultes selon le type de chambre
    if (roomType === 'double') {
      total += adults * (currentPrices.double || 0);
    } else {
      total += adults * (currentPrices.single || 0);
    }
    
    // Prix des enfants avec lit
    total += childrenWithBed * (currentPrices.child6_12 || currentPrices.child2_6 || 0);
    
    // Prix des enfants sans lit
    total += childrenWithoutBed * (currentPrices.child2_6 || 0);
    
    // Prix des bébés
    total += babies * (currentPrices.baby || 0);
    
    return total;
  };

  const handleSubmit = () => {
    toast.success("Réservation envoyée ! Nous vous contacterons sous 24h.");
    console.log('Données de réservation:', { destination, formData, total: calculateTotal() });
    onClose();
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files);
      setFormData(prev => ({
        ...prev,
        passports: [...prev.passports, ...newFiles]
      }));
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8 px-4">
      <div className="flex items-center max-w-full overflow-x-auto">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center flex-shrink-0">
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
              step >= stepNumber ? 'bg-agency-green text-black' : 'bg-gray-200 text-gray-500'
            }`}>
              {stepNumber}
            </div>
            {stepNumber < 4 && (
              <div className={`w-8 md:w-16 h-1 mx-1 md:mx-2 ${
                step > stepNumber ? 'bg-agency-green' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold">Réservation - {destination}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <StepIndicator />

          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Vos coordonnées</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Prénom *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Nom *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              {departureDates && departureDates.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-2">Date de départ *</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                    value={departureDates.indexOf(formData.selectedDeparture)}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      selectedDeparture: departureDates[parseInt(e.target.value)]
                    }))}
                  >
                    {departureDates.map((departure, index) => (
                      <option key={index} value={index}>
                        {departure.dates || departure.period}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                onClick={() => setStep(2)}
                disabled={!formData.firstName || !formData.lastName}
                className="btn-agency w-full py-3 px-6 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Type de chambre et voyageurs
              </h3>
              
              <div>
                <label className="block text-sm font-medium mb-2">Type de chambre *</label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="roomType"
                      value="double"
                      checked={formData.roomType === 'double'}
                      onChange={(e) => setFormData(prev => ({ ...prev, roomType: e.target.value as 'double' | 'single' }))}
                      className="text-agency-green"
                    />
                    <span>Chambre double</span>
                  </label>
                  <label className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="roomType"
                      value="single"
                      checked={formData.roomType === 'single'}
                      onChange={(e) => setFormData(prev => ({ ...prev, roomType: e.target.value as 'double' | 'single' }))}
                      className="text-agency-green"
                    />
                    <span>Chambre single</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nombre total de voyageurs</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                  value={formData.totalTravelers}
                  onChange={(e) => {
                    const total = Number(e.target.value);
                    setFormData(prev => ({ 
                      ...prev, 
                      totalTravelers: total,
                      adults: Math.min(prev.adults, total),
                      children: 0,
                      childrenWithBed: 0,
                      childrenWithoutBed: 0,
                      babies: 0
                    }));
                  }}
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num} voyageur{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              {formData.totalTravelers > 0 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Adultes</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                      value={formData.adults}
                      onChange={(e) => setFormData(prev => ({ ...prev, adults: Number(e.target.value) }))}
                    >
                      {Array.from({length: formData.totalTravelers + 1}, (_, i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Enfants (2-12 ans) avec lit</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                      value={formData.childrenWithBed}
                      onChange={(e) => setFormData(prev => ({ ...prev, childrenWithBed: Number(e.target.value) }))}
                    >
                      {Array.from({length: formData.totalTravelers - formData.adults + 1}, (_, i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Enfants (2-12 ans) sans lit</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                      value={formData.childrenWithoutBed}
                      onChange={(e) => setFormData(prev => ({ ...prev, childrenWithoutBed: Number(e.target.value) }))}
                    >
                      {Array.from({length: formData.totalTravelers - formData.adults - formData.childrenWithBed + 1}, (_, i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Bébés (0-2 ans)</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                      value={formData.babies}
                      onChange={(e) => setFormData(prev => ({ ...prev, babies: Number(e.target.value) }))}
                    >
                      {Array.from({length: formData.totalTravelers - formData.adults - formData.childrenWithBed - formData.childrenWithoutBed + 1}, (_, i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300"
                >
                  Précédent
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={formData.adults + formData.childrenWithBed + formData.childrenWithoutBed + formData.babies !== formData.totalTravelers}
                  className="flex-1 btn-agency py-3 px-6 rounded-lg font-semibold disabled:opacity-50"
                >
                  Suivant
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center">
                <Upload className="w-6 h-6 mr-2" />
                Passeports
              </h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Veuillez télécharger une photo du passeport pour chaque voyageur ({formData.totalTravelers} passeport{formData.totalTravelers > 1 ? 's' : ''} requis)
                </p>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Glissez vos fichiers ici ou cliquez pour sélectionner</p>
                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileUpload(e.target.files)}
                  className="hidden"
                  id="passport-upload"
                />
                <label
                  htmlFor="passport-upload"
                  className="btn-agency inline-block py-2 px-6 rounded-lg font-semibold cursor-pointer"
                >
                  Sélectionner les fichiers
                </label>
              </div>

              {formData.passports.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Fichiers téléchargés:</h4>
                  <ul className="space-y-2">
                    {formData.passports.map((file, index) => (
                      <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <span className="text-sm">{file.name}</span>
                        <button
                          onClick={() => setFormData(prev => ({
                            ...prev,
                            passports: prev.passports.filter((_, i) => i !== index)
                          }))}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300"
                >
                  Précédent
                </button>
                <button
                  onClick={() => setStep(4)}
                  disabled={formData.passports.length < formData.totalTravelers}
                  className="flex-1 btn-agency py-3 px-6 rounded-lg font-semibold disabled:opacity-50"
                >
                  Suivant
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center">
                <Calculator className="w-6 h-6 mr-2" />
                Récapitulatif & Devis
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Détails de la réservation</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Destination:</span>
                    <span className="font-medium">{destination}</span>
                  </div>
                  {formData.selectedDeparture && (
                    <div className="flex justify-between">
                      <span>Départ:</span>
                      <span className="font-medium">{formData.selectedDeparture.dates || formData.selectedDeparture.period}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Type de chambre:</span>
                    <span className="font-medium">{formData.roomType === 'double' ? 'Double' : 'Single'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Voyageurs:</span>
                    <span className="font-medium">{formData.totalTravelers} personne{formData.totalTravelers > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contact:</span>
                    <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h4 className="font-semibold mb-4">Calcul des prix</h4>
                <div className="space-y-3">
                  {formData.adults > 0 && (
                    <div className="flex justify-between">
                      <span>{formData.adults} Adulte{formData.adults > 1 ? 's' : ''} ({formData.roomType === 'double' ? 'chambre double' : 'chambre single'})</span>
                      <span className="font-medium">{(formData.adults * (formData.roomType === 'double' ? getCurrentPrices().double : getCurrentPrices().single)).toLocaleString()} DA</span>
                    </div>
                  )}
                  {formData.childrenWithBed > 0 && (
                    <div className="flex justify-between">
                      <span>{formData.childrenWithBed} Enfant{formData.childrenWithBed > 1 ? 's' : ''} avec lit</span>
                      <span className="font-medium">{(formData.childrenWithBed * (getCurrentPrices().child6_12 || getCurrentPrices().child2_6 || 0)).toLocaleString()} DA</span>
                    </div>
                  )}
                  {formData.childrenWithoutBed > 0 && (
                    <div className="flex justify-between">
                      <span>{formData.childrenWithoutBed} Enfant{formData.childrenWithoutBed > 1 ? 's' : ''} sans lit</span>
                      <span className="font-medium">{(formData.childrenWithoutBed * (getCurrentPrices().child2_6 || 0)).toLocaleString()} DA</span>
                    </div>
                  )}
                  {formData.babies > 0 && (
                    <div className="flex justify-between">
                      <span>{formData.babies} Bébé{formData.babies > 1 ? 's' : ''} (0-2 ans)</span>
                      <span className="font-medium">{(formData.babies * (getCurrentPrices().baby || 0)).toLocaleString()} DA</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-agency-green">{calculateTotal().toLocaleString()} DA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300"
                >
                  Précédent
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 btn-agency py-3 px-6 rounded-lg font-semibold"
                >
                  Confirmer la réservation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
