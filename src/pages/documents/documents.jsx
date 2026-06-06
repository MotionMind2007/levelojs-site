import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import DocContent from './components/docContent/docContent.jsx';
import './documents.css';

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