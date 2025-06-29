
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from '@/components/ScrollToTop';
import Index from '@/pages/Index';
import Istanbul from '@/pages/Istanbul';
import Vietnam from '@/pages/Vietnam';
import Malaisie from '@/pages/Malaisie';
import Zanzibar from '@/pages/Zanzibar';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/istanbul" element={<Istanbul />} />
          <Route path="/vietnam" element={<Vietnam />} />
          <Route path="/malaisie" element={<Malaisie />} />
          <Route path="/zanzibar" element={<Zanzibar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
