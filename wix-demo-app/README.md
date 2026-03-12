# Altavia Umbral, demo lista para embeber en Wix

Este proyecto contiene solo la demo interactiva, separada de la landing original, para publicarla fuera de Wix y luego incrustarla con un iFrame.

## Opcion recomendada

### 1) Publicarla en Vercel
1. Sube esta carpeta a GitHub.
2. En Vercel, crea un proyecto nuevo desde ese repositorio.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Publica y copia la URL `https://...vercel.app`

Tambien puedes usar Netlify o Cloudflare Pages.

## 2) Incrustarla en Wix
En Wix, añade un elemento de tipo HTML iFrame / Embed Site y pega la URL publicada.

## 3) Tamano recomendado en Wix
- Ancho: 100% del contenedor
- Alto inicial: 900 px
- En movil, prueba entre 1100 y 1300 px

## Desarrollo local
```bash
npm install
npm run dev
```

## Notas
- La demo usa React, Motion, Lucide y Tailwind.
- No esta pensada para pegarse directamente en un bloque HTML interno de Wix.
- La via correcta es publicarla como mini app externa y embeber la URL.
