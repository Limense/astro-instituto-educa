import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para generar SVG placeholder
function generateSVGPlaceholder(width, height, text, bgColor = '#ef4444', textColor = '#ffffff') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="${textColor}" text-anchor="middle" dy="0.35em">${text}</text>
  </svg>`;
}

// Configuración de imágenes
const images = [
  { name: 'about-history.svg', width: 800, height: 600, text: 'Historia EDUCA', bg: '#3b82f6' },
  { name: 'program-health.svg', width: 400, height: 300, text: 'Salud', bg: '#10b981' },
  { name: 'program-peace.svg', width: 400, height: 300, text: 'Paz', bg: '#8b5cf6' },
  { name: 'program-production.svg', width: 400, height: 300, text: 'Producción', bg: '#f59e0b' },
  { name: 'program-youth.svg', width: 400, height: 300, text: 'Juventud', bg: '#ef4444' },
  { name: 'testimonial-1.svg', width: 300, height: 300, text: 'Testimonio 1', bg: '#6b7280' },
  { name: 'testimonial-2.svg', width: 300, height: 300, text: 'Testimonio 2', bg: '#6b7280' },
  { name: 'testimonial-3.svg', width: 300, height: 300, text: 'Testimonio 3', bg: '#6b7280' },
  { name: 'news-1.svg', width: 400, height: 250, text: 'Noticia 1', bg: '#dc2626' },
  { name: 'news-2.svg', width: 400, height: 250, text: 'Noticia 2', bg: '#dc2626' },
  { name: 'news-3.svg', width: 400, height: 250, text: 'Noticia 3', bg: '#dc2626' },
  { name: 'qr-donation.svg', width: 200, height: 200, text: 'QR Donación', bg: '#000000' }
];

const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generar imágenes SVG
images.forEach(img => {
  const svg = generateSVGPlaceholder(img.width, img.height, img.text, img.bg, '#ffffff');
  const filePath = path.join(imagesDir, img.name);
  fs.writeFileSync(filePath, svg);
  console.log(`✓ Creada: ${img.name}`);
});

console.log('\n🎉 Imágenes placeholder actualizadas');
