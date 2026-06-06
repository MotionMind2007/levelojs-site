import CodeBlock from '../codeBlock/codeBlock.jsx';
import './docContent.css';

const manualInstallCode = `npm install levelojs`;

const manualSetupCode = `// index.jsx
import { render } from 'levelojs';
import Mind from './Mind.jsx';
import './index.css';

render(Mind, document.getElementById('app'));`;

const manualHtmlCode = `<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/index.jsx"></script>
  </body>
</html>`;

const cliCode = `npx create-levelo-app my-app
cd my-app
npm install
npm run dev`;

const mindCode = `import { Pages, Page } from 'levelojs';
import Home from './pages/home.jsx';

function Mind() {
  return (
    <Pages>
      <Page path="/" component={Home} />
    </Pages>
  )
}
export default Mind;`;

const structureCode = `my-app/
├── src/
│   ├── pages/
│   │   └── home.jsx
│   ├── components/
│   ├── assets/
│   ├── index.css
│   ├── index.jsx
│   └── Mind.jsx
├── index.html
├── levelo.config.js
├── package.json
└── vite.config.js`;

const styleCode = `import { style } from 'levelojs';

const s = style({
  ".wrap": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "2rem",
  },
  ".btn": {
    background: "var(--accent)",
    color: "white",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
  },
});

export default s;`;

const styleJsxCode = `import { style } from 'levelojs';

const s = style({
  ".wrap": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "2rem",
  },
  ".btn": {
    background: "var(--accent)",
    color: "white",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
  },
});

export default s;`;

const styleImportCode = `import s from './HomeStyle.jsx';

export default function Home() {
  return (
    <div class={s.wrap}>
      <button class={s.btn}>Click me</button>
    </div>
  )
}`;

const headCode = `import { head } from 'levelojs';

head({
  title: 'My Page — My App',
  description: 'This is my page description.',
});`;

const stateCode = `import { state } from 'levelojs';

const [count, setCount] = state(0);

export default function Counter() {
  return (
    <div>
      <p>{count()}</p>
      <button onClick={() => setCount(count() + 1)}>
        Increment
      </button>
    </div>
  )
}`;

const computedCode = `import { state, computed } from 'levelojs';

const [price, setPrice] = state(100);
const [qty, setQty] = state(2);

const total = computed(() => price() * qty());

export default function Cart() {
  return (
    <div>
      <p>Total: {total()}</p>
    </div>
  )
}`;

const effectCode = `import { state, effect } from 'levelojs';

const [count, setCount] = state(0);

effect(() => {
  console.log('count changed:', count());
});

export default function App() {
  return (
    <button onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  )
}`;

const routingCode = `import { Pages, Page } from 'levelojs';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Blog from './pages/blog.jsx';

function Mind() {
  return (
    <Pages>
      <Page path="/" component={Home} />
      <Page path="/about" component={About} />
      <Page path="/blog" component={Blog} />
    </Pages>
  )
}
export default Mind;`;

const assetsCode = `import logo from '../assets/logo.svg';
import banner from '../assets/banner.png';

export default function Home() {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <img src={banner} alt="Banner" />
    </div>
  )
}`;

const globalCssCode = `/* index.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --accent: #5b4fff;
  --dark: #0f0e17;
}

.wrap {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
}`;

const fileCssCode = `/* home.css */
.wrap {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
}

.btn {
  background: var(--accent);
  color: white;
  border-radius: 8px;
  padding: 0.5rem 1rem;
}`;

const fileCssImportCode = `import './home.css';

export default function Home() {
  return (
    <div class="wrap">
      <button class="btn">Click me</button>
    </div>
  )
}`;

const styleJsxFileCode = `import { style } from 'levelojs';

const s = style({
  ".wrap": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "2rem",
  },
  ".btn": {
    background: "var(--accent)",
    color: "white",
    borderRadius: "8px",
    padding: "0.5rem 1rem",
  },
});

export default s;`;

const styleJsxImportCode = `import s from './homeStyle.jsx';

export default function Home() {
  return (
    <div class={s.wrap}>
      <button class={s.btn}>Click me</button>
    </div>
  )
}`;

