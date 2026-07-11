// levelo.config.js
export default {
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'h',
    jsxFragment: 'fragment',
    jsxInject: `import { h } from 'levelojs'`
  }
};
