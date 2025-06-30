
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users } from 'lucide-react';

interface DestinationCardProps {
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  price: string;
  link: string;
  highlights: string[];
}

const DestinationCard = ({ title, subtitle, image, duration, price, link, highlights }: DestinationCardProps) => {
  return (
    <div className="destination-card bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-agency-green text-black px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{subtitle}</p>
        
        <div className="flex items-center text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{duration}</span>
        </div>
        
        <div className="space-y-2 mb-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start">
              <MapPin className="w-4 h-4 text-agency-green mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">{highlight}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to={link}
          className="btn-agency w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 hover:shadow-lg"
        >
          Découvrir & Réserver
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
