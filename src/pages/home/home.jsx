import { head } from 'levelojs';
import logo from '../../assets/logo-colored.svg';
import Header from '../../components/header/header.jsx';
import Hero from '../../components/hero/hero.jsx';
import Marquee from '../../components/marquee/marquee.jsx';
import Definition from '../../components/definition/definition.jsx';
import Features from '../../components/features/features.jsx';
import HowItWorks from '../../components/howitworks/howitworks.jsx';
import CTA from '../../components/cta/cta.jsx';
import Footer from '../../components/footer/footer.jsx';

export default function Home() {
  head({
    title: 'Levelo JS — Zero Virtual DOM Overhead',
    description: "Levelo JS is a lightweight, ultra-fast reactive JavaScript framework built for speed and simplicity. No Virtual DOM. Direct Real DOM. Powered by",
  });
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