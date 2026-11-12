import { state, effect } from 'levelojs';
import './hero.css';

const [copied, setCopied] = state(false);
const [count, setCount] = state(0);

effect(() => {
  if (copied()) {
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }
});

/* [token class, text] — classes are styled in hero.css */
const code = [
  ['cm', '// pages/Home.jsx'],
  ['va', "import { state, style, head } from 'levelojs'"],
  ['', ''],
  ['fn', "head({ title: 'Home' })"],
  ['', ''],
  ['fn', 'style({'],
  ['str', '  ".wrap": { display: "flex", flexDirection: "column" },'],
  ['str', '  ".btn": { background: "var(--accent)", borderRadius: "8px" }'],
  ['pu', '})'],
  ['', ''],
  ['va', 'const [count, setCount] = state(0)'],
  ['', ''],
  ['kw', 'export default function Home() {'],
  ['va', '  return ('],
  ['tag', '    <div class="wrap">'],
  ['tag', '      <div class="hero">'],
  ['attr', '        <h2>Hello Levelo!</h2>'],
  ['attr', '        <p>Built with zero-runtime reactivity.</p>'],
  ['tag', '      </div>'],
  ['tag', '      <button class="btn"'],
  ['tag', '        onClick={() => setCount(count() + 1)}>'],
  ['pu', '        Clicks: {count()}'],
  ['tag', '      </button>'],
  ['tag', '    </div>'],
  ['va', '  )'],
  ['kw', '}'],
];

export default function Hero() {
  return (
    <div>

      {/* ───────── Hero ───────── */}
      <section class="hero">
        <div class="heroInner">
          <div class="heroContent">

            <div class="badge rise r1">
              <span class="badgeDot"></span>
              Beta · v2 · Zero Virtual DOM Overhead
            </div>

            <h1 class="heading rise r2">
              Build <em class="headingEm">faster.</em><br />
              Write less code.
            </h1>

            <p class="sub rise r3">
              Levelo JS is a lightweight reactive JavaScript framework with zero runtime overhead.
              No Virtual DOM. Direct Real DOM. By <a style={{ marginLeft: '5px', marginRight: '5px'}} href="https://motionmindx.com" class="brandLink">Motion Mind X.</a>
            </p>

            <div class="actions rise r4">
              <a href="/documents" class="ctaLink">
                Get started <span class="ctaArrow">→</span>
              </a>
              <a href="#features" class="ctaMuted">See features</a>
            </div>

            <div class="installPill rise r5">
              <code class="installCode">npx create-levelo-app my-app</code>
              <button
                class={copied() ? 'copyBtnCopied' : 'copyBtn'}
                onClick={() => {
                  navigator.clipboard.writeText('npx create-levelo-app my-app');
                  setCopied(true);
                }}
              >
                {copied() ? 'Copied!' : 'Copy'}
              </button>
            </div>

          </div>
        </div>

        {/* Poster: public/h.svg */}
        <div class="heroArt">
          <img
            class="heroImg"
            src="/h.svg"
            width="780"
            height="790"
            alt="Exploded view: JSX goes into Levelo and updates the Real DOM directly, skipping the Virtual DOM"
          />
        </div>
      </section>

      {/* ───────── Code showcase (light editor) ───────── */}
      <section class="showcase">
        <div class="showHeader">
          <h2 class="showHeading">Components that read like markup.</h2>
          <p class="showSub">State, styles and head tags live in the same file as your UI.</p>
        </div>

        <div class="codeStack">

          <div class="stackEditor">
            <div class="cardBar">
              <div class="browserDots">
                <span class="dotR"></span>
                <span class="dotY"></span>
                <span class="dotG"></span>
              </div>
              <span class="cardFile">pages/Home.jsx</span>
            </div>
            <div class="editorBody">
              {code.map(([cls, text], i) => (
                <div class="codeLine" key={i}>
                  <span class="ln">{i + 1}</span>
                  <span class={cls}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div class="stackPreview">
            <div class="cardBar cardBarSpread">
              <span class="previewLabel">Preview</span>
              <span class="previewBadge">● Live</span>
            </div>
            <div class="previewContent">
              <div class="previewH1">Hello Levelo!</div>
              <p class="previewP">Built with zero-runtime reactivity.</p>
              <button class="previewCountBtn" onClick={() => setCount(count() + 1)}>
                Clicks: {count()}
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}