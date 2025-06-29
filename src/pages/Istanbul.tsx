
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { Calendar, MapPin, Plane, Users, Clock, Star } from 'lucide-react';

const Istanbul = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const departureDates = [
    { dates: "04 au 11 juillet", prices: { double: 188000, single: 135000, child6_12: 116000, child2_6: 85000, baby: 20000 } },
    { dates: "11 au 18 juillet", prices: { double: 205000, single: 149000, child6_12: 119000, child2_6: 86000, baby: 20000 } },
    { dates: "18 au 25 juillet", prices: { double: 205000, single: 149000, child6_12: 119000, child2_6: 86000, baby: 20000 } },
    { dates: "25 juillet au 01 août", prices: { double: 205000, single: 149000, child6_12: 119000, child2_6: 86000, baby: 20000 } },
    { dates: "01 au 08 août", prices: { double: 205000, single: 149000, child6_12: 119000, child2_6: 86000, baby: 20000 } },
    { dates: "08 au 15 août", prices: { double: 205000, single: 149000, child6_12: 119000, child2_6: 86000, baby: 20000 } },
    { dates: "15 au 22 août", prices: { double: 205000, single: 149000, child6_12: 119000, child2_6: 86000, baby: 20000 } },
    { dates: "22 au 29 août", prices: { double: 205000, single: 149000, child6_12: 119000, child2_6: 86000, baby: 20000 } },
    { dates: "29 août au 05 septembre", prices: { double: 205000, single: 149000, child6_12: 119000, child2_6: 86000, baby: 20000 } }
  ];

  const activities = [
    "Shopping à Olivium Outlet Center",
    "Visite du quartier coloré de Balat",
    "Tour de Galata & Place Taksim",
    "Istanbul Aquarium (ticket non inclus)",
    "Journée complète au Lac Sapanca & Masukiye",
    "Îles des Princes avec déjeuner inclus",
    "Découverte de Pierre Loti, Ortaköy, Üsküdar et de la Tour de Léandre",
    "Temps libre à Aqua Florya Mall"
  ];

  const included = [
    "Vol aller-retour avec Turkish Airlines",
    "Transferts aéroport ↔ hôtel",
    "7 nuits d'hébergement avec petit-déjeuner",
    "4 jours d'excursions",
    "Accompagnement par un guide touristique professionnel"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&h=800&fit=crop"
            alt="Istanbul"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Istanbul
            </h1>
            <p className="text-2xl mb-4">Voyage organisé à Istanbul – Été 2025</p>
            <p className="text-xl mb-8">8 jours / 7 nuits</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Plane className="w-5 h-5 mr-2" />
                <span>Turkish Airlines</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 mr-2" />
                <span>8 jours / 7 nuits</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Users className="w-5 h-5 mr-2" />
                <span>Guide professionnel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-20">
        {/* Overview */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">À propos de ce voyage</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-agency-green">L'offre comprend</h3>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="w-5 h-5 text-agency-green mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-agency-green">Plan de vol</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-semibold">Aller</div>
                    <div className="text-sm text-gray-600">TK 652 – Alger > Istanbul</div>
                    <div className="text-sm">Départ 11h40 – Arrivée 17h20</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="font-semibold">Retour</div>
                    <div className="text-sm text-gray-600">TK 653 – Istanbul > Alger</div>
                    <div className="text-sm">Départ 14h45 – Arrivée 16h40</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Activités prévues</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start py-3 border-b border-gray-100 last:border-b-0">
                  <MapPin className="w-5 h-5 text-agency-green mr-3 mt-1 flex-shrink-0" />
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-6">Tarifs et dates de départ</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              {departureDates.map((departure, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <Calendar className="w-8 h-8 text-agency-green mx-auto mb-2" />
                    <h3 className="font-semibold text-lg">{departure.dates}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Chambre double</span>
                      <span className="font-semibold">{departure.prices.double.toLocaleString()} DA</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chambre single</span>
                      <span className="font-semibold">{departure.prices.single.toLocaleString()} DA</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Enfant 6-12 ans</span>
                      <span>{departure.prices.child6_12.toLocaleString()} DA</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Enfant 2-6 ans</span>
                      <span>{departure.prices.child2_6.toLocaleString()} DA</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Bébé < 2 ans</span>
                      <span>{departure.prices.baby.toLocaleString()} DA</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setShowBookingForm(true)}
                    className="btn-agency w-full mt-4 py-3 px-4 rounded-lg font-semibold"
                  >
                    Réserver
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-agency-green rounded-2xl p-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-4">
              Prêt pour votre aventure à Istanbul ?
            </h2>
            <p className="text-black mb-8 text-lg">
              Réservez dès maintenant votre voyage organisé et vivez une expérience inoubliable.
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
          destination="Istanbul"
          prices={departureDates[0].prices}
          onClose={() => setShowBookingForm(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Istanbul;
