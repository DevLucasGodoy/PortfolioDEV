import sharp from "sharp";

// Compose a sharp 16/9 project card: brand-green canvas with the logo
// presented as a centered light rounded panel.
const W = 1440;
const H = 810;
const GREEN = "#00bf63";
const PANEL = 700; // logo panel size
const RADIUS = 48;

const src = process.argv[2] || "public/images/projects/first-care.original.png";
const out = process.argv[3] || "public/images/projects/first-care.png";

// Resize logo to panel size (its own light bg becomes the panel surface).
const logo = await sharp(src).resize(PANEL, PANEL, { fit: "cover" }).png().toBuffer();

// Rounded-corner mask applied to the logo panel.
const mask = Buffer.from(
  `<svg width="${PANEL}" height="${PANEL}"><rect x="0" y="0" width="${PANEL}" height="${PANEL}" rx="${RADIUS}" ry="${RADIUS}"/></svg>`,
);
const roundedPanel = await sharp(logo)
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toBuffer();

await sharp({
  create: { width: W, height: H, channels: 4, background: GREEN },
})
  .composite([
    {
      input: roundedPanel,
      left: Math.round((W - PANEL) / 2),
      top: Math.round((H - PANEL) / 2),
    },
  ])
  .png({ quality: 90 })
  .toFile(out);

console.log(`wrote ${out} (${W}x${H})`);
