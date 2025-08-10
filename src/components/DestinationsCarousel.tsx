import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Destination {
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  price: string;
  link: string;
  highlights: string[];
}

interface DestinationsCarouselProps {
  destinations: Destination[];
}

const DestinationsCarousel = ({ destinations }: DestinationsCarouselProps) => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Destinations populaires / وجهاتنا المميزة
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez votre prochaine aventure parmi nos destinations exclusives
          </p>
        </div>
      </div>
        
      <div className="relative w-full">
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
        >
          <CarouselContent className="ml-0 pl-6 md:pl-16">
            {destinations.map((destination, index) => (
              <CarouselItem key={index} className="pr-4 basis-[280px] min-w-0 shrink-0">
                  <div className="destination-card bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in h-full">
                    <div className="relative h-64">
                      <img 
                        src={destination.image} 
                        alt={destination.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-agency-green text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {destination.price}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-black mb-2">{destination.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{destination.subtitle}</p>
                      
                      <div className="flex items-center text-gray-500 mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{destination.duration}</span>
                      </div>
                      
                      <div className="space-y-2 mb-6">
                        {destination.highlights.slice(0, 2).map((highlight, idx) => (
                          <div key={idx} className="flex items-start">
                            <MapPin className="w-4 h-4 text-agency-green mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link 
                        to={destination.link}
                        className="btn-agency w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 hover:shadow-lg"
                      >
                        Réserver / احجز الآن
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12" />
          <CarouselNext className="hidden sm:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default DestinationsCarousel;