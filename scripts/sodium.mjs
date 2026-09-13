/**
 * Tratamento "luz de sódio": converte fotos em monocromia âmbar, como uma rua
 * iluminada por poste de vapor de sódio, onde toda cor vira tom de âmbar.
 *
 * Uso: coloque fotos em assets-src/photos e rode `npm run photos`.
 * Saída em src/assets/photos, pronta para next/image.
 */
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "assets-src/photos";
const OUT = "src/assets/photos";
const MAX_SIDE = 2400;

// Luminance -> color stops. Shadows stay near the page ground so photos melt into it.
const STOPS = [
  [0.0, [9, 8, 6]],
  [0.28, [40, 27, 13]],
  [0.55, [128, 84, 36]],
  [0.8, [220, 160, 72]],
  [1.0, [252, 234, 194]],
];

function buildLut() {
  const lut = new Uint8Array(256 * 3);
  for (let i = 0; i < 256; i++) {
    const t = Math.pow(i / 255, 1.12);
    const upper = STOPS.findIndex(([stop]) => stop >= t);
    const [s1, c1] = STOPS[Math.max(upper - 1, 0)];
    const [s2, c2] = STOPS[upper];
    const k = s2 === s1 ? 0 : (t - s1) / (s2 - s1);
    for (let c = 0; c < 3; c++) lut[i * 3 + c] = Math.round(c1[c] + (c2[c] - c1[c]) * k);
  }
  return lut;
}

const lut = buildLut();
await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

for (const file of files) {
  const { data, info } = await sharp(path.join(SRC, file))
    .rotate()
    .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: "inside", withoutEnlargement: true })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let p = 0; p < data.length; p += 3) {
    const y = Math.round(0.2126 * data[p] + 0.7152 * data[p + 1] + 0.0722 * data[p + 2]);
    data[p] = lut[y * 3];
    data[p + 1] = lut[y * 3 + 1];
    data[p + 2] = lut[y * 3 + 2];
  }

  const target = path.join(OUT, file.replace(/\.(png|webp|jpeg)$/i, ".jpg"));
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 3 } })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(target);
  console.log(`${file} -> ${target} (${info.width}x${info.height})`);
}
