
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Calendar, MapPin, Plane, Star, Clock } from 'lucide-react';

const Vietnam = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const prices = {
    double: 429000,
    single: 565000,
    child6_12: 399000,
    child2_6: 339000,
    baby: 49000
  };

  const included = [
    "Vols internationaux Alger ⇄ Hô Chi Minh / Hanoï avec Qatar Airways",
    "Vols domestiques HCM ⇄ Phu Quoc ⇄ Hanoï",
    "Hôtels: Muong Thanh Luxury 4★ (2n, PC) / SOL by Melia 5★ (4n, BB) / REY Hôtel 4★ (2n, PC) / Erina Cruise 5★ (1n, PC)",
    "E-Visa, transferts, excursions 6 jours, guide francophone"
  ];

  const itinerary = [
    { day: "J1 - 19/08", activity: "Arrivée HCM, transfert, dîner" },
    { day: "J2 - 20/08", activity: "City tour HCM (Palais Réunification, Notre-Dame, Cho Lon, etc.)" },
    { day: "J3 - 21/08", activity: "Vol vers Phu Quoc" },
    { day: "J4 - 22/08", activity: "Excursion 3 îles + téléphérique Hon Thom + Sunset Town" },
    { day: "J5-6 - 23-24/08", activity: "Journées libres plage" },
    { day: "J7 - 25/08", activity: "Vol vers Hanoï" },
    { day: "J8 - 26/08", activity: "City tour Hanoï (Mausolée HCM, Vieux Quartier, etc.)" },
    { day: "J9 - 27/08", activity: "Embarquement Baie d'Ha Long (kayak, Sunset Party)" },
    { day: "J10 - 28/08", activity: "Tai Chi, grotte Sombre & Claire, retour Hanoï, shopping, vol retour" },
    { day: "J11 - 29/08", activity: "Arrivée Alger" }
  ];

  const highlights = [
    "Découverte de Hô Chi Minh-Ville et Hanoï",
    "Séjour détente à Phu Quoc",
    "Croisière d'une nuit dans la Baie d'Ha Long"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=800&fit=crop"
            alt="Vietnam"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Vietnam
            </h1>
            <p className="text-2xl mb-4">De Hô Chi Minh-Ville à la Baie d'Ha Long</p>
            <p className="text-xl mb-8">18 → 29 août 2025 • 11 jours / 9 nuits</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Plane className="w-5 h-5 mr-2" />
                <span>Qatar Airways</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 mr-2" />
                <span>11 jours / 9 nuits</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Star className="w-5 h-5 mr-2" />
                <span>Guide francophone</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        {/* Points forts */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Points forts du voyage</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="bg-agency-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-black" />
                  </div>
                  <p className="font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Tarifs</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-agency-green">
                    <th className="text-left py-4 px-4 font-semibold">Catégorie</th>
                    <th className="text-right py-4 px-4 font-semibold">Prix (DA)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Chambre double</td>
                    <td className="py-4 px-4 text-right font-medium">{prices.double.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Chambre single</td>
                    <td className="py-4 px-4 text-right font-medium">{prices.single.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Enfant 4-12 ans (lit)</td>
                    <td className="py-4 px-4 text-right font-medium">{prices.child6_12.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Enfant 2-9 ans (sans lit)</td>
                    <td className="py-4 px-4 text-right font-medium">{prices.child2_6.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Bébé {'<'} 2 ans</td>
                    <td className="py-4 px-4 text-right font-medium">{prices.baby.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowBookingForm(true)}
                className="btn-agency py-4 px-8 rounded-lg text-lg font-semibold"
              >
                Réserver maintenant
              </button>
            </div>
          </div>
        </section>

        {/* L'offre comprend */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">L'offre comprend</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {included.map((item, index) => (
                <div key={index} className="flex items-start">
                  <Star className="w-5 h-5 text-agency-green mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programme jour par jour */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Programme jour par jour</h2>
            <div className="space-y-4">
              {itinerary.map((day, index) => (
                <div key={index} className="flex items-start border-l-4 border-agency-green pl-6 py-4">
                  <div className="flex-shrink-0 mr-4">
                    <Calendar className="w-6 h-6 text-agency-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{day.day}</h4>
                    <p className="text-gray-600">{day.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-agency-green rounded-2xl p-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-4">
              Explorez le Vietnam avec nous !
            </h2>
            <p className="text-black mb-8 text-lg">
              Un voyage inoubliable vous attend au cœur de l'Asie du Sud-Est.
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
          destination="Vietnam"
          prices={prices}
          onClose={() => setShowBookingForm(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Vietnam;
