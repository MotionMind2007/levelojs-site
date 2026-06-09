import { state, effect } from 'levelojs';
import './hero.css';

const [copied, setCopied] = state(false);
const [count, setCount] = state(0);

effect(() => {
  if (copied()) {
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }
});

const line1 = "// pages/Home.jsx";
const line2 = "import { state, style, head } from 'levelojs'";
const line4 = "head({ title: 'Home' })";
const line6 = "style({";
const line7 = '  ".wrap": { display: "flex", flexDirection: "column" },';
const line8 = '  ".btn": { background: "var(--accent)", borderRadius: "8px" }';
const line9 = "})";
const line11 = "const [count, setCount] = state(0)";
const line13 = "export default function Home() {";
const line14 = "  return (";
const line15 = '    <div class="wrap">';
const line16 = '      <div class="hero">';
const line17 = '        <h2>Hello Levelo!</h2>';
const line18 = '        <p>Built with zero-runtime reactivity.</p>';
const line19 = '      <button class="btn"';
const line20 = "        onClick={() => setCount(count() + 1)}>";
const line21 = "        Clicks: {count()}";
const line22 = "      </button>";
const line23 = "    </div>";
const line24 = "  )";
const line25 = "}";

export default function Hero() {
  return (
    <div class="section">

      <div class="heroContent">
        <div class="badge">
          <span class="badgeDot"></span>
          Beta · v1.0.4 · Zero-Runtime
        </div>

        <h1 class="heading">
          Build <em style={{ fontStyle: 'italic', color: 'var(--accent)', marginLeft: '6px', }}>faster.</em><br />
          Write less code.
        </h1>

        <p class="sub">
          A declarative, zero-runtime UI framework with no Virtual DOM —
          engineered for maximum efficiency, predictable state management,
          and lightweight bundles by <h4 style={{ color: 'var(--accent)', marginLeft: '6px' }}>Motion Mind.</h4>
        </p>

        <div class="actions">
          <a href="/documents" class="btnFill">
            Get Started →
          </a>
          <a href="#features" class="btnGhost">
            See Features
          </a>
        </div>

        <div class="installPill">
          <code class="installCode">npx create-levelo-app my-app</code>
          <button
            class={copied() ? 'copyBtnCopied' : 'copyBtn'}
            onClick={() => {
              navigator.clipboard.writeText('npx create-levelo-app my-app');
              setCopied(true);
            }}
          >
            {copied() ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Browser Mockup */}
      <div class="heroVisual">
        <div class="browserFrame">

          {/* Browser Bar */}
          <div class="browserBar">
            <div class="browserDots">
              <span class="dotR"></span>
              <span class="dotY"></span>
              <span class="dotG"></span>
            </div>
            <div class="browserUrl">
              <span style={{color: 'var(--muted)', fontSize: '0.73rem'}} class="urlLock"><i class="icon-lock"></i></span>
              localhost:6262
            </div>
            <div class="browserActions">
              <div class="bAction">←</div>
              <div class="bAction">→</div>
              <div class="bAction">⟳</div>
            </div>
          </div>

          {/* Browser Content */}
          <div class="browserContent">

            {/* App Sidebar */}
            <div class="appSidebar">
              <div class="sidebarLogoRow">
                <span class="sidebarBrand">levelo-app</span>
              </div>
              <div class="sidebarSection">
                <div class="sidebarLabel">Pages</div>
                <div class="sidebarItemActive"><div class="icon-file"></div> Home.jsx <span class="dotOrange"></span></div>
                <div class="sidebarItem">📄 About.jsx</div>
                <div class="sidebarItem">📄 Blog.jsx</div>
              </div>
              <div class="sidebarSection">
                <div class="sidebarLabel">Root</div>
                <div class="sidebarItem">⚡ Mind.jsx <span class="dotGreen"></span></div>
                <div class="sidebarItem">⚙️ levelo.config.js</div>
              </div>
            </div>

            {/* Editor + Preview */}
            <div class="appMain">

              {/* Editor Pane */}
              <div class="editorPane">
                <div class="editorTabs">
                  <div style={{display: 'flex', gap: '5px'}} class="editorTabActive"><i class="devicon-javascript-plain colored"></i>Home.jsx</div>
                  <div class="editorTab" style={{display: 'flex', gap: '5px'}}><i class="devicon-javascript-plain colored"></i> Mind.jsx</div>
                </div>
                <div class="editorBody">
                  <div class="codeLine"><span class="ln">1</span><span class="cm">{line1}</span></div>
                  <div class="codeLine"><span class="ln">2</span><span class="va">{line2}</span></div>
                  <div class="codeLine"><span class="ln">3</span></div>
                  <div class="codeLine"><span class="ln">4</span><span class="fn">{line4}</span></div>
                  <div class="codeLine"><span class="ln">5</span></div>
                  <div class="codeLine"><span class="ln">6</span><span class="fn">{line6}</span></div>
                  <div class="codeLine"><span class="ln">7</span><span class="str">{line7}</span></div>
                  <div class="codeLine"><span class="ln">8</span><span class="str">{line8}</span></div>
                  <div class="codeLine"><span class="ln">9</span><span class="pu">{line9}</span></div>
                  <div class="codeLine"><span class="ln">10</span></div>
                  <div class="codeLine"><span class="ln">11</span><span class="va">{line11}</span></div>
                  <div class="codeLine"><span class="ln">12</span></div>
                  <div class="codeLine"><span class="ln">13</span><span class="kw">{line13}</span></div>
                  <div class="codeLine"><span class="ln">14</span><span class="va">{line14}</span></div>
                  <div class="codeLine"><span class="ln">15</span><span class="tag">{line15}</span></div>
                  <div class="codeLine"><span class="ln">16</span><span class="tag">{line16}</span></div>
                  <div class="codeLine"><span class="ln">17</span><span class="attr">{line17}</span></div>
                  <div class="codeLine"><span class="ln">18</span><span class="attr">{line18}</span></div>
                  <div class="codeLine"><span class="ln">19</span><span class="tag">{line19}</span></div>
                  <div class="codeLine"><span class="ln">20</span><span class="tag">{line20}</span></div>
                  <div class="codeLine"><span class="ln">21</span><span class="pu">{line21}</span></div>
                  <div class="codeLine"><span class="ln">22</span><span class="tag">{line22}</span></div>
                  <div class="codeLine"><span class="ln">23</span><span class="tag">{line23}</span></div>
                  <div class="codeLine"><span class="ln">24</span><span class="va">{line24}</span></div>
                  <div class="codeLine"><span class="ln">25</span><span class="tag">{line25}</span></div>
                </div>
              </div>

              {/* Preview Pane */}
              <div class="previewPane">
                <div class="previewHeader">
                  <span class="previewLabel">Preview</span>
                  <span class="previewBadge">● Live</span>
                </div>
                <div class="previewContent">
                  <div class="previewH1">Hello Levelo!</div>
                  <p class="previewP">Built with zero-runtime reactivity.</p>
                  <div class="previewCounter">
                    <button
                      class="previewCountBtn"
                      onClick={() => setCount(count() + 1)}
                    >
                      Clicks: {count()}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}