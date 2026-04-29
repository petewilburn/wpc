const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Regex for standard Tailwind colors including opacity modifiers
const tailwindColorsRegex = /\b(bg|text|border|ring|fill|stroke|hover:bg|hover:text)-(white|black|gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-\d{2,3})?(\/[0-9.]+)?\b/g;

// List of allowed variables from globals.css that happen to match the regex (if any)
const whitelist = [];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let foundIssues = false;

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      let match;
      while ((match = tailwindColorsRegex.exec(line)) !== null) {
        if (!whitelist.includes(match[0])) {
          console.log(`\x1b[31mFound hardcoded color:\x1b[0m ${match[0]} \x1b[36min\x1b[0m ${filePath}:${index + 1}`);
          foundIssues = true;
        }
      }
    });
  }
});

if (!foundIssues) {
  console.log('\x1b[32mSuccess: No hardcoded Tailwind colors found!\x1b[0m');
  process.exit(0);
} else {
  console.log('\n\x1b[33mPlease replace the above hardcoded colors with semantic variables from globals.css\x1b[0m');
  process.exit(1);
}
