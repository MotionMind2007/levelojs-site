import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';

const code = `import { head } from 'levelojs';

export default function Home() {
  head({ title: 'hello world' })
  return (
    <div>
      <h1>Hello, Levelo JS!</h1>
      <p>My first Levelo JS app.</p>
    </div>
  )
}`;

export default function HelloWorld() {
  return (
    <section class="exSection" id="hello-world">
      <div class="exBadge">Basic</div>
      <h2 class="exH2">Hello World</h2>
      <p class="exDesc">
        The simplest Levelo JS component — a page that renders a heading and a paragraph.
        Every page is just a function that returns JSX.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/home.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            <h1>Hello, Levelo JS!</h1>
            <p>My first Levelo JS app.</p>
          </div>
        </div>
      </div>

      <p class="exNote">
        <code class="exInlineCode">head()</code> sets the page title —
        call it at the top of any page component.
      </p>
    </section>
  )
}