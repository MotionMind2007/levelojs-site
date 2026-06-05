import logo from '../../assets/logo-colored.svg';
import headerStyle from './headerStyle.jsx';

export default function Header() {
  return (
    <div>
      <div class={headerStyle.header}>
        <div class={headerStyle.ls}>
          <img class={headerStyle.logo} src={logo} alt="Levelo Js Logo" />
          <h3 class={headerStyle.title}>Levelo <strong style={{marginLeft: '6px', color: 'var(--accent)'}}>Js</strong></h3>
        </div>
        <div class={headerStyle.rs}>
          <div class="levelo-icon icon-menu"></div>
        </div>
      </div>
    </div>
  )
}