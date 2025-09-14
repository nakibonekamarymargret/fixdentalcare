import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Widgets from "./components/layout/Widgets";
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";

const App = () => { 
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/testimonials" element={<Testimonials />} />

        {/* Fallback route */}
      </Routes>
      <Widgets />

      <Footer />
    </Router>
  );
};

export default App;
