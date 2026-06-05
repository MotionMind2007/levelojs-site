import './features.css';

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

export default function Features() {
  return (
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
  )
}