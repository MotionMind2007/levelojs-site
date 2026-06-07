import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';
import { state, computed } from 'levelojs';

const code = `import { state, computed } from 'levelojs';

const [price, setPrice] = state(100);
const [qty, setQty] = state(1);

const total = computed(() => price() * qty());

export default function ComputedExample() {
  return (
    <div>
      <h2>computed()</h2>
      <p>Price: {price()}</p>
      <input
        type="number"
        value={price()}
        onInput={(e) => setPrice(Number(e.target.value))}
      />
      <p>Quantity: {qty()}</p>
      <input
        type="number"
        value={qty()}
        onInput={(e) => setQty(Number(e.target.value))}
      />
      <p>Total: {total()}</p>
    </div>
  )
}`;

const [price, setPrice] = state(100);
const [qty, setQty] = state(1);

const total = computed(() => price() * qty());

export default function ComputedExample() {
  return (
    <section class="exSection" id="computed">
      <div class="exBadge">Reactivity</div>
      <h2 class="exH2">computed()</h2>
      <p class="exDesc">
        <code class="exInlineCode">computed()</code> creates a derived value that
        automatically updates when its dependencies change.
        No manual updates needed.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/computed-example.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            <h2>computed()</h2>

            <div style={{ marginTop: '0.75rem' }}>
              <p style={{ fontSize: '0.85rem', color: '#7c7a8e', marginBottom: '0.25rem' }}>Price:</p>
              <input
                type="number"
                value={price()}
                onInput={(e) => setPrice(Number(e.target.value))}
                style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '0.9rem',
                  width: '100%',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ marginTop: '0.75rem' }}>
              <p style={{ fontSize: '0.85rem', color: '#7c7a8e', marginBottom: '0.25rem' }}>Quantity:</p>
              <input
                type="number"
                value={qty()}
                onInput={(e) => setQty(Number(e.target.value))}
                style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '0.9rem',
                  width: '100%',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              background: '#ece9ff',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontWeight: '600', color: '#2a2835' }}>Total:</span>
              <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#5b4fff' }}>{total()}</span>
            </div>
          </div>
        </div>
      </div>

      <p class="exNote">
        <code class="exInlineCode">computed(() => price() * qty())</code> automatically
        recalculates whenever <code class="exInlineCode">price()</code> or
        <code class="exInlineCode">qty()</code> changes.
      </p>
    </section>
  )
}