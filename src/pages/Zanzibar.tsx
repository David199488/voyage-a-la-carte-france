
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Calendar, MapPin, Plane, Star, Clock } from 'lucide-react';

const Zanzibar = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const departures = [
    "12 → 22 août",
    "31 août → 10 septembre" 
  ];

  const prices = {
    double: 355000,
    single: 436000,
    child2_6: 249000,
    child6_12: 340000,
    baby: 48000,
    visa: 90 // USD
  };

  const included = [
    "Vols Alger ⇄ Dar es Salaam (Fly Emirates)",
    "1 nuit Dar es Salaam (Landmark Mbweni)",
    "1 nuit Stone Town (Horizon Palace)",
    "6 nuits Nungwi (Malika Nungwi 4★)",
    "Transferts, excursions 4 jours, guide"
  ];

  const program = [
    { day: "J1", activity: "Arrivée Dar es Salaam" },
    { day: "J2", activity: "Ferry Stone Town" },
    { day: "J3", activity: "Excursion Nakupenda, transfert Nungwi" },
    { day: "J4", activity: "Île Mnemba (dauphins, snorkeling)" },
    { day: "J5", activity: "Croisière sunset en boutre" },
    { day: "J6-8", activity: "Plage libre Nungwi (extras possibles)" },
    { day: "J9", activity: "Retour Dar es Salaam" },
    { day: "J10", activity: "Vol retour" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&h=800&fit=crop"
            alt="Zanzibar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Zanzibar
            </h1>
            <p className="text-2xl mb-4">Évasion paradisiaque entre culture et plages de rêve</p>
            <p className="text-xl mb-8">10 jours / 9 nuits</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Plane className="w-5 h-5 mr-2" />
                <span>Fly Emirates</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 mr-2" />
                <span>10 jours / 9 nuits</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Star className="w-5 h-5 mr-2" />
                <span>Plages paradisiaques</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        {/* Départs 2025 */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Départs 2025</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {departures.map((departure, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                  <Calendar className="w-12 h-12 text-agency-green mx-auto mb-4" />
                  <h3 className="font-semibold text-xl">{departure}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Tarifs</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-agency-green">
                    <th className="text-left py-4 px-4 font-semibold">Catégorie</th>
                    <th className="text-right py-4 px-4 font-semibold">Prix (DA)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Double</td>
                    <td className="py-4 px-4 text-right font-medium">{prices.double.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Single</td>
                    <td className="py-4 px-4 text-right font-medium">{prices.single.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Enfant 2-12 ans (sans lit)</td>
                    <td className="py-4 px-4 text-right font-medium">{prices.child2_6.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Enfant 2-12 ans (avec lit)</td>
                    <td className="py-4 px-4 text-right font-medium">{prices.child6_12.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Bébé {'<'} 2 ans</td>
                    <td className="py-4 px-4 text-right font-medium">{prices.baby.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Visa + assurance</td>
                    <td className="py-4 px-4 text-right font-medium">{prices.visa} $</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => setShowBookingForm(true)}
                className="btn-agency py-4 px-8 rounded-lg text-lg font-semibold"
              >
                Réserver maintenant
              </button>
            </div>
          </div>
        </section>

        {/* Comprend */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Comprend</h2>
            <div className="space-y-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Star className="w-5 h-5 text-agency-green mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programme résumé */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Programme résumé</h2>
            <div className="space-y-4">
              {program.map((day, index) => (
                <div key={index} className="flex items-start border-l-4 border-agency-green pl-6 py-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-agency-green rounded-full flex items-center justify-center">
                      <span className="font-bold text-black text-sm">{day.day}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-800">{day.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights Gallery */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Highlights du voyage</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-agency-green/10 rounded-xl p-6 mb-4">
                  <MapPin className="w-12 h-12 text-agency-green mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">Stone Town</h3>
                <p className="text-gray-600 text-sm">Découverte du centre historique de Zanzibar</p>
              </div>
              
              <div className="text-center">
                <div className="bg-agency-green/10 rounded-xl p-6 mb-4">
                  <Star className="w-12 h-12 text-agency-green mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">Plages de Nungwi</h3>
                <p className="text-gray-600 text-sm">6 nuits sur les plus belles plages</p>
              </div>
              
              <div className="text-center">
                <div className="bg-agency-green/10 rounded-xl p-6 mb-4">
                  <Plane className="w-12 h-12 text-agency-green mx-auto" />
                </div>
                <h3 className="font-semibold mb-2">Excursions dauphins</h3>
                <p className="text-gray-600 text-sm">Observation des dauphins et snorkeling</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-agency-green rounded-2xl p-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-4">
              Évadez-vous à Zanzibar !
            </h2>
            <p className="text-black mb-8 text-lg">
              Plongez dans un paradis tropical entre culture swahilie et plages de rêve.
            </p>
            <button 
              onClick={() => setShowBookingForm(true)}
              className="bg-black text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Réservez maintenant
            </button>
          </div>
        </section>
      </div>

      {showBookingForm && (
        <BookingForm 
          destination="Zanzibar"
          prices={prices}
          onClose={() => setShowBookingForm(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Zanzibar;
