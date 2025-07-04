# Comandos Útiles para Instituto EDUCA

## Desarrollo Local

### Iniciar servidor de desarrollo
```bash
npm run dev
```
Abre: http://localhost:4322

### Construir para producción
```bash
npm run build
```

### Previsualizar build de producción
```bash
npm run preview
```

## Imágenes

### Generar imágenes placeholder
```bash
node generate-placeholders.js
```

## Mantenimiento

### Instalar dependencias
```bash
npm install
```

### Limpiar caché
```bash
rm -rf node_modules package-lock.json
npm install
```

## Páginas Disponibles

- `/` - Página de inicio
- `/quienes-somos` - ¿Quiénes somos?
- `/que-hacemos` - ¿Qué hacemos?
- `/noticias` - Noticias
- `/contactanos` - Contáctanos
- `/donar` - Donar

## Estructura de Archivos

```
/
├── public/
│   ├── images/           # Imágenes SVG placeholder
│   ├── js/               # JavaScript para interactividad
│   └── favicon.svg       # Favicon
├── src/
│   ├── components/       # Componentes Astro
│   ├── layouts/          # Layouts de página
│   ├── pages/            # Páginas del sitio
│   └── styles/           # Estilos CSS
├── .vscode/              # Configuración VS Code
├── generate-placeholders.js # Script para generar imágenes
└── README.md             # Documentación
```

## Características Implementadas

✅ Diseño responsive  
✅ Navegación sticky  
✅ Animaciones CSS  
✅ Componentes interactivos  
✅ Imágenes placeholder  
✅ SEO optimizado  
✅ Formularios funcionales  
✅ Configuración VS Code  
✅ Tailwind CSS  
✅ Scripts JavaScript  

## Próximos Pasos

1. Reemplazar imágenes placeholder por contenido real
2. Probar en diferentes dispositivos
3. Optimizar rendimiento
4. Desplegar en producción
5. Configurar dominio personalizado

## Soporte

Para problemas técnicos, revisa:
- Logs del servidor de desarrollo
- Consola del navegador
- Archivos de configuración
- Documentación de Astro: https://docs.astro.build/
