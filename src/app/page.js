import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Counter from './components/Counter';
import Contact from './components/Contact';
import Whatsapp from './components/Whatsapp';
import Faq from './components/Faq';
import HorizontalScroll from './components/Infinitescroll';
import Repairservice from './components/Repairservice';






export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero/>
        <AboutUs />
        <Services />
        <Counter/>
        <WhyChooseUs />
        <Faq/>
        <HorizontalScroll/>
        <Contact/>
        <Repairservice/>
      </main>
      <Whatsapp/>
      <Footer />
    </>
  );
}
