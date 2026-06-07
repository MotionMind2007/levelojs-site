import { state } from 'levelojs';
import './sidebar.css';

const sections = [
  {
    title: 'Basic',
    items: [
      { label: 'Hello World', href: '#hello-world' },
      { label: 'Counter', href: '#counter' },
      { label: 'Toggle Button', href: '#toggle' },
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
    title: 'Styling',
    items: [
      { label: 'style() API', href: '#style-api' },
      { label: 'File CSS', href: '#file-css' },
      { label: 'Inline Style', href: '#inline-style' },
    ]
  },
  {
    title: 'Routing',
    items: [
      { label: 'Multi-Page App', href: '#multi-page' },
    ]
  },
  {
    title: 'Real World',
    items: [
      { label: 'Todo List', href: '#todo' },
      { label: 'Form Handling', href: '#form' },
    ]
  },
];

const [dropdownOpen, setDropdownOpen] = state(false);

export default function Sidebar() {
  return (
    <div>

      {/* Desktop Sidebar */}
      <aside class="exSidebar">
        <div class="exSidebarInner">
          {sections.map((section, i) => (
            <div class="exSidebarSection" key={i}>
              <p class="exSidebarTitle">{section.title}</p>
              <ul class="exSidebarList">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a href={item.href} class="exSidebarLink">
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
      <div class="exMobileNav">
        <button
          class="exMobileNavBtn"
          onClick={() => setDropdownOpen(!dropdownOpen())}
        >
          <span>On this page</span>
          <i class={`levelo-icon ${dropdownOpen() ? 'icon-chevron-up' : 'icon-chevron-down'}`}></i>
        </button>

        {dropdownOpen() ? (
          <div class="exMobileNavDropdown">
            {sections.map((section, i) => (
              <div class="exMobileNavSection" key={i}>
                <p class="exMobileNavTitle">{section.title}</p>
                {section.items.map((item, j) => (
                  <a
                    href={item.href}
                    class="exMobileNavLink"
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