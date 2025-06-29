
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'WhatsApp', icon: '📱', url: 'https://wa.me/213XXXXXXXXX' },
    { name: 'TikTok', icon: '🎵', url: '#' }
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
                {typeof social.icon === 'string' ? (
                  <span className="text-xl group-hover:text-black transition-colors">
                    {social.icon}
                  </span>
                ) : (
                  <social.icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                )}
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
