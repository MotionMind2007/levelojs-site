import { Pages, Page } from 'levelojs';
import Home from './pages/home/home.jsx';
import Documents from './pages/documents/documents.jsx';
import Examples from './pages/examples/examples.jsx';
import logo from './assets/logo.svg';
import { head } from 'levelojs';
head({
    link: [
      { rel: 'icon', type: 'image/png', href: logo }
    ]
  })

function Mind() {
  return (
    <Pages>
      <Page path="/" component={Home} />
      <Page path="/documents" component={Documents} />
      <Page path="/examples" component={Examples} />
    </Pages>
  )
}
export default Mind;