import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';
import { state } from 'levelojs';

const code = `import { state } from 'levelojs';

export default function Toggle() {
  const [isOn, setIsOn] = state(false);
  return (
    <div>
      <h2>Toggle</h2>
      <p>Status: {isOn() ? 'ON' : 'OFF'}</p>
      <button
        onClick={() => setIsOn(!isOn())}
        style={{
          padding: '0.4rem 1rem',
          cursor: 'pointer',
          borderRadius: '6px',
          border: '1px solid #ccc',
          background: isOn() ? 'green' : '#f4f3ef',
          color: isOn() ? 'white' : '#2a2835',
          fontWeight: '600',
        }}
      >
        {isOn() ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  )
}`;


export default function Toggle() {
  const [isOn, setIsOn] = state(false);
  return (
    <section class="exSection" id="toggle">
      <div class="exBadge">Basic</div>
      <h2 class="exH2">Toggle Button</h2>
      <p class="exDesc">
        A simple toggle using <code class="exInlineCode">state()</code> with a boolean value.
        Shows how to conditionally render content and styles based on state.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/toggle.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            <h2>Toggle</h2>
            <p>Status: {isOn() ? 'ON' : 'OFF'}</p>
            <button
              onClick={() => setIsOn(!isOn())}
              style={{
                padding: '0.4rem 1rem',
                cursor: 'pointer',
                borderRadius: '6px',
                border: '1px solid #ccc',
                background: isOn() ? 'green' : '#f4f3ef',
                color: isOn() ? 'white' : '#2a2835',
                fontWeight: '600',
              }}
            >
              {isOn() ? 'Turn Off' : 'Turn On'}
            </button>
          </div>
        </div>
      </div>

      <p class="exNote">
        Use ternary operator <code class="exInlineCode">condition ? 'a' : 'b'</code> to
        conditionally render text or apply styles based on state.
      </p>
    </section>
  )
}