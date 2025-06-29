
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VisaElectronique = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="flex items-center justify-center min-h-[60vh]">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center">
              Prochainement...
            </h1>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VisaElectronique;
