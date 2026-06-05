import { head } from 'levelojs';
import logo from '../assets/logo-colored.svg';
import Header from '../components/header/header.jsx';
import Hero from '../components/hero/hero.jsx';
import Marquee from '../components/marquee/marquee.jsx';
import Definition from '../components/definition/definition.jsx';
import Features from '../components/features/features.jsx';
import HowItWorks from '../components/howitworks/howitworks.jsx';
import CTA from '../components/cta/cta.jsx';
import Footer from '../components/footer/footer.jsx';

head({
  title: 'Levelo JS — Zero Runtime, No-VDOM UI Framework',
  description: "A declarative, zero-runtime UI framework with no Virtual DOM. Engineered for maximum efficiency, predictable state management and lightweight bundles."
});

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Marquee />
      <Definition />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}