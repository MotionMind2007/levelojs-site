import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';
import { state } from 'levelojs';

const code = `import { state } from 'levelojs';

const [count, setCount] = state(0);

export default function Counter() {
  return (
    <div>
      <h2>Counter</h2>
      <p style={{fontSize: '2rem'}}>{count()}</p>
      <div style={{ display: 'flex', gap: '10px'}}>
        <button onClick={() => setCount(count() + 1)}>
          + Increment
        </button>
        <button onClick={() => setCount(count() - 1)}>
          - Decrement
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  )
}`;

const [count, setCount] = state(0);

export default function Counter() {
  return (
    <section class="exSection" id="counter">
      <div class="exBadge">Basic</div>
      <h2 class="exH2">Counter</h2>
      <p class="exDesc">
        A simple counter using <code class="exInlineCode">state()</code> —
        the most basic example of reactive state in Levelo JS.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/counter.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            <h2>Counter</h2>
            <p style={{fontSize: '2rem'}}>{count()}</p>
            <div style={{ display: 'flex', gap: '10px'}}>
              <button
                onClick={() => setCount(count() + 1)}
                >+ Increment</button>
              <button
                onClick={() => setCount(count() - 1)}
                >- Decrement</button>
              <button
                onClick={() => setCount(0)}
                >↺ Reset</button>
            </div>
          </div>
        </div>
      </div>

      <p class="exNote">
        <code class="exInlineCode">state()</code> returns a getter and setter.
        Call <code class="exInlineCode">count()</code> to read the value,
        <code class="exInlineCode">setCount()</code> to update it.
      </p>
    </section>
  )
}