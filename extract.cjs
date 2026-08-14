const fs = require('fs');
const comp = fs.readFileSync('comp.js', 'utf8');

function extractArrayOrObject(source, varName) {
  const marker = varName + '=';
  const idx = source.indexOf(marker);
  if (idx === -1) {
    const marker2 = varName + ' =';
    const idx2 = source.indexOf(marker2);
    if (idx2 === -1) return null;
    return getBracketed(source, idx2 + marker2.length);
  }
  return getBracketed(source, idx + marker.length);
}

function getBracketed(source, startIdx) {
  while (startIdx < source.length && (source[startIdx] === ' ' || source[startIdx] === '\n')) {
    startIdx++;
  }
  const openChar = source[startIdx];
  const closeChar = openChar === '[' ? ']' : openChar === '{' ? '}' : null;
  if (!closeChar) return null;

  let depth = 0;
  let inString = false;
  let quoteChar = '';
  let escape = false;

  for (let i = startIdx; i < source.length; i++) {
    const char = source[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (char === '\\') {
      escape = true;
      continue;
    }
    if (inString) {
      if (char === quoteChar) {
        inString = false;
      }
      continue;
    }
    if (char === '"' || char === "'" || char === '`') {
      inString = true;
      quoteChar = char;
      continue;
    }
    if (char === openChar) {
      depth++;
    } else if (char === closeChar) {
      depth--;
      if (depth === 0) {
        return source.slice(startIdx, i + 1);
      }
    }
  }
  return null;
}

const vars = ['ne', 're', 'se', 'ie', 'X', 'pe', 'ce', 'ae', '_'];
const results = {};
for (const v of vars) {
  const val = extractArrayOrObject(comp, v);
  if (val) {
    fs.writeFileSync(`extracted_${v}.json`, val);
    console.log(`Extracted ${v}, length: ${val.length}`);
  } else {
    console.log(`Failed to extract ${v}`);
  }
}
