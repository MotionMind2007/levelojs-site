import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';
import { state, effect } from 'levelojs';

const code = `import { state, effect } from 'levelojs';

const [count, setCount] = state(0);

effect(() => {
  document.title = 'Count: ' + count();
});

export default function EffectExample() {
  return (
    <div>
      <h2>effect()</h2>
      <p>Count: {count()}</p>
      <p>Check your browser tab title!</p>
      <button onClick={() => setCount(count() + 1)}>
        Increment
      </button>
    </div>
  )
}`;

const [count, setCount] = state(0);

effect(() => {
  document.title = 'Count: ' + count();
});

export default function EffectExample() {
  return (
    <section class="exSection" id="effect">
      <div class="exBadge">Reactivity</div>
      <h2 class="exH2">effect()</h2>
      <p class="exDesc">
        <code class="exInlineCode">effect()</code> runs a side effect whenever
        its reactive dependencies change. Use it for logging, fetching data,
        or syncing with external systems.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/effect-example.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            <h2>effect()</h2>
            <p>Count: {count()}</p>
            <p style={{ fontSize: '0.85rem', color: '#7c7a8e', margin: '0.25rem 0 0.75rem' }}>
              Check your browser tab title!
            </p>
            <button
              onClick={() => setCount(count() + 1)}
              style={{
                padding: '0.4rem 1rem',
                cursor: 'pointer',
                borderRadius: '6px',
                border: 'none',
                background: '#5b4fff',
                color: 'white',
                fontWeight: '600',
              }}
            >Increment</button>
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              background: '#ece9ff',
              borderRadius: '8px',
              fontSize: '0.85rem',
              color: '#5b4fff',
              fontFamily: 'Geist Mono, monospace',
            }}>
              Tab title: Count: {count()}
            </div>
          </div>
        </div>
      </div>

      <p class="exNote">
        <code class="exInlineCode">effect()</code> automatically tracks
        <code class="exInlineCode">count()</code> and re-runs whenever it changes.
        No manual subscription needed.
      </p>
    </section>
  )
}