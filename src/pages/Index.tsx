
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TypewriterEffect from '@/components/TypewriterEffect';
import DestinationCard from '@/components/DestinationCard';
import { Plane, Shield, Users, Star } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const destinations = [
    {
      title: "Istanbul",
      subtitle: "Voyage organisé à Istanbul – Été 2025",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop",
      duration: "8 jours / 7 nuits",
      price: "À partir de 135 000 DA",
      link: "/istanbul",
      highlights: [
        "Vols avec Turkish Airlines",
        "Hôtel avec petit-déjeuner",
        "4 jours d'excursions guidées",
        "Shopping à Olivium Outlet"
      ]
    },
    {
      title: "Vietnam",
      subtitle: "De Hô Chi Minh-Ville à la Baie d'Ha Long",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop",
      duration: "11 jours / 9 nuits",
      price: "À partir de 339 000 DA",
      link: "/vietnam",
      highlights: [
        "Vols Qatar Airways",
        "Séjour détente à Phu Quoc",
        "Croisière Baie d'Ha Long",
        "Guide francophone"
      ]
    },
    {
      title: "Malaisie",
      subtitle: "L'alliance du futur et du paradis tropical",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      duration: "11 jours / 9 nuits",
      price: "À partir de 249 000 DA", 
      link: "/malaisie",
      highlights: [
        "Kuala Lumpur moderne",
        "Plages de Langkawi",
        "Tours Petronas et Batu Caves",
        "Genting Highlands"
      ]
    },
    {
      title: "Zanzibar",
      subtitle: "Évasion paradisiaque entre culture et plages",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop",
      duration: "10 jours / 9 nuits",
      price: "À partir de 249 000 DA",
      link: "/zanzibar",
      highlights: [
        "Vols Fly Emirates",
        "Stone Town historique",
        "Plages de Nungwi",
        "Excursion dauphins"
      ]
    }
  ];

  const features = [
    {
      icon: Plane,
      title: "Vols Inclus",
      description: "Vols internationaux avec compagnies prestigieuses"
    },
    {
      icon: Shield,
      title: "Sécurisé",
      description: "Voyages organisés et encadrés par des professionnels"
    },
    {
      icon: Users,
      title: "Guides Experts",
      description: "Accompagnement par des guides locaux francophones"
    },
    {
      icon: Star,
      title: "Qualité Premium",
      description: "Hôtels sélectionnés et excursions exclusives"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <TypewriterEffect />
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Découvrez nos destinations exceptionnelles avec des voyages organisés 
              clés en main. Votre aventure commence ici.
            </p>
            <a 
              href="#destinations"
              className="btn-agency inline-block py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Découvrir nos destinations
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-16 animate-on-scroll">
            Pourquoi choisir Voyages<span className="text-agency-green">+</span> ?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-on-scroll">
                <div className="bg-agency-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-black mb-4">
            Nos Destinations Exceptionnelles
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Partez à la découverte de destinations uniques avec nos voyages organisés. 
            Chaque voyage est soigneusement préparé pour vous offrir une expérience inoubliable.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
