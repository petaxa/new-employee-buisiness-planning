import fs from "fs";
import path from "path";

const pagesDir = process.cwd();
const files = fs
  .readdirSync(pagesDir)
  .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
  .sort();

for (const f of files) {
  const filePath = path.join(pagesDir, f);
  const content = fs.readFileSync(filePath, "utf-8");

  // Extract frontmatter (between first --- and second ---)
  const fmMatch = content.match(/^(---\n[\s\S]*?\n---\n)/);
  const frontmatter = fmMatch ? fmMatch[1] : "";

  // Extract body content (between <body> and </body>)
  const bodyMatch = content.match(/<body>\s*\n([\s\S]*?)\s*<\/body>/);
  const body = bodyMatch ? bodyMatch[1].trimEnd() : "";

  fs.writeFileSync(filePath, frontmatter + "\n" + body + "\n");
  console.log(`Processed: ${f}`);
}
