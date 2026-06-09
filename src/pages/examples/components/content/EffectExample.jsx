// src/pages/examples/components/content/EffectExample.jsx
import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';
import { state, effect } from 'levelojs';

const code = `import { state, effect } from 'levelojs';

export default function EffectExample() {
  const [count, setCount] = state(0);
  const [syncStatus, setSyncStatus] = state('Idle');

  // EFFECT WORKBENCH: Safely updates localStorage and updates the UI status trigger
  effect(() => {
    localStorage.setItem('levelo_count', count());
    
    // Briefly show a sync message to the user
    setSyncStatus('Syncing...');
    const timer = setTimeout(() => setSyncStatus('Saved to LocalStorage!'), 400);
    
    return () => clearTimeout(timer);
  });

  return (
    <section class="exSection" id="effect">
      <div class="exBadge">Reactivity</div>
      <h2 class="exH2">effect()</h2>
      <p class="exDesc">
        <code class="exInlineCode">effect()</code> runs a side effect whenever
        its reactive dependencies change. Use it for logging, fetching data,
        or syncing with external systems like LocalStorage.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/effect-example.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            <h2>effect() LocalStorage Sync</h2>
            <p>Count: {() => count()}</p>
            <p style={{ fontSize: '0.85rem', color: '#7c7a8e', margin: '0.25rem 0 0.75rem' }}>
              Click increment to trigger the effect. It will automatically serialize the value to your browser storage.
            </p>
            <button
              onClick={() => setCount(prev => prev + 1)}
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
            
            {/* Live indicator showing the effect activity */}
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              background: '#ece9ff',
              borderRadius: '8px',
              fontSize: '0.85rem',
              color: '#5b4fff',
              fontFamily: 'Geist Mono, monospace',
              display: 'flex',
              justifyContent: 'between',
              alignItems: 'center'
            }}>
              <span>Storage Status:</span>
              <strong style={{ marginLeft: 'auto', color: '#10b981' }}>{() => syncStatus()}</strong>
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
}`;

export default function EffectExample() {
  const [count, setCount] = state(0);
  const [syncStatus, setSyncStatus] = state('Idle');

  // EFFECT WORKBENCH: Safely updates localStorage and updates the UI status trigger
  effect(() => {
    localStorage.setItem('levelo_count', count());
    
    // Briefly show a sync message to the user
    setSyncStatus('Syncing...');
    const timer = setTimeout(() => setSyncStatus('Saved to LocalStorage!'), 400);
    
    return () => clearTimeout(timer);
  });

  return (
    <section class="exSection" id="effect">
      <div class="exBadge">Reactivity</div>
      <h2 class="exH2">effect()</h2>
      <p class="exDesc">
        <code class="exInlineCode">effect()</code> runs a side effect whenever
        its reactive dependencies change. Use it for logging, fetching data,
        or syncing with external systems like LocalStorage.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/effect-example.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            <h2>effect() LocalStorage Sync</h2>
            <p>Count: {() => count()}</p>
            <p style={{ fontSize: '0.85rem', color: '#7c7a8e', margin: '0.25rem 0 0.75rem' }}>
              Click increment to trigger the effect. It will automatically serialize the value to your browser storage.
            </p>
            <button
              onClick={() => setCount(prev => prev + 1)}
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
            
            {/* Live indicator showing the effect activity */}
            <div style={{
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              background: '#ece9ff',
              borderRadius: '8px',
              fontSize: '0.85rem',
              color: '#5b4fff',
              fontFamily: 'Geist Mono, monospace',
              display: 'flex',
              justifyContent: 'between',
              alignItems: 'center'
            }}>
              <span>Storage Status:</span>
              <strong style={{ marginLeft: 'auto', color: '#10b981' }}>{() => syncStatus()}</strong>
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
