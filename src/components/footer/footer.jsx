import './footer.css';

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footerInner">

        <div class="footerBrandCol">
          <div class="footerLogo">
            <span class="footerLogoText">Levelo <em>Js</em></span>
          </div>
          <p class="footerTagline">
            A declarative, zero-runtime overhead UI framework.<br />
            Open-source. Built by Motion Mind X.
          </p>
          <div class="footerSocial">
            <a
              href="https://github.com/MotionMind2007/Levelo-Js"
              class="footerSocialLink"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Levelo JS on GitHub"
              title="GitHub"
            >
              <i class="devicon-github-original"></i>
            </a>
            <a
              href="https://www.npmjs.com/package/levelojs"
              class="footerSocialLink"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="levelojs on npm"
              title="npm"
            >
              <i class="devicon-npm-original-wordmark"></i>
            </a>
          </div>
        </div>

        <div class="footerCols">

          <div class="footerCol">
            <h4 class="footerColTitle">Framework</h4>
            <ul class="footerColLinks">
              <li><a href="/documents">Documentation</a></li>
              <li><a href="/documents">Getting Started</a></li>
              <li><a href="/examples">Examples</a></li>
              <li><a href="https://www.npmjs.com/package/create-levelo-app" target="_blank" rel="noopener noreferrer">create-levelo-app</a></li>
            </ul>
          </div>

          <div class="footerCol">
            <h4 class="footerColTitle">Community</h4>
            <ul class="footerColLinks">
              <li><a href="https://github.com/MotionMind2007/Levelo-Js" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://github.com/MotionMind2007/Levelo-Js/issues" target="_blank" rel="noopener noreferrer">Report an Issue</a></li>
              <li><a href="https://github.com/MotionMind2007/Levelo-Js/discussions" target="_blank" rel="noopener noreferrer">Discussions</a></li>
            </ul>
          </div>

          <div class="footerCol">
            <h4 class="footerColTitle">Motion Mind X</h4>
            <ul class="footerColLinks">
              <li><a href="https://motionmindx.com" target="_blank" rel="noopener noreferrer">Website ↗</a></li>
            </ul>
          </div>

        </div>

      </div>

      <div class="footerBottom">
        <p class="footerCopy">© 2026 Motion Mind X · MIT License</p>
        <p class="footerMade">Made with <em style={{ marginLeft: '6px' }}>Levelo JS</em> · <em style={{ color: '#C5C5C5' }}>Bangladesh 🇧🇩</em></p>
      </div>

    </footer>
  )
}