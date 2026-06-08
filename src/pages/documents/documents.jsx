import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import DocContent from './components/docContent/docContent.jsx';
import './documents.css';
import { head } from 'levelojs';

head({
  title: 'Documentation — Levelo JS',
  description: 'Complete documentation for Levelo JS — installation, routing, state, style() API, reactivity, and more.',
});

export default function Documents() {
  return (
    <div class="docsPage">
      <Header />
      <div class="docsBody">
        <Sidebar />
        <main class="docsMain">
          <DocContent />
        </main>
      </div>
      <Footer />
    </div>
  )
}