import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Feature from './components/feature';
import Value from './components/value';
import CtaBanner from './components/cta';
import Faq from './components/faq';
import Footer from './components/footer';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Feature />
      <Value />
      <CtaBanner />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;