export function highlightCode(code: string) {
  return code.split("\n").map((line, lineIndex) => (
    <span className="block min-h-6" key={`${line}-${lineIndex}`}>
      {highlightLine(line)}
    </span>
  ));
}

function highlightLine(line: string) {
  const tokenPattern =
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\/\/.*|<\/?[A-Z][\w.]*|<\/?[a-z][\w-]*|\b(?:import|from|export|function|return|const|let|type|interface|class|extends|default|async|await)\b|\b(?:true|false|null|undefined)\b|\b\d+(?:\.\d+)?\b|[@]\w+(?:\/[\w.-]+)*|[{}()[\];=<>/])/g;
  const parts = line.split(tokenPattern);

  return parts.map((part, index) => {
    if (!part) return null;
    const className = getTokenClassName(part);
    return (
      <span className={className} key={`${part}-${index}`}>
        {part}
      </span>
    );
  });
}

function getTokenClassName(token: string) {
  if (/^\/\//.test(token)) return "text-[#8c837a]";
  if (/^["'`]/.test(token)) return "text-[#f3bd7c]";
  if (/^<\/?[A-Za-z]/.test(token)) return "text-[#9fc6b8]";
  if (/^(import|from|export|function|return|const|let|type|interface|class|extends|default|async|await)$/.test(token)) {
    return "text-[#f0d082]";
  }
  if (/^(true|false|null|undefined)$/.test(token)) return "text-[#df9187]";
  if (/^\d/.test(token)) return "text-[#b8c98f]";
  if (/^@/.test(token)) return "text-[#a8bfcf]";
  if (/^[{}()[\];=<>/]$/.test(token)) return "text-[#bdb4aa]";
  return undefined;
}
