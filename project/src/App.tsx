import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import QuoteForm from './components/QuoteForm';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const quoteRef = useRef<HTMLDivElement>(null);

  const scrollToQuote = () => {
    quoteRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onGetQuote={scrollToQuote} />
      <Hero onGetQuote={scrollToQuote} />
      <Gallery />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <div ref={quoteRef}>
        <QuoteForm />
      </div>
      <CTA onGetQuote={scrollToQuote} />
      <Footer />
    </div>
  );
}

export default App;
