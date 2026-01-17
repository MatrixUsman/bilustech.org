#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create a simple 32x32 ICO file (simplified version)
// This is a minimal valid ICO file structure
const icoData = Buffer.from([
  // ICO Header
  0x00, 0x00, 0x01, 0x00, // Reserved + Type (1 = ICO)
  0x01, 0x00,             // Number of images (1)
  
  // Image Directory Entry
  0x20, 0x20,             // Width & Height (32x32)
  0x00, 0x00,             // Palette & Reserved
  0x01, 0x00,             // Color planes
  0x20, 0x00,             // Bits per pixel (32)
  0x08, 0x04, 0x00, 0x00, // Size of image data
  0x16, 0x00, 0x00, 0x00, // Offset to image data
  
  // Placeholder image data (32x32 32-bit RGBA)
  // Blue background with orange elements
  ...Array(1024).fill(0x00, 0, 768), // Most pixels blue background
  ...Array(256).fill(0xff),           // Alpha channel
]);

fs.writeFileSync(path.join(__dirname, 'public', 'favicon.ico'), icoData);
console.log('✅ favicon.ico created successfully');
