import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Calendar, MapPin, Plane, Star, Clock } from 'lucide-react';

const Malaisie = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const departureDates = [
    { period: "10 → 21 août (Saudia)", prices: { double: 359000, single: 467000, child2_6: 269000, child6_12: 349000, baby: 48000 } },
    { period: "15 → 26 août (Emirates)", prices: { double: 359000, single: 467000, child2_6: 269000, child6_12: 349000, baby: 48000 } },
    { period: "23 août → 3 sept. (Saudia)", prices: { double: 359000, single: 467000, child2_6: 269000, child6_12: 349000, baby: 48000 } },
    { period: "28 août → 8 sept. (Saudia)", prices: { double: 359000, single: 467000, child2_6: 269000, child6_12: 349000, baby: 48000 } },
    { period: "5 → 16 sept. (Qatar)", prices: { double: 329000, single: 424000, child2_6: 249000, child6_12: 319000, baby: 48000 } }
  ];

  const accommodations = [
    "Kuala Lumpur : The Face Style 5★ (5 nuits BB)",
    "Langkawi : Holiday Villa / The Westin / Berjaya Resort (selon départ, 4 nuits BB)"
  ];

  const included = [
    "Vols Alger ⇄ Kuala Lumpur (selon compagnie) + KUL ⇄ Langkawi",
    "Transferts, hôtels, guide, excursions 6 jours"
  ];

  const excursions = [
    "Bukit Bintang night tour, city tour KL (Tours Petronas, Batu Caves, Putrajaya)",
    "Genting Highlands & Chin Swee Temple",
    "Langkawi island hopping : Fruit Farm, Crocodile Park, Skycab (ticket non inclus), îles Femme Enceinte / Femme Vierge / Toba"
  ];

  const extras = [
    "Sunway Lagoon", "Aquaria KL", "A'Famosa Water Park", "Mangrove tour"
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
                <span>KL + Langkawi</span>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departureDates.map((departure, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                  <Calendar className="w-12 h-12 text-agency-green mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{departure.period}</h3>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Double:</span>
                      <span className="font-medium">{departure.prices.double.toLocaleString()} DA</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Single:</span>
                      <span className="font-medium">{departure.prices.single.toLocaleString()} DA</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hébergements */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Hébergements</h2>
            <div className="space-y-4">
              {accommodations.map((hotel, index) => (
                <div key={index} className="flex items-start">
                  <Star className="w-5 h-5 text-agency-green mr-3 mt-1 flex-shrink-0" />
                  <span className="font-medium">{hotel}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Tarifs détaillés</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-agency-green">
                    <th className="text-left py-4 px-4 font-semibold">Catégorie</th>
                    <th className="text-right py-4 px-4 font-semibold">Départ 5 sept (DA)</th>
                    <th className="text-right py-4 px-4 font-semibold">Autres dates (DA)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Double</td>
                    <td className="py-4 px-4 text-right font-medium">{departureDates[4].prices.double.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right font-medium">{departureDates[0].prices.double.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Single</td>
                    <td className="py-4 px-4 text-right font-medium">{departureDates[4].prices.single.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right font-medium">{departureDates[0].prices.single.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Enfant 2-12 ans (sans lit)</td>
                    <td className="py-4 px-4 text-right font-medium">{departureDates[4].prices.child2_6.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right font-medium">{departureDates[0].prices.child2_6.toLocaleString()}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4">Enfant 2-12 ans (avec lit)</td>
                    <td className="py-4 px-4 text-right font-medium">{departureDates[4].prices.child6_12.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right font-medium">{departureDates[0].prices.child6_12.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Bébé {'<'} 2 ans</td>
                    <td className="py-4 px-4 text-right font-medium">{departureDates[4].prices.baby.toLocaleString()}</td>
                    <td className="py-4 px-4 text-right font-medium">{departureDates[0].prices.baby.toLocaleString()}</td>
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
            <div className="grid md:grid-cols-2 gap-6">
              {excursions.map((excursion, index) => (
                <div key={index} className="flex items-start">
                  <MapPin className="w-5 h-5 text-agency-green mr-3 mt-1 flex-shrink-0" />
                  <span>{excursion}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-agency-green">Extras possibles</h3>
              <div className="flex flex-wrap gap-3">
                {extras.map((extra, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {extra}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-agency-green rounded-2xl p-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-4">
              Découvrez la Malaisie !
            </h2>
            <p className="text-black mb-8 text-lg">
              Entre modernité de Kuala Lumpur et paradis tropical de Langkawi.
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
          prices={departureDates[0].prices}
          departureDates={departureDates}
          onClose={() => setShowBookingForm(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Malaisie;
