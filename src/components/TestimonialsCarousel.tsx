import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  language: 'fr' | 'ar';
}

const TestimonialsCarousel = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Ahmed Benali',
      location: 'Alger',
      rating: 5,
      text: 'رحلة رائعة إلى إسطنبول! التنظيم كان ممتازا والمرشد السياحي محترف جدا. أنصح بهذه الوكالة بشدة',
      language: 'ar'
    },
    {
      name: 'Sarah Dupont',
      location: 'Oran',
      rating: 5,
      text: 'Voyage magnifique au Vietnam ! Tout était parfaitement organisé, les hôtels étaient excellents et notre guide parlait parfaitement français.',
      language: 'fr'
    },
    {
      name: 'Fatima Zahra',
      location: 'Constantine',
      rating: 5,
      text: 'عمرة مباركة بفضل الله ثم بفضل هذه الوكالة الممتازة. الخدمة راقية والأسعار معقولة. جزاكم الله خيرا',
      language: 'ar'
    },
    {
      name: 'Mohamed Kaddour',
      location: 'Annaba',
      rating: 5,
      text: 'Un service client exceptionnel ! Ils nous ont accompagnés du début à la fin. Le voyage en Malaisie était inoubliable.',
      language: 'fr'
    },
    {
      name: 'Amina Cherif',
      location: 'Sétif',
      rating: 5,
      text: 'شكرا لكم على الرحلة الجميلة إلى زنجبار. الشواطئ كانت ساحرة والفندق رائع. سنعود إليكم قريبا إن شاء الله',
      language: 'ar'
    },
    {
      name: 'Karim Mansouri',
      location: 'Tlemcen',
      rating: 5,
      text: 'Prix très compétitifs et qualité au rendez-vous. L\'équipe est disponible 24h/24. Je recommande vivement cette agence !',
      language: 'fr'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            آراء عملائنا / Avis de nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8 text-center">
                  <div className="mb-4">
                    <span className="text-2xl">{getStars(testimonial.rating)}</span>
                  </div>
                  <p 
                    className={`text-lg text-gray-700 mb-6 italic leading-relaxed ${
                      testimonial.language === 'ar' ? 'text-right' : 'text-left'
                    }`}
                    dir={testimonial.language === 'ar' ? 'rtl' : 'ltr'}
                    style={{ 
                      fontFamily: testimonial.language === 'ar' 
                        ? 'system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, sans-serif' 
                        : 'inherit' 
                    }}
                  >
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-agency-green' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;