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
            A declarative, zero-runtime UI framework.<br />
            Open-source. Built by Motion Mind.
          </p>
          <div class="footerSocial">
            <a href="https://github.com/MotionMind2007/Levelo-Js" class="footerSocialLink" target="_blank">
              <i class="devicon-github-original"></i>
            </a>
            <a href="https://www.facebook.com/share/g/17ejwCuPRk/" class="footerSocialLink" target="_blank">
              <i class="devicon-facebook-plain"></i>
            </a>
            <a href="https://motionmind.me" class="footerSocialLink" target="_blank">
              <i class="levelo-icon icon-globe"></i>
            </a>
          </div>
        </div>

        <div class="footerCols">

          <div class="footerCol">
            <h4 class="footerColTitle">Framework</h4>
            <ul class="footerColLinks">
              <li><a href="/docs">Documentation</a></li>
              <li><a href="/docs#getting-started">Getting Started</a></li>
              <li><a href="/docs#api">API Reference</a></li>
              <li><a href="/examples">Examples</a></li>
              <li><a href="/changelog">Changelog</a></li>
            </ul>
          </div>

          <div class="footerCol">
            <h4 class="footerColTitle">Community</h4>
            <ul class="footerColLinks">
              <li><a href="https://github.com/MotionMind2007/Levelo-Js" target="_blank">GitHub</a></li>
              <li><a href="https://github.com/MotionMind2007/Levelo-Js/issues" target="_blank">Report an Issue</a></li>
              <li><a href="https://github.com/MotionMind2007/Levelo-Js/discussions" target="_blank">Discussions</a></li>
              <li><a href="https://www.facebook.com/share/g/17ejwCuPRk/" target="_blank">Facebook Group</a></li>
            </ul>
          </div>

          <div class="footerCol">
            <h4 class="footerColTitle">Motion Mind</h4>
            <ul class="footerColLinks">
              <li><a href="https://motionmind.me" target="_blank">Website</a></li>
              <li><a href="https://lab.motionmind.me" target="_blank">Lab</a></li>
              <li><a href="https://www.npmjs.com/package/create-levelo-app" target="_blank">npm</a></li>
            </ul>
          </div>

        </div>

      </div>

      <div class="footerBottom">
        <p class="footerCopy">© 2026 Motion Mind · MIT License</p>
        <p class="footerMade">Made with <em style={{marginLeft: '6px'}}>Levelo JS</em> ·  <em style={{color: '#C5C5C5'}}>Bangladesh 🇧🇩</em></p>
      </div>

    </footer>
  )
}