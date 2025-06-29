
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Calendar, MapPin, Plane, Star, Clock } from 'lucide-react';

const Malaisie = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const departures = [
    { dates: "10 → 21 août", airline: "Saudia", type: "standard" },
    { dates: "15 → 26 août", airline: "Emirates", type: "standard" },
    { dates: "23 août → 3 sept.", airline: "Saudia", type: "standard" },
    { dates: "28 août → 8 sept.", airline: "Saudia", type: "standard" },
    { dates: "5 → 16 sept.", airline: "Qatar", type: "special" }
  ];

  const pricesStandard = {
    double: 359000,
    single: 467000,
    child2_6: 269000,
    child6_12: 349000,
    baby: 48000
  };

  const pricesSpecial = {
    double: 329000,
    single: 424000,
    child2_6: 249000,
    child6_12: 319000,
    baby: 48000
  };

  const accommodations = [
    {
      city: "Kuala Lumpur",
      hotel: "The Face Style 5★",
      nights: "5 nuits BB"
    },
    {
      city: "Langkawi", 
      hotel: "Holiday Villa / The Westin / Berjaya Resort",
      nights: "4 nuits BB (selon départ)"
    }
  ];

  const mainExcursions = [
    "Bukit Bintang night tour",
    "City tour KL (Tours Petronas, Batu Caves, Putrajaya)",
    "Genting Highlands & Chin Swee Temple",
    "Langkawi island hopping : Fruit Farm, Crocodile Park, Skycab (ticket non inclus)",
    "Îles Femme Enceinte / Femme Vierge / Toba"
  ];

  const extras = [
    "Sunway Lagoon",
    "Aquaria KL", 
    "A'Famosa Water Park",
    "Mangrove tour"
  ];

  const included = [
    "Vols Alger ⇄ Kuala Lumpur + KUL ⇄ Langkawi",
    "Transferts, hôtels, guide, excursions 6 jours"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&h=800&fit=crop"
            alt="Malaisie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Malaisie
            </h1>
            <p className="text-2xl mb-4">L'alliance du futur et du paradis tropical</p>
            <p className="text-xl mb-8">11 jours / 9 nuits</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Plane className="w-5 h-5 mr-2" />
                <span>Plusieurs compagnies</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 mr-2" />
                <span>11 jours / 9 nuits</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Star className="w-5 h-5 mr-2" />
                <span>Hôtels 5★</span>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departures.map((departure, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow text-center">
                  <Calendar className="w-8 h-8 text-agency-green mx-auto mb-2" />
                  <h3 className="font-semibold text-lg mb-1">{departure.dates}</h3>
                  <p className="text-gray-600 text-sm">{departure.airline}</p>
                  {departure.type === 'special' && (
                    <span className="inline-block bg-agency-green text-black text-xs px-2 py-1 rounded-full mt-2">
                      Prix spécial
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hébergements */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Hébergements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {accommodations.map((accommodation, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-agency-green mb-2">{accommodation.city}</h3>
                  <p className="font-medium mb-1">{accommodation.hotel}</p>
                  <p className="text-gray-600">{accommodation.nights}</p>
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
                    <th className="text-right py-4 px-4 font-semibold">Départs 16 juil & 5 sept (DA)</th>
                    <th className="text-right py-4 px-4 font-semibold">Autres dates (DA)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Double</td>
                    <td className="py-4 px-4 text-right font-medium">{pricesSpecial.double.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right font-medium">{pricesStandard.double.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Single</td>
                    <td className="py-4 px-4 text-right font-medium">{pricesSpecial.single.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right font-medium">{pricesStandard.single.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Enfant 2-12 ans (sans lit)</td>
                    <td className="py-4 px-4 text-right font-medium">{pricesSpecial.child2_6.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right font-medium">{pricesStandard.child2_6.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Enfant 2-12 ans (avec lit)</td>
                    <td className="py-4 px-4 text-right font-medium">{pricesSpecial.child6_12.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right font-medium">{pricesStandard.child6_12.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Bébé < 2 ans</td>
                    <td className="py-4 px-4 text-right font-medium">{pricesSpecial.baby.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right font-medium">{pricesStandard.baby.toLocaleString()}</td>
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

        {/* Inclut */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Inclut</h2>
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

        {/* Excursions principales */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Excursions principales</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {mainExcursions.map((excursion, index) => (
                <div key={index} className="flex items-start py-3 border-b border-gray-100 last:border-b-0">
                  <MapPin className="w-5 h-5 text-agency-green mr-3 mt-1 flex-shrink-0" />
                  <span>{excursion}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extras possibles */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Extras possibles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {extras.map((extra, index) => (
                <div key={index} className="bg-agency-green/10 rounded-lg p-4 text-center">
                  <p className="font-medium">{extra}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-agency-green rounded-2xl p-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-4">
              Découvrez la Malaisie moderne !
            </h2>
            <p className="text-black mb-8 text-lg">
              Entre gratte-ciels futuristes et plages paradisiaques, vivez une expérience unique.
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
          destination="Malaisie"
          prices={pricesStandard}
          onClose={() => setShowBookingForm(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Malaisie;
