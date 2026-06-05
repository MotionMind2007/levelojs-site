import './cta.css';

export default function CTA() {
  return (
    <section class="ctaSection">
      <div class="ctaInner">
        <h2 class="ctaHeading">
          Start building with<br />
          <em class="ctaEm">Levelo JS</em> today.
        </h2>
        <p class="ctaSub">
          An open-source framework by <strong>Motion Mind</strong> — 
          a next-gen tech studio from Bangladesh, building tools for developers everywhere.
        </p>
        <div class="ctaActions">
          <a href="https://github.com/MotionMind2007/Levelo-Js" class="ctaBtnAccent">
            <i class="levelo-icon icon-github"></i>
            View on GitHub
          </a>
          <a href="https://motionmind.me" class="ctaBtnGhost">
            Motion Mind ↗
          </a>
        </div>
      </div>
    </section>
  )
}