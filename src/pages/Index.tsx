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
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '7 jours / 6 nuits',
      price: 'À partir de 220.000 DA',
      link: '/zanzibar',
      highlights: [
        'Plages de sable blanc',
        'Stone Town historique',
        'Forêt de Jozani',
        'Épices et marchés locaux'
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <TypewriterEffect />
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez nos destinations soigneusement sélectionnées et partez à l'aventure sans souci
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="#destinations"
              className="bg-agency-green text-black px-8 py-4 rounded-lg font-semibold hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Découvrir nos destinations
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-agency-green hover:text-agency-green transition-all duration-300"
            >
              Nous contacter
            </Link>
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
            Contactez-nous dès maintenant et laissez-nous organiser le voyage de vos rêves
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Commencer mon voyage
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
