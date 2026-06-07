import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';
import { state } from 'levelojs';

const code = `import { state } from 'levelojs';

const [active, setActive] = state(0);

const tabs = ['Home', 'About', 'Contact'];

export default function InlineStyle() {
  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              background: active() === i ? '#5b4fff' : '#f4f3ef',
              color: active() === i ? 'white' : '#2a2835',
            }}
          >{tab}</button>
        ))}
      </div>
      <div style={{
        padding: '1.5rem',
        borderRadius: '10px',
        border: '1px solid #e5e3dc',
        background: '#ffffff',
      }}>
        <p style={{ fontSize: '0.9rem', color: '#7c7a8e' }}>
          You are on the <strong style={{ marginLeft: '5px', marginRight: '5px', color: '#5b4fff' }}>{tabs[active()]}</strong> page.
        </p>
      </div>
    </div>
  )
}`;

const [active, setActive] = state(0);
const tabs = ['Home', 'About', 'Contact'];

export default function InlineStyle() {
  return (
    <section class="exSection" id="inline-style">
      <div class="exBadge">Styling</div>
      <h2 class="exH2">Inline Style</h2>
      <p class="exDesc">
        Pass a style object directly to any JSX element using the
        <code class="exInlineCode"> style</code> attribute.
        Best for dynamic styles that depend on state.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/inline-style.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '600',
                    background: active() === i ? '#5b4fff' : '#f4f3ef',
                    color: active() === i ? 'white' : '#2a2835',
                  }}
                >{tab}</button>
              ))}
            </div>
            <div style={{
              padding: '1.5rem',
              borderRadius: '10px',
              border: '1px solid #e5e3dc',
              background: '#ffffff',
            }}>
              <p style={{ fontSize: '0.9rem', color: '#7c7a8e' }}>
                You are on the <strong style={{ marginLeft: '5px', marginRight: '5px', color: '#5b4fff' }}>{tabs[active()]}</strong> page.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="exNote">
        Inline styles are perfect for dynamic values —
        use <code class="exInlineCode">style={'{{ property: value }}'}</code> in JSX.
        For static styles, prefer <code class="exInlineCode">style()</code> API or File CSS.
      </p>
    </section>
  )
}