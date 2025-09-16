
import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
  window.gtag('config', 'G-01BBHJV5H8', {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div style={{margin: 0, padding: 0}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
