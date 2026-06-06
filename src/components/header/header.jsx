import { state } from 'levelojs';
import logo from '../../assets/logo-colored.svg';
import './header.css';

const [menuOpen, setMenuOpen] = state(false);

export default function Header() {
  return (
    <div>
      <header class="header">
        <div class="headerLs">
          <a href="/" class="headerBrand">
            <img class="headerLogo" src={logo} alt="Levelo Js Logo" />
            <span class="headerTitle">Levelo <strong class="headerAccent">Js</strong></span>
          </a>
        </div>

        <nav class="headerNav">
          <a href="/#features" class="navLink">Features</a>
          <a href="/documents" class="navLink">Docs</a>
          <a href="/examples" class="navLink">Examples</a>
          <a href="https://github.com/MotionMind2007/Levelo-Js" class="navLink" target="_blank">GitHub</a>
          <a href="/docs#getting-started" class="navCta">Get Started</a>
        </nav>

        <div class="headerRs">
          <button
            class="menuBtn"
            onClick={() => setMenuOpen(!menuOpen())}
          >
            <i class={`levelo-icon ${menuOpen() ? 'icon-x' : 'icon-menu'}`}></i>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        class={`sidebarOverlay ${menuOpen() ? 'overlayShow' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <aside class={`sidebar ${menuOpen() ? 'sidebarOpen' : ''}`}>
        <div class="sidebarHeader">
          <a href="/" class="headerBrand">
            <img class="headerLogo" src={logo} alt="Levelo Js Logo" />
            <span class="headerTitle">Levelo <strong class="headerAccent">Js</strong></span>
          </a>
          <button class="menuBtn" onClick={() => setMenuOpen(false)}>
            <i class="levelo-icon icon-x"></i>
          </button>
        </div>

        <nav class="sidebarNav">
          <a href="/#features" class="sidebarLink" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="/documents" class="sidebarLink" onClick={() => setMenuOpen(false)}>
            Docs
          </a>
          <a href="/#examples" class="sidebarLink" onClick={() => setMenuOpen(false)}>
            Examples
          </a>
          <a href="https://github.com/MotionMind2007/Levelo-Js" class="sidebarLink" target="_blank">
            GitHub
          </a>
          <a href="https://www.facebook.com/share/g/17ejwCuPRk/" class="sidebarLink" target="_blank">
            Facebook Group
          </a>
        </nav>

        <a href="/docs#getting-started" class="sidebarCta">
          Get Started →
        </a>
      </aside>
    </div>
  )
}