import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';
import { state } from 'levelojs';

const code = `import { state } from 'levelojs';

export default function StateExample() {
  
  const [name, setName] = state('');
  
  return (
    <div>
      <h2>state()</h2>
      <p>Type your name:</p>
      <input
        type="text"
        value={name()}
        onInput={(e) => setName(e.target.value)}
        placeholder="Enter your name..."
      />
      <p>Hello, {name() ? name() : 'stranger'}!</p>
    </div>
  )
}`;

export default function StateExample() {
  const [name, setName] = state('');
  return (
    <section class="exSection" id="state">
      <div class="exBadge">Reactivity</div>
      <h2 class="exH2">state()</h2>
      <p class="exDesc">
        <code class="exInlineCode">state()</code> creates a reactive signal.
        It returns a getter and a setter — call the getter as a function to read,
        call the setter to update.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/state-example.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            <h2>state()</h2>
            <p>Type your name:</p>
            <input
              type="text"
              value={name()}
              onInput={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              style={{
                marginTop: '0.5rem',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '0.9rem',
                width: '100%',
                outline: 'none',
              }}
            />
            <p style={{ marginTop: '0.75rem', fontWeight: '600' }}>
              Hello, {name() ? name() : 'stranger'}!
            </p>
          </div>
        </div>
      </div>

      <p class="exNote">
        <code class="exInlineCode">const [value, setValue] = state(initial)</code> —
        call <code class="exInlineCode">value()</code> to read,
        <code class="exInlineCode">setValue(newValue)</code> to update.
        The UI re-renders automatically.
      </p>
    </section>
  )
}