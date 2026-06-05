import './definition.css';

export default function Definition() {
  return (
    <section class="defSection">

      <div class="defLeft">
        <div class="pronunciation">/'lɛvəloʊ/</div>
        <span class="adj">Framework</span>
        <div class="meaning">component-focused, declarative &amp; lightweight</div>
      </div>

      <div class="defRight">
        <h2 class="defHeading">A new way to think about components.</h2>
        <p class="defText">
          Levelo JS introduces a declarative way to bind styles and logic
          to UI elements. No className juggling, no context hell.
          Just clean, readable components that make sense at a glance.
        </p>
        <div class="defPills">
          <span class="defPill">state()</span>
          <span class="defPill">style({})</span>
          <span class="defPill">head({})</span>
          <span class="defPill">computed()</span>
          <span class="defPill">render()</span>
          <span class="defPill">effect()</span>
          <span class="defPill">&lt;Pages /&gt;</span>
          <span class="defPill">&lt;Page /&gt;</span>
        </div>
      </div>

    </section>
  )
}