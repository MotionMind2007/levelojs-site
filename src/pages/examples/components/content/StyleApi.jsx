import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';
import { style } from 'levelojs';

const sameFileCode = `import { style } from 'levelojs';

style({
  ".card": {
    padding: "1.5rem",
    borderRadius: "12px",
    border: "1px solid #e5e3dc",
    background: "#ffffff",
  },
  ".cardTitle": {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#0f0e17",
  },
  ".cardText": {
    fontSize: "0.9rem",
    color: "#7c7a8e",
    lineHeight: "1.6",
  },
  ".btn": {
    marginTop: "1rem",
    padding: "0.45rem 1rem",
    borderRadius: "8px",
    border: "none",
    background: "#5b4fff",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },
});

export default function Home() {
  return (
    <div class="card">
      <h3 class="cardTitle">Levelo JS</h3>
      <p class="cardText">Scoped styles — same file approach.</p>
      <button class="btn">Learn More</button>
    </div>
  )
}`;

const styleFileCode = `// homeStyle.jsx
import { style } from 'levelojs';

const homeStyle = style({
  ".card": {
    padding: "1.5rem",
    borderRadius: "12px",
    border: "1px solid #e5e3dc",
    background: "#ffffff",
  },
  ".cardTitle": {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#0f0e17",
  },
  ".cardText": {
    fontSize: "0.9rem",
    color: "#7c7a8e",
    lineHeight: "1.6",
  },
  ".btn": {
    marginTop: "1rem",
    padding: "0.45rem 1rem",
    borderRadius: "8px",
    border: "none",
    background: "#5b4fff",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },
});

export default homeStyle;`;

const importCode = `// home.jsx
import homeStyle from './homeStyle.jsx';

export default function Home() {
  return (
    <div class={homeStyle.card}>
      <h3 class={homeStyle.cardTitle}>Levelo JS</h3>
      <p class={homeStyle.cardText}>Scoped styles — separate file approach.</p>
      <button class={homeStyle.btn}>Learn More</button>
    </div>
  )
}`;

const s = style({
  ".previewCard": {
    padding: "1.5rem",
    borderRadius: "12px",
    border: "1px solid #e5e3dc",
    background: "#ffffff",
  },
  ".previewCardTitle": {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#0f0e17",
    marginBottom: "0.5rem",
  },
  ".previewCardText": {
    fontSize: "0.9rem",
    color: "#7c7a8e",
    lineHeight: "1.6",
  },
  ".previewBtn": {
    marginTop: "1rem",
    padding: "0.45rem 1rem",
    borderRadius: "8px",
    border: "none",
    background: "#5b4fff",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    display: "block",
  },
});

export default function StyleApi() {
  return (
    <section class="exSection" id="style-api">
      <div class="exBadge">Styling</div>
      <h2 class="exH2">style() API</h2>
      <p class="exDesc">
        <code class="exInlineCode">style()</code> lets you define scoped styles
        as a plain JavaScript object. Use it in the same file or a separate style file —
        both approaches work perfectly.
      </p>

      <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--dark)', marginBottom: '0.5rem' }}>
        Approach 1 — Same file:
      </p>
      <CodeBlock filename="pages/home.jsx" code={sameFileCode} />

      <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--dark)', margin: '1.5rem 0 0.5rem' }}>
        Approach 2 — Separate style file:
      </p>
      <CodeBlock filename="homeStyle.jsx" code={styleFileCode} />
      <CodeBlock filename="pages/home.jsx" code={importCode} />

      <p style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--dark)', margin: '1.5rem 0 0.5rem' }}>
        Preview:
      </p>
      <div class="exPreview">
        <div class="exPreviewHeader">
          <span class="exPreviewLabel">Preview</span>
          <span class="exPreviewBadge">● Live</span>
        </div>
        <div class="exPreviewBody">
          <div class={s.previewCard}>
            <h3 class={s.previewCardTitle}>Levelo JS</h3>
            <p class={s.previewCardText}>
              Scoped styles with the style() API —
              works like React's stylesheet but simpler.
            </p>
            <button class={s.previewBtn}>Learn More</button>
          </div>
        </div>
      </div>

      <p class="exNote">
        Both approaches produce the same result. Use <strong>same file</strong> for
        small components, <strong>separate file</strong> for larger ones to keep
        code organized.
      </p>
    </section>
  )
}