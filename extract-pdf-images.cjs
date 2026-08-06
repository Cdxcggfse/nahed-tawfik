// extract-pdf-images.js
// Extracts embedded JPEG and PNG images directly from the PDF binary stream
const fs = require('fs');
const path = require('path');

const pdfPath = path.join(__dirname, 'Content Creator.pdf');
const buf = fs.readFileSync(pdfPath);

const outputDirs = {
  designs: path.join(__dirname, 'public', 'assets', 'designs'),
  clients: path.join(__dirname, 'public', 'assets', 'clients'),
};

// Create output directories
Object.values(outputDirs).forEach(d => fs.mkdirSync(d, { recursive: true }));

// --- Extract JPEGs (SOI: FFD8FF ... EOI: FFD9) ---
let jpegCount = 0;
let pos = 0;
const jpegImages = [];

while (pos < buf.length - 1) {
  // Find JPEG SOI marker
  if (buf[pos] === 0xFF && buf[pos + 1] === 0xD8) {
    // Find matching EOI marker
    let end = pos + 2;
    let found = false;
    while (end < buf.length - 1) {
      if (buf[end] === 0xFF && buf[end + 1] === 0xD9) {
        end += 2;
        found = true;
        break;
      }
      end++;
    }
    if (found && (end - pos) > 5000) { // Skip tiny/corrupt images < 5KB
      jpegImages.push({ start: pos, end, size: end - pos });
      pos = end;
      continue;
    }
  }
  pos++;
}

console.log(`Found ${jpegImages.length} JPEG images`);

// Sort by size descending - bigger images are the real design assets
jpegImages.sort((a, b) => b.size - a.size);

// The PDF PDF has ~37 image pages. Roughly:
// - First 12 big images → design showcase  
// - Next images → client logos (smaller)
jpegImages.forEach((img, idx) => {
  const imgBuf = buf.slice(img.start, img.end);
  let folder, name;

  if (idx < 14) {
    folder = outputDirs.designs;
    name = `design_${String(idx + 1).padStart(2, '0')}.jpg`;
  } else {
    folder = outputDirs.clients;
    name = `client_${String(idx - 13).padStart(2, '0')}.jpg`;
  }

  const outPath = path.join(folder, name);
  fs.writeFileSync(outPath, imgBuf);
  console.log(`  Saved ${name} (${Math.round(img.size / 1024)} KB) → ${folder}`);
  jpegCount++;
});

// --- Extract PNGs (header: 89 50 4E 47 0D 0A 1A 0A) ---
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
const IEND = Buffer.from([0x49, 0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82]); // IEND chunk

let pngCount = 0;
pos = 0;

while (pos < buf.length - 8) {
  // Find PNG signature
  let match = true;
  for (let i = 0; i < PNG_SIG.length; i++) {
    if (buf[pos + i] !== PNG_SIG[i]) { match = false; break; }
  }

  if (match) {
    // Find PNG IEND chunk marker
    let end = pos + 8;
    let found = false;
    while (end < buf.length - 8) {
      let iendMatch = true;
      for (let i = 0; i < IEND.length; i++) {
        if (buf[end + i] !== IEND[i]) { iendMatch = false; break; }
      }
      if (iendMatch) {
        end += IEND.length;
        found = true;
        break;
      }
      end++;
    }

    if (found && (end - pos) > 3000) {
      const imgBuf = buf.slice(pos, end);
      const name = `design_png_${String(pngCount + 1).padStart(2, '0')}.png`;
      const outPath = path.join(outputDirs.designs, name);
      fs.writeFileSync(outPath, imgBuf);
      console.log(`  Saved PNG ${name} (${Math.round(imgBuf.length / 1024)} KB)`);
      pngCount++;
      pos = end;
      continue;
    }
  }
  pos++;
}

console.log(`\nDone! Extracted ${jpegCount} JPEGs + ${pngCount} PNGs`);
console.log('Check public/assets/designs/ and public/assets/clients/');
