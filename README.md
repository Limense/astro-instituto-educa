# Instituto EDUCA - Sitio Web

Sitio web moderno y responsive para el Instituto EDUCA, desarrollado con Astro, Tailwind CSS y React.

## 🚀 Características

- **Framework**: Astro 4.0 - Sitio web estático de alto rendimiento
- **Estilos**: Tailwind CSS - Framework CSS utilitario
- **Componentes**: React - Para componentes interactivos
- **Tipografía**: Inter - Fuente moderna y legible
- **Animaciones**: Transiciones CSS personalizadas y Framer Motion
- **SEO**: Optimizado para motores de búsqueda
- **Responsive**: Diseño adaptable a todos los dispositivos

## 📋 Estructura del Proyecto

```
/
├── public/
│   ├── images/           # Imágenes y recursos estáticos
│   └── favicon.svg       # Favicon del sitio
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ActionLines.astro
│   │   ├── Testimonials.astro
│   │   ├── News.astro
│   │   └── Donation.astro
│   ├── layouts/          # Layouts de página
│   │   └── Layout.astro
│   ├── pages/            # Páginas del sitio
│   │   ├── index.astro           # Página de inicio
│   │   ├── quienes-somos.astro   # ¿Quiénes somos?
│   │   ├── que-hacemos.astro     # ¿Qué hacemos?
│   │   ├── noticias.astro        # Noticias
│   │   ├── contactanos.astro     # Contáctanos
│   │   └── donar.astro           # Donar
│   └── styles/           # Estilos globales
│       └── global.css
├── astro.config.mjs      # Configuración de Astro
├── tailwind.config.mjs   # Configuración de Tailwind
└── package.json
```

## 📄 Páginas del Sitio

### 1. **Inicio** (`/`)
- Hero section con call-to-action
- Líneas de acción educativa
- Testimonios de beneficiarios
- Últimas noticias
- Sección de donaciones

### 2. **¿Quiénes somos?** (`/quienes-somos`)
- Historia de la institución
- Misión y visión
- Valores organizacionales
- Equipo de trabajo

### 3. **¿Qué hacemos?** (`/que-hacemos`)
- Programas educativos detallados
- Metodología de trabajo
- Impacto y resultados
- Testimonios de usuarios

### 4. **Noticias** (`/noticias`)
- Últimas noticias y eventos
- Categorías de noticias
- Archivo de noticias
- Buscador de contenido

### 5. **Contáctanos** (`/contactanos`)
- Formulario de contacto
- Información de contacto
- Ubicación con mapa
- Horarios de atención

### 6. **Donar** (`/donar`)
- Opciones de donación
- Métodos de pago
- Programas de voluntariado
- Impacto de las donaciones

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: Rojo (#ef4444) - Representa pasión y compromiso
- **Secundario**: Azul (#3b82f6) - Confianza y profesionalismo
- **Acento**: Naranja (#f97316) - Energía y creatividad

### Tipografía
- **Principal**: Inter - Fuente moderna y legible
- **Tamaños**: Sistema responsive con escalado fluido

### Componentes Clave
- **Header**: Navegación sticky con menú mobile
- **Hero**: Sección principal con animaciones
- **Cards**: Tarjetas para programas y noticias
- **Forms**: Formularios accesibles y validados
- **Footer**: Información de contacto y enlaces

## 🖼️ Recursos Multimedia

### Imágenes Creadas ✅
Las siguientes imágenes placeholder están disponibles y funcionando:
```
/public/images/
├── logo-educa.svg              # Logo principal (nuevo diseño)
├── logo-educa-white.svg        # Logo para fondos oscuros
├── hero-education.jpg          # Imagen principal del hero
├── about-history.svg           # Historia de la institución
├── program-health.svg          # Programa de salud
├── program-peace.svg           # Programa de paz
├── program-production.svg      # Programa de producción
├── program-youth.svg           # Programa juvenil
├── testimonial-1.svg           # Testimonios
├── testimonial-2.svg
├── testimonial-3.svg
├── news-1.svg                  # Noticias
├── news-2.svg
├── news-3.svg
└── qr-donation.svg             # QR para donaciones
```

### Cómo Regenerar Imágenes Placeholder
```bash
# Ejecutar el script para generar todas las imágenes SVG
node generate-placeholders.js
```

### Iconos
- Utiliza Heroicons (incluidos en Tailwind)
- Iconos SVG personalizados para programas específicos
- Iconos de redes sociales

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

### Comandos Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Previsualizar build
npm run astro        # CLI de Astro
```

## 🔧 Configuración

### Astro Config
- Integración con Tailwind CSS
- Integración con React
- Generación de sitemap
- Optimización de imágenes

### Tailwind Config
- Paleta de colores personalizada
- Fuentes configuradas
- Animaciones personalizadas
- Responsive breakpoints

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Características Responsive
- Navegación mobile con hamburger menu
- Grids adaptables
- Imágenes responsive
- Tipografía fluida

## ♿ Accesibilidad

- Semántica HTML correcta
- Contraste de colores AAA
- Navegación por teclado
- Etiquetas ARIA
- Texto alternativo en imágenes

## 🔍 SEO

- Meta tags optimizados
- Structured data (JSON-LD)
- Sitemap XML
- URLs amigables
- Rendimiento optimizado

## 📊 Rendimiento

- Lighthouse Score: 90+
- Tiempo de carga: < 3s
- Tamaño de bundle optimizado
- Lazy loading de imágenes
- CSS y JS minificados

## 🌐 Despliegue

### Opciones de Hosting
- **Netlify**: Recomendado para sitios estáticos
- **Vercel**: Excelente para proyectos Astro
- **GitHub Pages**: Opción gratuita
- **Servidor propio**: Con Node.js

### Variables de Entorno
```env
SITE_URL=https://educa.org.pe
CONTACT_EMAIL=informes@educa.org.pe
```

## 📝 Contenido

### Textos Principales
- Todos los textos están en español
- Contenido basado en el sitio web actual
- Enfoque en beneficiarios y impacto social
- Llamadas a la acción claras

### Actualizaciones de Contenido
- Noticias: Actualización mensual
- Programas: Revisión semestral
- Testimonios: Actualización trimestral
- Información de contacto: Según necesidad

## 🤝 Contribuir

1. Fork del proyecto
2. Crear rama de feature
3. Commits con mensajes descriptivos
4. Pruebas antes de enviar PR
5. Documentar cambios significativos

## 📞 Contacto

- **Email**: informes@educa.org.pe
- **Teléfono**: 920 379 149
- **Dirección**: Av. Aguarico 1015, Breña, Lima

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
