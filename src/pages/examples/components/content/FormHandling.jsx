import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';
import { state } from 'levelojs';

const code = `import { state, head } from 'levelojs';

head({ title: 'Form Handling — Levelo JS' });

export default function FormHandling() {
  const [submitted, setSubmitted] = state(false);
  const [data, setData] = state({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    const name = document.getElementById('f-name').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const message = document.getElementById('f-message').value.trim();
    if (!name || !email || !message) return;
    setData({ name, email, message });
    setSubmitted(true);
  };

  const handleReset = () => {
    setData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div style={{ maxWidth: '400px', padding: '1.5rem' }}>
      {submitted() ? (
        <div>
          <h3>Submitted!</h3>
          <p>Name: {data().name}</p>
          <p>Email: {data().email}</p>
          <p>Message: {data().message}</p>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <div>
          <h3>Contact Form</h3>
          <input id="f-name" type="text" placeholder="Your name" />
          <input id="f-email" type="email" placeholder="Your email" />
          <textarea id="f-message" placeholder="Your message"></textarea>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  )
}`;

export default function FormHandling() {
  const [submitted, setSubmitted] = state(false);
  const [data, setData] = state({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    const name = document.getElementById('f-name').value.trim();
    const email = document.getElementById('f-email').value.trim();
    const message = document.getElementById('f-message').value.trim();
    if (!name || !email || !message) return;
    setData({ name, email, message });
    setSubmitted(true);
  };

  const handleReset = () => {
    setData({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section class="exSection" id="form">
      <div class="exBadge">Real World</div>
      <h2 class="exH2">Form Handling</h2>
      <p class="exDesc">
        A contact form with validation and submission state.
        Shows how to read multiple inputs and conditionally render
        success state in Levelo JS.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/form.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            {submitted() ? (
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#00b37e',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                  }}>✓</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f0e17' }}>
                    Form Submitted!
                  </h3>
                </div>

                <div style={{
                  background: '#f4f3ef',
                  borderRadius: '8px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  <p style={{ fontSize: '0.85rem', color: '#2a2835' }}>
                    <strong>Name:</strong> {data().name}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#2a2835' }}>
                    <strong>Email:</strong> {data().email}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#2a2835' }}>
                    <strong>Message:</strong> {data().message}
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid #e5e3dc',
                    background: 'transparent',
                    color: '#7c7a8e',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                  }}
                >← Reset</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#0f0e17', marginBottom: '0.25rem' }}>
                  Contact Form
                </h3>

                <input
                  id="f-name"
                  type="text"
                  placeholder="Your name"
                  style={{
                    padding: '0.5rem 0.8rem',
                    borderRadius: '6px',
                    border: '1px solid #e5e3dc',
                    fontSize: '0.88rem',
                    outline: 'none',
                    width: '100%',
                  }}
                />
                <input
                  id="f-email"
                  type="email"
                  placeholder="Your email"
                  style={{
                    padding: '0.5rem 0.8rem',
                    borderRadius: '6px',
                    border: '1px solid #e5e3dc',
                    fontSize: '0.88rem',
                    outline: 'none',
                    width: '100%',
                  }}
                />
                <textarea
                  id="f-message"
                  placeholder="Your message"
                  style={{
                    padding: '0.5rem 0.8rem',
                    borderRadius: '6px',
                    border: '1px solid #e5e3dc',
                    fontSize: '0.88rem',
                    outline: 'none',
                    width: '100%',
                    minHeight: '80px',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                ></textarea>

                <button
                  onClick={handleSubmit}
                  style={{
                    padding: '0.5rem 1.2rem',
                    borderRadius: '6px',
                    border: 'none',
                    background: '#5b4fff',
                    color: 'white',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: '0.88rem',
                    alignSelf: 'flex-start',
                  }}
                >Submit →</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <p class="exNote">
        Use <code class="exInlineCode">document.getElementById()</code> to read form values.
        Conditionally render success state with ternary —
        <code class="exInlineCode">submitted() ? &lt;Success /&gt; : &lt;Form /&gt;</code>.
      </p>
    </section>
  )
}