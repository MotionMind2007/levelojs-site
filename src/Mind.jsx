import { Pages, Page } from 'levelojs';
import Home from './pages/home/home.jsx';
import Documents from './pages/documents/documents.jsx';

function Mind() {
  return (
    <Pages>
      <Page path="/" component={Home} />
      <Page path="/documents" component={Documents} />
    </Pages>
  )
}
export default Mind;