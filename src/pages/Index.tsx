
import { ArrowRight, Star, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TypewriterEffect from '@/components/TypewriterEffect';
import DestinationCard from '@/components/DestinationCard';

const Index = () => {
  const destinations = [
    {
      title: 'Istanbul',
      subtitle: 'Découvrez la magie d\'Istanbul, entre Europe et Asie',
      image: '/lovable-uploads/390e3aaa-6973-48f4-a3fa-096f1538c37a.png',
      duration: '8 jours / 7 nuits',
      price: 'À partir de 188.000 DA',
      link: '/istanbul',
      highlights: [
        'Visite de Sainte-Sophie et la Mosquée Bleue',
        'Croisière sur le Bosphore',
        'Grand Bazar et Bazar aux Épices',
        'Palais de Topkapi'
      ]
    },
    {
      title: 'Vietnam',
      subtitle: 'Explorez les paysages époustouflants du Vietnam',
      image: '/lovable-uploads/f80b5580-7a7d-4f12-bfb4-7296da0aba45.png',
      duration: '10 jours / 9 nuits',
      price: 'À partir de 280.000 DA',
      link: '/vietnam',
      highlights: [
        'Baie d\'Halong et ses formations rocheuses',
        'Temples et pagodes de Hanoi',
        'Delta du Mékong',
        'Ville historique de Hoi An'
      ]
    },
    {
      title: 'Malaisie',
      subtitle: 'Immergez-vous dans la diversité culturelle de la Malaisie',
      image: '/lovable-uploads/53ec24ac-350d-441e-bbb9-f25351d8ac35.png',
      duration: '9 jours / 8 nuits',
      price: 'À partir de 315.000 DA',
      link: '/malaisie',
      highlights: [
        'Tours Petronas de Kuala Lumpur',
        'Temples de Batu Caves',
        'île de Langkawi',
        'Marchés de nuit de Penang'
      ]
    },
    {
      title: 'Zanzibar',
      subtitle: 'Détendez-vous sur les plages paradisiaques de Zanzibar',
      image: '/lovable-uploads/f1e28ec5-cee0-4a1b-bfe9-3e8e2f722b6b.png',
      duration: '7 jours / 6 nuits',
      price: 'À partir de 220.000 DA',
      link: '/zanzibar',
      highlights: [
        'Plages de sable blanc',
        'Stone Town historique',
        'Forêt de Jozani',
        'Épices et marchés locaux'
      ]
    },
    {
      title: 'Omra',
      subtitle: 'Accomplissez votre pèlerinage spirituel en toute sérénité',
      image: '/lovable-uploads/omra-destination.jpg',
      duration: 'Séjours flexibles',
      price: 'Devis personnalisé',
      link: '/omra',
      highlights: [
        'Accompagnement spirituel complet',
        'Hôtels proche Haram',
        'Transport organisé',
        'Guide expérimenté'
      ]
    }
  ];
      
  const features = [
    {
      icon: <Star className="w-8 h-8 text-agency-green" />,
      title: 'Expérience Premium',
      description: 'Des voyages soigneusement organisés pour une expérience inoubliable'
    },
    {
      icon: <Shield className="w-8 h-8 text-agency-green" />,
      title: 'Sécurité Garantie',
      description: 'Voyagez en toute sérénité avec nos partenaires de confiance'
    },
    {
      icon: <Clock className="w-8 h-8 text-agency-green" />,
      title: 'Gain de Temps',
      description: 'Tout est organisé pour vous, concentrez-vous sur le plaisir'
    },
    {
      icon: <Users className="w-8 h-8 text-agency-green" />,
      title: 'Support 24/7',
      description: 'Une équipe dédiée à votre service avant, pendant et après votre voyage'
    }
  ];

  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <TypewriterEffect />
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez nos destinations soigneusement sélectionnées et partez à l'aventure sans souci
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToDestinations}
              className="bg-agency-green text-black px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir nos destinations
            </button>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez votre prochaine aventure parmi nos destinations exclusives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination) => (
              <DestinationCard key={destination.title} {...destination} />
            ))}
          </div>
        </div>
      </section>

      <>
  <h2 style={{ textAlign: 'center', margin: '40px 0 20px', color: '#333' }}>
    Nos partenaires
  </h2>

  <div className="carousel-container">
    <div className="carousel-track">
      <div className="carousel-item">
        <img src="/turkish.png" alt="Turkish Airlines" />
      </div>
      <div className="carousel-item">
        <img src="/saudia.png" alt="Saudia" />
      </div>
      <div className="carousel-item">
        <img src="/airalgerie.png" alt="Air Algérie" />
      </div>
    </div>
  </div>
</>
      

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous nous engageons à vous offrir une expérience de voyage exceptionnelle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-agency-green">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Prêt pour votre prochaine aventure ?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Découvrez nos destinations exceptionnelles et laissez-nous organiser le voyage de vos rêves
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
