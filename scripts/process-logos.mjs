// One-off asset prep: turns the GPT-generated logos (public/logo/1..7.png) into the
// files the site actually uses. Re-run with `node scripts/process-logos.mjs`.
import sharp from "sharp";

const VIOLET = [124, 92, 255]; // #7C5CFF
const OFFWHITE = [237, 237, 235]; // #EDEDEB

// Recolor a dark-ink transparent logo to white, preserving the violet accent. Trims padding.
async function recolorWhite(src, out) {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue; // transparent
    const r = data[i], g = data[i + 1], b = data[i + 2];
    // Blue-dominant pixels = the violet accent (handles both the vivid mark
    // shade and the muted lockup shade); everything else is dark ink → white.
    const isViolet = b > 120 && b - g > 25 && b - r > 15;
    const [nr, ng, nb] = isViolet ? VIOLET : OFFWHITE;
    data[i] = nr;
    data[i + 1] = ng;
    data[i + 2] = nb;
  }
  const info2 = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim()
    .png()
    .toFile(out);
  console.log(`${out}  ${info2.width}x${info2.height}`);
}

// Trim a charcoal-tile icon and resize to a square.
async function tileIcon(src, out, size) {
  await sharp(src)
    .trim()
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(out);
  console.log(`${out}  ${size}x${size}`);
}

await recolorWhite("public/logo/4.png", "public/logo/lockup-white.png");
await recolorWhite("public/logo/1.png", "public/logo/mark-white.png");
await tileIcon("public/logo/7.png", "src/app/icon.png", 256);
await tileIcon("public/logo/3.png", "src/app/apple-icon.png", 180);
