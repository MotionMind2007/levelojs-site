import { head } from 'levelojs';
import Header from '../../components/header/header.jsx';
import Hero from '../../components/hero/hero.jsx';
import Footer from '../../components/footer/footer.jsx';
import './home.css';

/* ---------- Marquee ---------- */
const marqueeItems = [
  'By Motion Mind X',
  'File-Based Routing',
  'JSX Syntax',
  'Reactive state()',
  'style() API',
  'head() API',
  'Mind.jsx Entry',
  'Zero Runtime',
  'No Virtual DOM',
  'Acode Compatible',
  'Zero Config',
  'pages/ Folder',
  'levelojs/vite Plugin',
];

/* ---------- Definition ---------- */
const defPills = [
  'state()',
  'style({})',
  'head({})',
  'computed()',
  'render()',
  'effect()',
  '<Pages />',
  '<Page />',
];

/* ---------- Features ---------- */
const cards = [
  {
    icon: 'icon-route',
    title: 'File-Based Routing',
    desc: 'Define routes manually in Mind.jsx using <Page> components. Clean, explicit, and fully in your control.',
  },
  {
    icon: 'icon-zap',
    title: 'Reactivity Built-in',
    desc: 'state(), computed(), and effect() — signal-based reactivity with zero boilerplate. No providers, no wrappers.',
  },
  {
    icon: 'icon-paintbrush',
    title: 'style() API',
    desc: 'Write scoped styles as plain objects inside your component. No CSS modules, no classname conflicts.',
  },
  {
    icon: 'icon-tag',
    title: 'head() API',
    desc: 'Set page title, meta description, and other head tags per component. SEO-ready out of the box.',
  },
  {
    icon: 'icon-brain',
    title: 'Mind.jsx Entry',
    desc: 'One intentional entry point that bootstraps your entire app. Simple, readable, and easy to extend.',
  },
  {
    icon: 'icon-globe',
    title: 'Works Anywhere',
    desc: 'Build any kind of web app — landing pages, dashboards, e-commerce. No platform restrictions.',
  },
  {
    icon: 'icon-rocket',
    title: 'Built with Levelo JS',
    desc: 'This landing page is built entirely with Levelo JS. Still in beta — but already stable enough for production.',
  },
];

/* ---------- How it works ---------- */
const steps = [
  {
    num: '1',
    title: 'Scaffold your app',
    desc: 'Run the create command. Your project is ready with the correct folder structure instantly.',
    code: 'npx create-levelo-app my-app',
  },
  {
    num: '2',
    title: 'Build your pages',
    desc: 'Add pages to the pages/ folder. Register them in Mind.jsx. Use state(), style(), and head() to build your UI.',
    code: 'pages/Home.jsx → "/"',
  },
  {
    num: '3',
    title: 'Deploy anywhere',
    desc: 'Levelo outputs optimized bundles. Deploy to any static host, CDN, or server — zero platform lock-in.',
    code: 'npm run build',
  },
];

export default function Home() {
  head({
    title: 'Levelo JS — Zero Runtime Overhead',
    description:
      'Levelo JS is a lightweight reactive JavaScript framework with zero runtime overhead. No Virtual DOM. Direct Real DOM. Powered by Motion Mind X.',
  });

  return (
    <div>
      <Header />
      <Hero />

      {/* Marquee: the list is rendered twice so the CSS animation can loop at -50% */}
      <div class="marqueeWrap">
        <div class="marqueeTrack">
          {marqueeItems.map((item, i) => (
            <span class="marqueeItem" key={i}>{item}</span>
          ))}
          {marqueeItems.map((item, i) => (
            <span class="marqueeItem" key={'b' + i}>{item}</span>
          ))}
        </div>
      </div>

      {/* Definition */}
      <section class="defSection">
        <div class="defLeft">
          <div class="pronunciation">/'lɛvəloʊ/</div>
          <span class="adj">Framework</span>
          <div class="meaning">component-focused, declarative &amp; lightweight</div>
        </div>

        <div class="defRight">
          <h2 class="defHeading">A new way to think about components.</h2>
          <p class="defText">
            Levelo JS introduces a declarative way to bind styles and logic
            to UI elements. No className juggling, no context hell.
            Just clean, readable components that make sense at a glance.
          </p>
          <div class="defPills">
            {defPills.map((pill, i) => (
              <span class="defPill" key={i}>{pill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="featSection" id="features">
        <div class="featInner">
          <div class="featHeader">
            <p class="featEyebrow">Core Features</p>
            <h2 class="featHeading">Everything built in.<br />Nothing bolted on.</h2>
          </div>

          <div class="featGrid">
            {cards.map((card, i) => (
              <div class="featCard" key={i}>
                <div class="featIcon">
                  <i class={`levelo-icon ${card.icon}`}></i>
                </div>
                <h3 class="featTitle">{card.title}</h3>
                <p class="featDesc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section class="howSection" id="how">
        <div class="howInner">
          <div class="howHeader">
            <p class="howEyebrow">Getting Started</p>
            <h2 class="howHeading">Running in under<br />60 seconds.</h2>
          </div>

          <div class="howSteps">
            <div class="stepConnector"></div>
            {steps.map((step, i) => (
              <div class="howStep" key={i}>
                <div class="stepNumWrap">
                  <div class="stepNum">{step.num}</div>
                  <h3 class="stepTitle">{step.title}</h3>
                </div>
                <p class="stepDesc">{step.desc}</p>
                <div class="stepCode">{step.code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="ctaSection">
        <div class="ctaInner">
          <h2 class="ctaHeading">
            Start building with<br />
            <em style={{ marginRight: '6px' }} class="ctaEm">Levelo JS</em> today.
          </h2>
          <p class="ctaSub">
            An open-source framework by <strong style={{ marginLeft: '6px' }}>Motion Mind X</strong> —
            a next-gen tech studio from Bangladesh, building tools for developers everywhere.
          </p>
          <div class="ctaActions">
            <a href="https://github.com/MotionMind2007/Levelo-Js" class="ctaBtnAccent">
              <i class="levelo-icon icon-github"></i>
              View on GitHub
            </a>
            <a href="https://motionmindx.com" class="ctaBtnGhost">
              Motion Mind X ↗
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}