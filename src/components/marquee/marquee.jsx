import { state, effect } from 'levelojs';
import './marquee.css';

const items = [
  'By Motion Mind',
  'File-Based Routing',
  'JSX Syntax',
  'Reactive state()',
  'style() API',
  'head() API',
  'Mind.jsx Entry',
  'Zero Runtime',
  'No Virtual DOM',
  'Acode Compatible',
  'By Motion Mind',
  'Zero Config',
  'pages/ Folder',
  'levelojs/vite Plugin',
];

const getRepeatCount = () => {
  const width = window.innerWidth;
  if (width < 480) return 6;
  if (width < 768) return 4;
  return 3;
};

const [repeatCount, setRepeatCount] = state(getRepeatCount());

effect(() => {
  const handleResize = () => setRepeatCount(getRepeatCount());
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
});

export default function Marquee() {
  const repeated = Array.from(
    { length: repeatCount() },
    () => items
  ).flat();

  return (
    <div class="marqueeWrap">
      <div class="marqueeTrack">
        {repeated.map((item, i) => (
          <span class="marqueeItem" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}