import './howitworks.css';

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

export default function HowItWorks() {
  return (
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
  )
}