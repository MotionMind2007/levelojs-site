import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';

const cssCode = `/* home.css */
.header {
  background: #0f0e17;
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
}

.headerTitle {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.headerBadge {
  font-size: 0.7rem;
  font-weight: 600;
  background: #5b4fff;
  padding: 0.25rem 0.6rem;
  border-radius: 100px;
}

.statRow {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.statBox {
  flex: 1;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #e5e3dc;
  background: #ffffff;
  text-align: center;
}

.statNum {
  font-size: 1.5rem;
  font-weight: 700;
  color: #5b4fff;
}

.statLabel {
  font-size: 0.75rem;
  color: #7c7a8e;
  margin-top: 0.25rem;
}`;

const jsxCode = `import './home.css';

export default function Home() {
  return (
    <div>
      <div class="header">
        <span class="headerTitle">Dashboard</span>
        <span class="headerBadge">Live</span>
      </div>
      <div class="statRow">
        <div class="statBox">
          <div class="statNum">2.4k</div>
          <div class="statLabel">Users</div>
        </div>
        <div class="statBox">
          <div class="statNum">98%</div>
          <div class="statLabel">Uptime</div>
        </div>
        <div class="statBox">
          <div class="statNum">14ms</div>
          <div class="statLabel">Response</div>
        </div>
      </div>
    </div>
  )
}`;

export default function FileCss() {
  return (
    <section class="exSection" id="file-css">
      <div class="exBadge">Styling</div>
      <h2 class="exH2">File CSS</h2>
      <p class="exDesc">
        Import a plain <code class="exInlineCode">.css</code> file directly
        into your component. Use class names as plain strings in JSX.
        Best for component-specific styles with media query support.
      </p>

      <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--dark)', marginBottom: '0.5rem' }}>
        Step 1 — Create a CSS file:
      </p>
      <CodeBlock filename="home.css" code={cssCode} lang="css" />

      <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--dark)', margin: '1.5rem 0 0.5rem' }}>
        Step 2 — Import and use:
      </p>
      <CodeBlock filename="pages/home.jsx" code={jsxCode} />

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
            background: '#0f0e17',
            color: 'white',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '10px',
          }}>
            <span style={{ fontSize: '1rem', fontWeight: '700', letterSpacing: '-0.01em' }}>Dashboard</span>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: '600',
              background: '#5b4fff',
              padding: '0.25rem 0.6rem',
              borderRadius: '100px',
            }}>Live</span>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <div style={{
              flex: '1',
              padding: '1rem',
              borderRadius: '10px',
              border: '1px solid #e5e3dc',
              background: '#ffffff',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#5b4fff' }}>2.4k</div>
              <div style={{ fontSize: '0.75rem', color: '#7c7a8e', marginTop: '0.25rem' }}>Users</div>
            </div>
            <div style={{
              flex: '1',
              padding: '1rem',
              borderRadius: '10px',
              border: '1px solid #e5e3dc',
              background: '#ffffff',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#5b4fff' }}>98%</div>
              <div style={{ fontSize: '0.75rem', color: '#7c7a8e', marginTop: '0.25rem' }}>Uptime</div>
            </div>
            <div style={{
              flex: '1',
              padding: '1rem',
              borderRadius: '10px',
              border: '1px solid #e5e3dc',
              background: '#ffffff',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#5b4fff' }}>14ms</div>
              <div style={{ fontSize: '0.75rem', color: '#7c7a8e', marginTop: '0.25rem' }}>Response</div>
            </div>
          </div>
        </div>
      </div>

      <p class="exNote">
        File CSS supports media queries, animations, and all CSS features.
        Import with <code class="exInlineCode">import './home.css'</code> —
        class names are plain strings in JSX.
      </p>
    </section>
  )
}