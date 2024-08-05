import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Confetti from "react-confetti";
import Home from './pages/Home';
import Services from './pages/Services';
import Recruitment from './pages/Recruitment';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Hanan from './pages/teams/hanan';
import Abdurezaq from './pages/teams/abdurezaq';
import Roman from './pages/teams/roman';
import Imamudin from './pages/teams/imamudin';
import Muhammed from './pages/teams/muhammed';
import Ezedin from './pages/teams/ezedin';
import HeaderTop from './components/HeaderTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArHome from './ar/pages/ArHome';
import ArServices from './ar/pages/ArServices';
import ArRecruitment from './ar/pages/ArRecruitment';
import ArGallery from './ar/pages/ArGallery';
import ArAbout from './ar/pages/ArAbout';
import ArContact from './ar/pages/ArContact';
import ArHanan from './ar/pages/teams/ArHanan';
import ArAbdurezaq from './ar/pages/teams/ArAbdurezaq';
import ArRoman from './ar/pages/teams/ArRoman';
import ArImamudin from './ar/pages/teams/ArImamudin';
import ArMuhammed from './ar/pages/teams/ArMuhammed';
import ArEzedin from './ar/pages/teams/ArEzedin';
import ArHeaderTop from './ar/components/ArHeaderTop';
import ArNavbar from './ar/components/ArNavbar';
import ArFooter from './ar/components/ArFooter';
import GoUpButton from './components/GoUpButton';
import './styles/index.css';

function App() {

  return (
      <Router>
        <MainApp />
      </Router>
  );
}

const MainApp = () => {
  const location = useLocation();
  const isArabic = location.pathname.startsWith("/ar");
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={isArabic ? "rtl" : "ltr"}>
      <div className="flex flex-col min-h-screen bg-gray-600">
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={1000}
            gravity={0.3}
            colors={['#a4cF37', '#ff477e', '#D4AF37', '#ff85a1', '#bff4d7']}
          />
        )}
        {isArabic ? <ArHeaderTop /> : <HeaderTop />}
        {isArabic ? <ArNavbar /> : <Navbar />}
        <main className="flex-grow pt-2">
          <Routes>
            <Route path="/" element={<Navigate to="/en/" />} />
            <Route path="/en/" element={<Home />} />
            <Route path="/en/services" element={<Services />} />
            <Route path="/en/recruitment" element={<Recruitment />} />
            <Route path="/en/gallery" element={<Gallery />} />
            <Route path="/en/about" element={<About />} />
            <Route path="/en/contact" element={<Contact />} />
            <Route path='/en/teams/hanan' element={<Hanan />} />
            <Route path='/en/teams/abdurezaq' element={<Abdurezaq />} />
            <Route path='/en/teams/roman' element={<Roman />} />
            <Route path='/en/teams/imamudin' element={<Imamudin />} />
            <Route path='/en/teams/muhammed' element={<Muhammed />} />
            <Route path='/en/teams/ezedin' element={<Ezedin />} />
            <Route path="/ar/" element={<ArHome />} />
            <Route path="/ar/services" element={<ArServices />} />
            <Route path="/ar/recruitment" element={<ArRecruitment />} />
            <Route path="/ar/gallery" element={<ArGallery />} />
            <Route path="/ar/about" element={<ArAbout />} />
            <Route path="/ar/contact" element={<ArContact />} />
            <Route path='/ar/teams/hanan' element={<ArHanan />} />
            <Route path='/ar/teams/abdurezaq' element={<ArAbdurezaq />} />
            <Route path='/ar/teams/roman' element={<ArRoman />} />
            <Route path='/ar/teams/imamudin' element={<ArImamudin />} />
            <Route path='/ar/teams/muhammed' element={<ArMuhammed />} />
            <Route path='/ar/teams/ezedin' element={<ArEzedin />} />
          </Routes>
        </main>
        {isArabic ? <ArFooter /> : <Footer />}
        <GoUpButton />
      </div>
    </div>
  )
}

export default App;
