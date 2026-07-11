import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';
import { state, effect, cleanup } from 'levelojs';

const code = `import { state, effect, cleanup } from 'levelojs';

export default function CleanupExample() {
  const [seconds, setSeconds] = state(0);

  effect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds() + 1);
    }, 1000);

    // Automatically clear the interval before the effect re-runs or when the component unmounts
    cleanup(() => {
      clearInterval(interval);
    });
  });

  return (
    <div>
      <h2>cleanup()</h2>
      <p>Time spent on page: {seconds()}s</p>
    </div>
  )
}`;

export default function CleanupExample() {
  const [seconds, setSeconds] = state(0);

  effect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds() + 1);
    }, 1000);

    cleanup(() => {
      clearInterval(interval);
    });
  });

  return (
    <section class="exSection" id="cleanup">
      <div class="exBadge">Lifecycle</div>
      <h2 class="exH2">cleanup()</h2>
      <p class="exDesc">
        <code class="exInlineCode">cleanup()</code> registers a callback that executes immediately before the current reactive scope is destroyed or re-run. Perfect for clearing intervals or listeners.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/cleanup-example.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            <h2>cleanup()</h2>
            <div 
              style={{
                marginTop: '1rem',
                padding: '1rem',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                textAlign: 'center'
              }}
            >
              <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
                Time spent on this page:
              </p>
              <p style={{ marginTop: '0.5rem', fontSize: '1.5rem', fontWeight: '700', color: '#5b4fff' }}>
                {seconds()}s
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="exNote">
        <code class="exInlineCode">cleanup(callback)</code> — registering a cleanup inside an 
        <code class="exInlineCode">effect()</code> guarantees that setup allocations are safely disposed of, ensuring zero memory leaks during page transitions.
      </p>
    </section>
  )
}