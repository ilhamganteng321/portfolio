import './App.css'
import AboutSection from './components/About';
import BlogSection from './components/Blog';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/Hero'
import ProjectsSection from './components/Projects';
import ServicesSection from './components/Service';
import TestimonialsSection from './components/Testimonial';

function App() {

  return  (
    <div className="App">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <BlogSection/>
      <ServicesSection/>
      <Footer/>
    </div>
  );
}

export default App
