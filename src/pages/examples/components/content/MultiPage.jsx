import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';

const mindCode = `import { Pages, Page } from 'levelojs';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';

function Mind() {
  return (
    <Pages>
      <Page path="/" component={Home} />
      <Page path="/about" component={About} />
      <Page path="/contact" component={Contact} />
    </Pages>
  )
}

export default Mind;`;

const homeCode = `export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my Levelo JS app.</p>
      <a href="/about">Go to About</a>
    </div>
  )
}`;

const aboutCode = `export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This app is built with Levelo JS.</p>
      <a href="/contact">Go to Contact</a>
    </div>
  )
}`;

const contactCode = `export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Reach us at hello@example.com</p>
      <a href="/">Back to Home</a>
    </div>
  )
}`;

export default function MultiPage() {
  return (
    <section class="exSection" id="multi-page">
      <div class="exBadge">Routing</div>
      <h2 class="exH2">Multi-Page App</h2>
      <p class="exDesc">
        Register multiple pages in <code class="exInlineCode">Mind.jsx</code> using
        <code class="exInlineCode"> Pages</code> and <code class="exInlineCode">Page</code> components.
        Each <code class="exInlineCode">{'<a href="...">'}</code> navigates without a full page reload.
      </p>

      <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--dark)', marginBottom: '0.5rem' }}>
        Mind.jsx — register all routes:
      </p>
      <CodeBlock filename="src/Mind.jsx" code={mindCode} />

      <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--dark)', margin: '1.5rem 0 0.5rem' }}>
        pages/home.jsx:
      </p>
      <CodeBlock filename="pages/home.jsx" code={homeCode} />

      <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--dark)', margin: '1.5rem 0 0.5rem' }}>
        pages/about.jsx:
      </p>
      <CodeBlock filename="pages/about.jsx" code={aboutCode} />

      <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--dark)', margin: '1.5rem 0 0.5rem' }}>
        pages/contact.jsx:
      </p>
      <CodeBlock filename="pages/contact.jsx" code={contactCode} />

      <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--dark)', margin: '1.5rem 0 0.5rem' }}>
        Preview:
      </p>
      <div class="exPreview">
        <div class="exPreviewHeader">
          <span class="exPreviewLabel">Preview</span>
          <span class="exPreviewBadge">● Live</span>
        </div>
        <div class="exPreviewBody">
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem',
            borderBottom: '1px solid #e5e3dc',
            paddingBottom: '1rem',
          }}>
            <span style={{
              padding: '0.3rem 0.8rem',
              borderRadius: '6px',
              background: '#5b4fff',
              color: 'white',
              fontSize: '0.82rem',
              fontWeight: '600',
            }}>/ Home</span>
            <span style={{
              padding: '0.3rem 0.8rem',
              borderRadius: '6px',
              background: '#f4f3ef',
              color: '#7c7a8e',
              fontSize: '0.82rem',
              fontWeight: '600',
            }}>/about</span>
            <span style={{
              padding: '0.3rem 0.8rem',
              borderRadius: '6px',
              background: '#f4f3ef',
              color: '#7c7a8e',
              fontSize: '0.82rem',
              fontWeight: '600',
            }}>/contact</span>
          </div>
          <h1 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f0e17', marginBottom: '0.5rem' }}>
            Home Page
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#7c7a8e', marginBottom: '1rem' }}>
            Welcome to my Levelo JS app.
          </p>
          <a style={{
            color: '#5b4fff',
            fontWeight: '600',
            fontSize: '0.88rem',
            textDecoration: 'none',
            borderBottom: '1px solid #5b4fff',
          }}>Go to About →</a>
        </div>
      </div>

      <p class="exNote">
        Every internal <code class="exInlineCode">{'<a href="...">'}</code> is automatically
        intercepted by Levelo JS router — no full page reload, instant navigation.
      </p>
    </section>
  )
}