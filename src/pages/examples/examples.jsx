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

head({
  title: 'Examples — Levelo JS',
  description: 'Explore real-world examples built with Levelo JS — counters, toggles, forms, routing, and more.',
});

export default function Examples() {
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
        </main>
      </div>
      <Footer />
    </div>
  )
}