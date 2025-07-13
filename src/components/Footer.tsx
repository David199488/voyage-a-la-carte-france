const Footer = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: '/lovable-uploads/a7dc3d84-6615-4bda-b59a-58b12dcf9050.png', 
      url: 'https://www.facebook.com/share/19PpeEjcAm/' 
    },
    { 
      name: 'Instagram', 
      icon: '/lovable-uploads/442be670-f514-4c7b-8b85-69de8ae02641.png', 
      url: 'https://www.instagram.com/ugxo.travel?igsh=MTIwNW1qOW1lcmxpcg==' 
    },
    { 
      name: 'WhatsApp', 
      icon: '/lovable-uploads/479dbf50-3a63-4362-8e24-22455cc0ef83.png', 
      url: 'https://wa.me/message/XQHTUYJDF73XD1' 
    },
    { 
      name: 'TikTok', 
      icon: '/lovable-uploads/03e14adf-4dd3-49ec-915f-3d4cb9c6f605.png', 
      url: 'https://www.tiktok.com/@ugxo.visa?_t=ZM-8xbju4eSFD4&_r=1' 
    }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/7231eff3-1708-467a-8fd0-65e2c268f27f.png" 
              alt="UGXO" 
              className="h-16 w-auto mx-auto mb-4 filter invert"
            />
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
                  className="w-10 h-10 object-contain"
                />
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 UGXO. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
