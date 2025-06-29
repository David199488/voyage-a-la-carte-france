
const Footer = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: '/lovable-uploads/a7dc3d84-6615-4bda-b59a-58b12dcf9050.png', 
      url: '#' 
    },
    { 
      name: 'Instagram', 
      icon: '/lovable-uploads/442be670-f514-4c7b-8b85-69de8ae02641.png', 
      url: '#' 
    },
    { 
      name: 'WhatsApp', 
      icon: '/lovable-uploads/479dbf50-3a63-4362-8e24-22455cc0ef83.png', 
      url: 'https://wa.me/213XXXXXXXXX' 
    },
    { 
      name: 'TikTok', 
      icon: '/lovable-uploads/03e14adf-4dd3-49ec-915f-3d4cb9c6f605.png', 
      url: '#' 
    }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Voyages<span className="text-agency-green">+</span>
            </h3>
            <p className="text-gray-400">Voyages organisés prêts à réserver</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="group flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-agency-green transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src={social.icon} 
                  alt={social.name}
                  className="w-6 h-6 object-contain"
                />
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Voyages+. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
