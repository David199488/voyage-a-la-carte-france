
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    toast.success("Message envoyé ! Nous vous répondrons rapidement.");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre équipe est là pour vous accompagner dans la préparation de votre voyage. 
              N'hésitez pas à nous contacter !
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-8">Nos coordonnées</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-agency-green rounded-full p-3 mr-4">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    123 Rue Example<br />
                    Alger, Algérie
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-agency-green rounded-full p-3 mr-4">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                  <p className="text-gray-600">+213 XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-agency-green rounded-full p-3 mr-4">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">jovimaldn@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-agency-green rounded-full p-3 mr-4">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Horaires</h3>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 9h00 - 18h00<br />
                    Samedi: 9h00 - 14h00<br />
                    Dimanche: Fermé
                  </p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-12">
              <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-agency-green p-3 rounded-full transition-colors group"
                >
                  <Facebook className="w-6 h-6 text-gray-600 group-hover:text-black" />
                </a>
                <a
                  href="#"
                  className="bg-gray-200 hover:bg-agency-green p-3 rounded-full transition-colors group"
                >
                  <Instagram className="w-6 h-6 text-gray-600 group-hover:text-black" />
                </a>
                <a
                  href="https://wa.me/213XXXXXXXXX"
                  className="bg-gray-200 hover:bg-agency-green p-3 rounded-full transition-colors group"
                >
                  <span className="text-xl group-hover:text-black">📱</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-black mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom complet *</label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <input
                      type="tel"
                      placeholder="+213XXXXXXXXX"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Sujet</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="reservation">Réservation</option>
                      <option value="information">Demande d'information</option>
                      <option value="modification">Modification de voyage</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-agency-green"
                    placeholder="Décrivez votre demande..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-agency w-full py-4 px-6 rounded-lg font-semibold text-lg"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Section FAQ */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Questions fréquentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trouvez rapidement les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-agency-green">Comment réserver un voyage ?</h3>
              <p className="text-gray-600">
                Utilisez notre formulaire de réservation en ligne ou contactez-nous directement. 
                Nous vous guiderons dans toutes les étapes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-agency-green">Quels documents sont nécessaires ?</h3>
              <p className="text-gray-600">
                Un passeport valide est requis pour tous nos voyages. Pour certaines destinations, 
                un visa peut être nécessaire.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-agency-green">Puis-je modifier ma réservation ?</h3>
              <p className="text-gray-600">
                Les modifications sont possibles selon les conditions de la compagnie aérienne 
                et des hôtels. Des frais peuvent s'appliquer.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-lg mb-3 text-agency-green">Que comprend le prix ?</h3>
              <p className="text-gray-600">
                Nos prix incluent généralement les vols, l'hébergement, les transferts et les excursions. 
                Consultez le détail de chaque offre.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
