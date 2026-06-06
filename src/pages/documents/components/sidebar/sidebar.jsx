import { state } from 'levelojs';
import './sidebar.css';

const sections = [
  {
    title: 'Introduction',
    items: [
      { label: 'What is Levelo JS?', href: '#what-is' },
      { label: 'Why Levelo JS?', href: '#why' },
      { label: 'Installation', href: '#installation' },
    ]
  },
  {
    title: 'Getting Started',
    items: [
      { label: 'Project Structure', href: '#structure' },
      { label: 'Mind.jsx Entry', href: '#mind' },
    ]
  },
  {
    title: 'Core Concepts',
    items: [
      { label: 'Pages & Routing', href: '#routing' },
      { label: 'style() API', href: '#style' },
      { label: 'head() API', href: '#head' },
      { label: 'Components', href: '#components' },
    ]
  },
  {
    title: 'Reactivity',
    items: [
      { label: 'state()', href: '#state' },
      { label: 'computed()', href: '#computed' },
      { label: 'effect()', href: '#effect' },
    ]
  },
  {
    title: 'Advanced',
    items: [
      { label: 'Assets & Images', href: '#assets' },
      { label: 'CSS & Styling', href: '#css' },
      { label: 'Deployment', href: '#deployment' },
    ]
  },
];

const [dropdownOpen, setDropdownOpen] = state(false);

export default function Sidebar() {
  return (
    <div>

      {/* Desktop Sidebar */}
      <aside class="docSidebar">
        <div class="docSidebarInner">
          {sections.map((section, i) => (
            <div class="docSidebarSection" key={i}>
              <p class="docSidebarTitle">{section.title}</p>
              <ul class="docSidebarList">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a href={item.href} class="docSidebarLink">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Mobile Dropdown */}
      <div class="mobileNav">
        <button
          class="mobileNavBtn"
          onClick={() => setDropdownOpen(!dropdownOpen())}
        >
          <span>On this page</span>
          <i class={`levelo-icon ${dropdownOpen() ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
        </button>

        {dropdownOpen() ? (
          <div class="mobileNavDropdown">
            {sections.map((section, i) => (
              <div class="mobileNavSection" key={i}>
                <p class="mobileNavTitle">{section.title}</p>
                {section.items.map((item, j) => (
                  <a
                      href={item.href}
                      class="mobileNavLink"
                      key={j}
                      onClick={() => setDropdownOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        ) : null}
      </div>

    </div>
  )
}