const inlineStyleCode = `import { style } from 'levelojs';

style({
  ".wrap": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  ".btn": {
    background: "var(--accent)",
    color: "white",
    borderRadius: "8px",
  },
});

export default function Home() {
  return (
    <div class="wrap">
      <button class="btn">Click me</button>
    </div>
  )
}`;

const inlineObjectCode = `export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <button style={{ background: "var(--accent)", color: "white" }}>
        Click me
      </button>
    </div>
  )
}`;

const deployCode = `// Build your app
npm run build

// Output folder: dist/
// Deploy dist/ to any static host:
// - Vercel
// - Netlify
// - GitHub Pages
// - Cloudflare Pages`;

export default function DocContent() {
  return (
    <div class="docContent">

      {/* ─── What is Levelo JS ─── */}
      <section class="docSection" id="what-is">
        <div class="docBadge">Introduction</div>
        <h1 class="docH1">What is Levelo JS?</h1>
        <p class="docP">
          Levelo JS is a declarative, zero-runtime UI framework with no Virtual DOM.
          Built for maximum efficiency and predictable state management —
          it gives you a familiar JSX syntax with a clean, lightweight architecture.
        </p>
        <p class="docP">
          Levelo JS is open-source and built by <a href="https://motionmind.me" class="docLink" style={{marginLeft: '6px'}} target="_blank">Motion Mind</a> —
          a next-gen tech studio from Bangladesh.
        </p>
        <div class="docCallout">
          <i class="levelo-icon icon-info"></i>
          <p>Levelo JS is currently in <strong style={{marginLeft: '5px'}}>Beta</strong>. APIs may change before the stable release.</p>
        </div>
      </section>

      <div class="docDivider"></div>

      {/* ─── Why Levelo JS ─── */}
      <section class="docSection" id="why">
        <h2 class="docH2">Why Levelo JS?</h2>
        <p class="docP">
          Most frameworks come with heavy runtimes, complex tooling, and steep learning curves.
          Levelo JS strips all that away — giving you just what you need to build fast, readable, maintainable UIs.
        </p>
        <ul class="docList">
          <li>No Virtual DOM — direct, predictable updates</li>
          <li>Zero runtime overhead — lightweight bundles</li>
          <li>Signal-based reactivity — <code class="docInlineCode">state()</code>, <code class="docInlineCode">computed()</code>, <code class="docInlineCode">effect()</code></li>
          <li>Scoped styles with <code class="docInlineCode">style()</code> API</li>
          <li>Per-page meta with <code class="docInlineCode">head()</code> API</li>
          <li>File-based routing via <code class="docInlineCode">Mind.jsx</code></li>
          <li>Works anywhere — any platform, any device</li>
        </ul>
      </section>

      <div class="docDivider"></div>

      {/* ─── Installation ─── */}
      <section class="docSection" id="installation">
  <h2 class="docH2">Installation</h2>
  <p class="docP">
    There are two ways to get started with Levelo JS.
  </p>

  <h3 class="docH3">Option A — CLI (Recommended)</h3>
  <p class="docP">
    The fastest way. Scaffolds a complete project with the correct
    folder structure, config, and entry point — ready to run instantly.
  </p>
  <CodeBlock filename="terminal" code={cliCode} />

  <h3 class="docH3">Option B — Manual Setup</h3>
  <p class="docP">
    Install Levelo JS directly into an existing project and set up your own entry point.
  </p>
  <CodeBlock filename="terminal" code={manualInstallCode} />
  <p class="docP">
    Create your entry file and render your root component:
  </p>
  <CodeBlock filename="index.jsx" code={manualSetupCode} />
  <p class="docP">
    Make sure your <code class="docInlineCode">index.html</code> has a root element:
  </p>
  <CodeBlock filename="index.html" code={manualHtmlCode} />

  <div class="docCallout">
    <i class="levelo-icon icon-info"></i>
    <p>
      For most projects, <strong>Option A</strong> is recommended —
      it handles all the configuration automatically.
    </p>
  </div>
</section>

      <div class="docDivider"></div>

      {/* ─── Project Structure ─── */}
      <section class="docSection" id="structure">
        <div class="docBadge">Getting Started</div>
        <h2 class="docH2">Project Structure</h2>
        <p class="docP">
          A Levelo JS project follows a simple, predictable structure:
        </p>
        <CodeBlock filename="my-app/" code={structureCode} />
        <ul class="docList">
          <li><code class="docInlineCode">Mind.jsx</code> — app entry point, defines all routes</li>
          <li><code class="docInlineCode">pages/</code> — one file per route</li>
          <li><code class="docInlineCode">components/</code> — reusable UI components</li>
          <li><code class="docInlineCode">assets/</code> — images, icons, fonts</li>
        </ul>
      </section>

      <div class="docDivider"></div>

      {/* ─── Mind.jsx ─── */}
      <section class="docSection" id="mind">
        <h2 class="docH2">Mind.jsx Entry</h2>
        <p class="docP">
          <code class="docInlineCode">Mind.jsx</code> is the single entry point of your app.
          All routes are registered here using <code class="docInlineCode">Pages</code> and <code class="docInlineCode">Page</code> components.
        </p>
        <CodeBlock filename="src/Mind.jsx" code={mindCode} />
        <div class="docCallout">
          <i class="levelo-icon icon-info"></i>
          <p>Every new page must be manually registered in <strong>Mind.jsx</strong>. There is no automatic file-based routing.</p>
        </div>
      </section>

      <div class="docDivider"></div>

      {/* ─── Routing ─── */}
      <section class="docSection" id="routing">
        <div class="docBadge">Core Concepts</div>
        <h2 class="docH2">Pages & Routing</h2>
        <p class="docP">
          Routing in Levelo JS is explicit and manual. Create a <code class="docInlineCode">.jsx</code> file
          in the <code class="docInlineCode">pages/</code> folder, then register it in <code class="docInlineCode">Mind.jsx</code>.
        </p>
        <CodeBlock filename="src/Mind.jsx" code={routingCode} />
      </section>

      <div class="docDivider"></div>

      {/* ─── style() ─── */}
      <section class="docSection" id="style">
        <h2 class="docH2">style() API</h2>
        <p class="docP">
          The <code class="docInlineCode">style()</code> function lets you define scoped styles
          as a plain JavaScript object. Each key becomes a CSS class.
        </p>
        <CodeBlock filename="components/myStyle.jsx" code={styleCode} />
        <div class="docCallout">
          <i class="levelo-icon icon-info"></i>
          <p>Style keys use CSS selector syntax — prefix with <strong>"."</strong> for class names.</p>
        </div>
      </section>

      <div class="docDivider"></div>

      {/* ─── head() ─── */}
      <section class="docSection" id="head">
        <h2 class="docH2">head() API</h2>
        <p class="docP">
          Use <code class="docInlineCode">head()</code> at the top of any page component
          to set the page title and meta description. This keeps your app SEO-friendly.
        </p>
        <CodeBlock filename="pages/home.jsx" code={headCode} />
      </section>

      <div class="docDivider"></div>

      {/* ─── Components ─── */}
      <section class="docSection" id="components">
        <h2 class="docH2">Components</h2>
        <p class="docP">
          Components in Levelo JS are plain functions that return JSX.
          Import and use them like any other JSX framework.
          Keep reusable components in the <code class="docInlineCode">components/</code> folder.
        </p>
        <div class="docCallout">
          <i class="levelo-icon icon-info"></i>
          <p>Page-specific components can live inside the page's own folder — e.g. <strong>pages/documents/components/</strong></p>
        </div>
      </section>

      <div class="docDivider"></div>

      {/* ─── state() ─── */}
      <section class="docSection" id="state">
        <div class="docBadge">Reactivity</div>
        <h2 class="docH2">state()</h2>
        <p class="docP">
          <code class="docInlineCode">state()</code> creates a reactive signal.
          It returns a getter and a setter — call the getter as a function to read the value.
        </p>
        <CodeBlock filename="pages/counter.jsx" code={stateCode} />
      </section>

      <div class="docDivider"></div>

      {/* ─── computed() ─── */}
      <section class="docSection" id="computed">
        <h2 class="docH2">computed()</h2>
        <p class="docP">
          <code class="docInlineCode">computed()</code> creates a derived value that
          automatically updates when its dependencies change.
        </p>
        <CodeBlock filename="pages/cart.jsx" code={computedCode} />
      </section>

      <div class="docDivider"></div>

      {/* ─── effect() ─── */}
      <section class="docSection" id="effect">
        <h2 class="docH2">effect()</h2>
        <p class="docP">
          <code class="docInlineCode">effect()</code> runs a side effect whenever
          its reactive dependencies change. Use it for logging, fetching data, or DOM manipulation.
        </p>
        <CodeBlock filename="pages/app.jsx" code={effectCode} />
      </section>

      <div class="docDivider"></div>

      {/* ─── Assets ─── */}
      <section class="docSection" id="assets">
        <div class="docBadge">Advanced</div>
        <h2 class="docH2">Assets & Images</h2>
        <p class="docP">
          Import images, SVGs, and other assets directly in your components.
          Levelo JS handles asset bundling automatically via Vite.
        </p>
        <CodeBlock filename="pages/home.jsx" code={assetsCode} />
      </section>

      <div class="docDivider"></div>

      {/* ─── CSS ─── */}
      <section class="docSection" id="css">
        <h2 class="docH2">CSS & Styling</h2>
        <p class="docP">
          Levelo JS supports five different approaches for styling.
            Use whichever fits your workflow best.
        </p>

        {/* Approach 1 */}
        <h3 class="docH3">1. Global CSS</h3>
        <p class="docP">
          Write styles in <code class="docInlineCode">index.css</code> — available everywhere in your app.
          Best for resets, CSS variables, and shared utility classes.
        </p>
        <CodeBlock filename="index.css" code={globalCssCode} lang="css" />

        {/* Approach 2 */}
        <h3 class="docH3">2. File CSS</h3>
        <p class="docP">
          Create a <code class="docInlineCode">.css</code> file and import it directly in your component.
          Use class names as plain strings.
        </p>
        <CodeBlock filename="pages/home.css" code={fileCssCode} lang="css" />
        <CodeBlock filename="pages/home.jsx" code={fileCssImportCode} />

        {/* Approach 3 */}
        <h3 class="docH3">3. Style JSX File</h3>
        <p class="docP">
          Create a separate <code class="docInlineCode">style.jsx</code> file using the <code class="docInlineCode">style()</code> API.
          Import it and use the returned object — <code class="docInlineCode">s.wrap</code> gives you the generated class name.
          This is what makes Levelo JS unique from other frameworks.
        </p>
        <CodeBlock filename="pages/homeStyle.jsx" code={styleJsxFileCode} />
        <CodeBlock filename="pages/home.jsx" code={styleJsxImportCode} />

        {/* Approach 4 */}
        <h3 class="docH3">4. Inline style() — Same File</h3>
        <p class="docP">
          Call <code class="docInlineCode">style()</code> directly at the top of your component file.
          Use class names as plain strings in JSX. No separate file needed.
        </p>
        <CodeBlock filename="pages/home.jsx" code={inlineStyleCode} />

        {/* Approach 5 */}
        <h3 class="docH3">5. Inline Object Style</h3>
        <p class="docP">
          Pass a style object directly to any JSX element using the <code class="docInlineCode">style</code> attribute.
          Best for quick one-off styles.
        </p>
        <CodeBlock filename="pages/home.jsx" code={inlineObjectCode} />

        <div class="docCallout">
          <i class="levelo-icon icon-info"></i>
          <p>
            For large projects, the <strong>Style JSX File</strong> approach is recommended —
            it keeps styles organized, scoped, and easy to maintain.
          </p>
        </div>
      </section>

      <div class="docDivider"></div>

      {/* ─── Deployment ─── */}
      <section class="docSection" id="deployment">
        <h2 class="docH2">Deployment</h2>
        <p class="docP">
          Build your app with a single command. The output goes to the
          <code class="docInlineCode">dist/</code> folder — deploy it anywhere.
        </p>
        <CodeBlock filename="terminal" code={deployCode} />
        <div class="docCallout">
          <i class="levelo-icon icon-rocket"></i>
          <p>This very site is deployed on <strong style={{marginLeft: '5px', marginRight: '5px'}}>Vercel</strong> using Levelo JS — zero issues.</p>
        </div>
      </section>

    </div>
  )
}