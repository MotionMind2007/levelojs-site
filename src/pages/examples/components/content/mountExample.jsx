import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';
import { state, mount } from 'levelojs';

const code = `import { state, mount } from 'levelojs';

export default function MountExample() {
  const [frameworks, setFrameworks] = state([]);
  const [loading, setLoading] = state(true);

  // mount() guarantees execution only ONCE when the component enters the DOM
  mount(() => {
    const repos = [
      'MotionMind2007/Levelo-Js',
      'facebook/react',
      'vuejs/core'
    ];

    // Fetching live ecosystem data on initial load
    Promise.all(
      repos.map(repo => 
        fetch(\`https://api.github.com/repos/\${repo}\`).then(res => res.json())
      )
    )
    .then(data => {
      const stats = data.map(r => ({
        name: r.name,
        stars: r.stargazers_count,
        forks: r.forks_count
      }));
      setFrameworks(stats);
      setLoading(false);
    })
    .catch(() => setLoading(false));
  });

  return (
    <div>
      <h2>mount() Ecosystem Overview</h2>
      {loading() ? (
        <p>Loading live ecosystem metrics...</p>
      ) : (
        <ul>
          {frameworks().map(repo => (
            <li>{repo.name} — ⭐ {repo.stars}</li>
          ))}
        </ul>
      )}
    </div>
  )
}`;

export default function MountExample() {
  const [frameworks, setFrameworks] = state([]);
  const [loading, setLoading] = state(true);

  mount(() => {
    const repos = [
      'MotionMind2007/Levelo-Js',
      'facebook/react',
      'vuejs/core'
    ];

    Promise.all(
      repos.map(repo => 
        fetch(`https://api.github.com/repos/${repo}`).then(res => res.json())
      )
    )
    .then(data => {
      const stats = data.map(r => ({
        name: r.name,
        owner: r.owner.login,
        stars: r.stargazers_count,
      }));
      setFrameworks(stats);
      setLoading(false);
    })
    .catch(() => setLoading(false));
  });

  return (
    <section class="exSection" id="mount">
      <div class="exBadge">Lifecycle</div>
      <h2 class="exH2">mount()</h2>
      <p class="exDesc">
        <code class="exInlineCode">mount()</code> schedules a callback to run right after the component has been successfully rendered and painted onto the DOM. It guarantees execution <strong>exactly once</strong> during the initialization.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/mount-example.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live on Mount</span>
          </div>
          <div class="exPreviewBody">
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>
              Ecosystem Live Stats
            </h3>
            
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              {loading() ? (
                <div 
                  style={{ 
                    padding: '1.5rem', 
                    textAlign: 'center', 
                    color: '#64748b', 
                    backgroundColor: '#f8fafc', 
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  Mounting component & fetching data...
                </div>
              ) : (
                frameworks().map(repo => (
                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.6rem 1rem',
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: '700', color: repo.name === 'Levelo-Js' ? '#5b4fff' : '#1e293b', fontSize: '0.9rem' }}>
                        {repo.name}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', marginLeft: '6px' }}>
                        @{repo.owner}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.85rem', color: '#eab308', fontWeight: '600' }}>
                      ⭐ {repo.stars.toLocaleString()}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <p class="exNote">
        <code class="exInlineCode">mount(callback)</code> is perfect for one-time operations. Since it runs after the DOM is fully painted, it ensures all elements are active without blocking the initial page paint.
      </p>
    </section>
  )
}