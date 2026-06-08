import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import HelloWorld from './components/content/HelloWorld.jsx';
import Counter from './components/content/Counter.jsx';
import Toggle from './components/content/Toggle.jsx';
import StateExample from './components/content/StateExample.jsx';
import ComputedExample from './components/content/ComputedExample.jsx';
import EffectExample from './components/content/EffectExample.jsx';
import StyleApi from './components/content/StyleApi.jsx';
import FileCss from './components/content/FileCss.jsx';
import InlineStyle from './components/content/InlineStyle.jsx';
import MultiPage from './components/content/MultiPage.jsx';
import TodoList from './components/content/TodoList.jsx';
import FormHandling from './components/content/FormHandling.jsx';
import './examples.css';
import { head } from 'levelojs';

export default function Examples() {
  head({
    title: 'Examples — Levelo JS',
    description: 'Explore real-world examples built with Levelo JS — counters, toggles, forms, routing, and more.',
  });
  return (
    <div class="examplesPage">
      <Header />
      <div class="examplesBody">
        <Sidebar />
        <main class="examplesMain">
          <HelloWorld />
          <Counter />
          <Toggle />
          <StateExample />
          <ComputedExample />
          <EffectExample />
          <StyleApi />
          <FileCss />
          <InlineStyle />
          <MultiPage />
          <TodoList />
          <FormHandling />
        
        <div style={{
          padding: '3rem 0',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontFamily: 'Instrument Serif, serif',
            fontSize: '1.8rem',
            color: 'var(--dark)',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
          }}>Ready to build?</h2>
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--muted)',
            lineHeight: '1.7',
            maxWidth: '480px',
            margin: '0 auto 1.5rem',
          }}>
            These examples are just the beginning. Read the full documentation
            to explore everything Levelo JS has to offer.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/documents" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.75rem 1.6rem',
              borderRadius: '8px',
              background: 'var(--dark)',
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.88rem',
              fontWeight: '600',
            }}>Read the Docs →</a>
            <a href="https://github.com/MotionMind2007/Levelo-Js" target="_blank" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.75rem 1.6rem',
              borderRadius: '8px',
              background: 'transparent',
              color: 'var(--text)',
              textDecoration: 'none',
              fontSize: '0.88rem',
              fontWeight: '600',
              border: '1px solid var(--border2)',
            }}>GitHub ↗</a>
          </div>
        </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}