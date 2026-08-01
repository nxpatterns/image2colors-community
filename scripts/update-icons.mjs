#!/usr/bin/env node
/**
 * Recolors the SVG icons in `assets/icons-svg` and regenerates the
 * 96x96 PNG icons in `assets/icons`.
 *
 * Usage:
 *   node scripts/update-icons.mjs [hexColor]
 *   npm run icons -- "#02A4DB"
 *
 * Default color: #02A4DB
 *
 * The script only touches the `fill`/`color` attributes of the root
 * <svg> element, so multi-colored icons -> keep their
 * inner colors.
 *
 * For the SVG -> PNG conversion one of the following tools must be
 * installed (checked in this order):
 *   - rsvg-convert  (brew install librsvg)
 *   - magick        (brew install imagemagick)
 *   - inkscape      (brew install --cask inkscape)
 */

import { execFileSync, execSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svgDir = join(root, "assets", "icons-svg");
const pngDir = join(root, "assets", "icons");
const PNG_SIZE = 96;
const DEFAULT_COLOR = "#02A4DB";

const color = process.argv[2] ?? DEFAULT_COLOR;
if (!/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color)) {
  console.error(`Invalid color "${color}". Expected format: #RGB or #RRGGBB`);
  process.exit(1);
}

function findConverter() {
  for (const tool of ["rsvg-convert", "magick", "inkscape"]) {
    try {
      execSync(`command -v ${tool}`, { stdio: "ignore" });
      return tool;
    } catch {
      /* not found, try next */
    }
  }
  return null;
}

function convert(tool, svgPath, pngPath) {
  if (tool === "rsvg-convert") {
    execFileSync("rsvg-convert", [
      "-w",
      String(PNG_SIZE),
      "-h",
      String(PNG_SIZE),
      "-o",
      pngPath,
      svgPath,
    ]);
  } else if (tool === "magick") {
    execFileSync("magick", [
      "-background",
      "none",
      "-density",
      "384",
      svgPath,
      "-resize",
      `${PNG_SIZE}x${PNG_SIZE}`,
      pngPath,
    ]);
  } else {
    execFileSync("inkscape", [
      svgPath,
      "-w",
      String(PNG_SIZE),
      "-h",
      String(PNG_SIZE),
      "-o",
      pngPath,
    ]);
  }
}

const converter = findConverter();
if (!converter) {
  console.error("No SVG converter found. Install one of:");
  console.error("  brew install librsvg        (provides rsvg-convert)");
  console.error("  brew install imagemagick    (provides magick)");
  console.error("  brew install --cask inkscape");
  process.exit(1);
}

const svgs = readdirSync(svgDir).filter((f) => f.endsWith(".svg"));
let recolored = 0;

for (const file of svgs) {
  const svgPath = join(svgDir, file);
  const pngPath = join(pngDir, basename(file, ".svg") + ".png");

  // Recolor only the root <svg> element's fill/color attributes.
  const source = readFileSync(svgPath, "utf8");
  const updated = source.replace(/<svg\b[^>]*>/, (tag) => {
    const hasColor = /(?:fill|color)="#[0-9a-fA-F]{6}"/.test(tag);
    if (!hasColor) return tag;
    recolored += 1;
    return tag
      .replace(/fill="#[0-9a-fA-F]{6}"/, `fill="${color}"`)
      .replace(/color="#[0-9a-fA-F]{6}"/, `color="${color}"`);
  });
  if (updated !== source) writeFileSync(svgPath, updated);

  convert(converter, svgPath, pngPath);
  console.log(`${file} -> ${basename(pngPath)}`);
}

console.log(
  `\nDone. ${svgs.length} icons rendered (${converter}), ${recolored} recolored to ${color}.`,
);
