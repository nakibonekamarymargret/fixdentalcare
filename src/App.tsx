import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import Appointment from "./pages/Appointment.js";
import About from "./pages/About";
import Faq from "./pages/Faq.js";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
