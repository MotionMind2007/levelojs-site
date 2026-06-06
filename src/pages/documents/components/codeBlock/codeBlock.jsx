import './codeBlock.css';

const tokenize = (code, lang) => {
  const keywords = ['import', 'export', 'default', 'function', 'return', 'const', 'let', 'var', 'from', 'if', 'else', 'for', 'while', 'class', 'new', 'typeof', 'null', 'undefined', 'true', 'false'];
  const functions = ['state', 'computed', 'effect', 'style', 'head', 'Pages', 'Page'];
  const cssProperties = ['display', 'flex', 'flexDirection', 'gap', 'padding', 'margin', 'background', 'color', 'border', 'borderRadius', 'fontSize', 'fontWeight', 'fontFamily', 'width', 'height', 'position', 'top', 'left', 'right', 'bottom', 'overflow', 'cursor', 'transition', 'transform', 'opacity', 'zIndex', 'boxShadow', 'lineHeight', 'letterSpacing', 'textTransform', 'textDecoration', 'alignItems', 'justifyContent', 'flexWrap', 'flexShrink', 'minHeight', 'maxWidth', 'minWidth', 'borderBottom', 'borderTop', 'borderLeft', 'borderRight', 'backdropFilter', 'whiteSpace', 'userSelect', 'outline', 'resize', 'appearance', 'content', 'gridTemplateColumns', 'gridColumn', 'gridRow', 'alignSelf', 'justifySelf', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'];

  const isCss = lang === 'css';
  const lines = code.split('\n');

  return lines.map((line, lineIndex) => {
    const tokens = [];
    let i = 0;

    while (i < line.length) {

      // Comment //
      if (line[i] === '/' && line[i + 1] === '/') {
        tokens.push({ type: 'cm', value: line.slice(i) });
        i = line.length;
        continue;
      }

      // Comment /* */
      if (line[i] === '/' && line[i + 1] === '*') {
        tokens.push({ type: 'cm', value: line.slice(i) });
        i = line.length;
        continue;
      }
      
      if (line[i] === '<' && line[i + 1] === '!') {
        tokens.push({ type: 'cm', value: line.slice(i) });
        i = line.length;
        continue;
      }

      // CSS selector
      if (isCss && /[.#a-zA-Z*@]/.test(line[i]) && line.includes('{')) {
        let j = i;
        while (j < line.length && line[j] !== '{') j++;
        tokens.push({ type: 'tag', value: line.slice(i, j) });
        tokens.push({ type: 'pu', value: line.slice(j) });
        i = line.length;
        continue;
      }

      // CSS property: value
      if (isCss && /[a-zA-Z-]/.test(line[i]) && line.includes(':')) {
        const colonIdx = line.indexOf(':');
        if (colonIdx > i) {
          tokens.push({ type: 'attr', value: line.slice(i, colonIdx) });
          tokens.push({ type: 'pu', value: ':' });
          const rest = line.slice(colonIdx + 1).trim();
          tokens.push({ type: 'str', value: ' ' + rest });
          i = line.length;
          continue;
        }
      }

      // String single quote
      if (line[i] === "'") {
        let j = i + 1;
        while (j < line.length && line[j] !== "'") j++;
        tokens.push({ type: 'str', value: line.slice(i, j + 1) });
        i = j + 1;
        continue;
      }

      // String double quote
      if (line[i] === '"') {
        let j = i + 1;
        while (j < line.length && line[j] !== '"') j++;
        tokens.push({ type: 'str', value: line.slice(i, j + 1) });
        i = j + 1;
        continue;
      }

      // String backtick
      if (line[i] === '`') {
        let j = i + 1;
        while (j < line.length && line[j] !== '`') j++;
        tokens.push({ type: 'str', value: line.slice(i, j + 1) });
        i = j + 1;
        continue;
      }

      // Number
      if (/[0-9]/.test(line[i])) {
        let j = i;
        while (j < line.length && /[0-9.]/.test(line[j])) j++;
        tokens.push({ type: 'num', value: line.slice(i, j) });
        i = j;
        continue;
      }

      // Word
      if (/[a-zA-Z_$]/.test(line[i])) {
        let j = i;
        while (j < line.length && /[a-zA-Z0-9_$]/.test(line[j])) j++;
        const word = line.slice(i, j);

        if (keywords.includes(word)) {
          tokens.push({ type: 'kw', value: word });
        } else if (functions.includes(word)) {
          tokens.push({ type: 'fn', value: word });
        } else if (cssProperties.includes(word)) {
          tokens.push({ type: 'attr', value: word });
        } else {
          tokens.push({ type: 'pu', value: word });
        }
        i = j;
        continue;
      }

      // JSX tag
      if (line[i] === '<') {
        let j = i;
        while (j < line.length && line[j] !== '>' && line[j] !== ' ') j++;
        if (line[j] === '>') j++;
        tokens.push({ type: 'tag', value: line.slice(i, j) });
        i = j;
        continue;
      }

      tokens.push({ type: 'pu', value: line[i] });
      i++;
    }

    return { tokens, lineNumber: lineIndex + 1 };
  });
};

export default function CodeBlock({ code, filename, lang }) {
  const lines = tokenize(code, lang);

  return (
    <div class="codeBlock">
      {filename ? (
        <div class="codeBlockHeader">
          <div class="codeBlockDots">
            <span class="cbDotR"></span>
            <span class="cbDotY"></span>
            <span class="cbDotG"></span>
          </div>
          <span class="codeBlockFilename">{filename}</span>
        </div>
      ) : null}
      <div class="codeBlockBody">
        {lines.map((line, i) => (
          <div class="cbLine" key={i}>
            <span class="cbLn">{line.lineNumber}</span>
            <span class="cbCode">
              {line.tokens.map((token, j) => (
                <span class={`cbToken cb-${token.type}`} key={j}>
                  {token.value}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}