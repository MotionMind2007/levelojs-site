import { style } from 'levelojs';

const homeStyle = style({
  ".header": {
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    minHeight: "64px",
    borderBottom: "1px solid var(--border)",
    position: 'fixed',
    top: '0',
    left: '0',
    padding: '0 1.2rem',
  },
  ".logo": {
    width: "35px",
    height: "35px",
    borderRadius: '50%',
  },
  ".ls": {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    width: '50%',
  },
  ".rs" : {
    width: "50%",
    display: "flex",
    justifyContent: "flex-end"
  }
});

export default homeStyle;