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
  { name: 'logo-educa-white.png', width: 300, height: 120, text: 'EDUCA LOGO', bg: '#ffffff', color: '#ef4444' },
  { name: 'about-history.jpg', width: 800, height: 600, text: 'Historia EDUCA', bg: '#3b82f6', color: '#ffffff' },
  { name: 'program-health.jpg', width: 400, height: 300, text: 'Salud', bg: '#10b981', color: '#ffffff' },
  { name: 'program-peace.jpg', width: 400, height: 300, text: 'Paz', bg: '#8b5cf6', color: '#ffffff' },
  { name: 'program-production.jpg', width: 400, height: 300, text: 'Producción', bg: '#f59e0b', color: '#ffffff' },
  { name: 'program-youth.jpg', width: 400, height: 300, text: 'Juventud', bg: '#ef4444', color: '#ffffff' },
  { name: 'testimonial-1.jpg', width: 300, height: 300, text: 'Testimonio 1', bg: '#6b7280', color: '#ffffff' },
  { name: 'testimonial-2.jpg', width: 300, height: 300, text: 'Testimonio 2', bg: '#6b7280', color: '#ffffff' },
  { name: 'testimonial-3.jpg', width: 300, height: 300, text: 'Testimonio 3', bg: '#6b7280', color: '#ffffff' },
  { name: 'news-1.jpg', width: 400, height: 250, text: 'Noticia 1', bg: '#dc2626', color: '#ffffff' },
  { name: 'news-2.jpg', width: 400, height: 250, text: 'Noticia 2', bg: '#dc2626', color: '#ffffff' },
  { name: 'news-3.jpg', width: 400, height: 250, text: 'Noticia 3', bg: '#dc2626', color: '#ffffff' },
  { name: 'qr-donation.png', width: 200, height: 200, text: 'QR Donación', bg: '#000000', color: '#ffffff' }
];

// Crear directorio si no existe
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generar imágenes SVG
images.forEach(img => {
  const svg = generateSVGPlaceholder(img.width, img.height, img.text, img.bg, img.color);
  const filePath = path.join(imagesDir, img.name.replace('.jpg', '.svg').replace('.png', '.svg'));
  fs.writeFileSync(filePath, svg);
  console.log(`✓ Creada: ${img.name} -> ${path.basename(filePath)}`);
});

console.log('\n🎉 Todas las imágenes placeholder han sido creadas como SVG');
console.log('📁 Ubicación: public/images/');
console.log('💡 Estas son imágenes temporales para desarrollo');
console.log('🔄 Reemplázalas con imágenes reales cuando estén disponibles');
