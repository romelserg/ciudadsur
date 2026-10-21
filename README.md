# Ciudad Sur — guía para publicar

Sitio de la revista **Ciudad Sur** (https://ciudadsur.pe), hecho con Jekyll y alojado gratis en GitHub Pages.

## Publicar un artículo nuevo

1. Sube la foto de portada a la carpeta `assets/img/articulos/` (formato `.jpg`, idealmente de menos de 1 MB).
2. Crea un archivo en `_posts/` con el nombre `AÑO-MES-DÍA-titulo-corto.md`, por ejemplo:
   `_posts/2026-11-05-la-feria-de-san-pedro.md`
   El "titulo-corto" será la dirección: `ciudadsur.pe/post/la-feria-de-san-pedro`
3. Empieza el archivo con estos datos (entre las líneas `---`):

```
---
title: "La feria de San Pedro"
author: "Nombre del autor"
date: 2026-11-05
category: "Social"
image: /assets/img/articulos/la-feria-de-san-pedro.jpg
---

Aquí va el texto del artículo. Cada párrafo se separa con una línea en blanco.
```

- `category` debe ser una de estas: `Actualidad`, `Social`, `Arte & Cultura`, `Proyectos Especiales`.
- Opcionales: `numero: 529` (número de edición), `author_image:` (foto del autor), `image_caption: "Foto: ..."` (crédito de la foto).

Los artículos más recientes aparecen automáticamente en el carrusel de la portada.

## Dar formato al texto

| Quiero... | Escribo... |
|---|---|
| **Negrita** | `**texto**` |
| *Cursiva* | `*texto*` |
| Subtítulo | `## Subtítulo` |
| Enlace | `[texto](https://...)` |
| Cita | `> texto de la cita` |
| Foto dentro del texto | `![descripción](/assets/img/articulos/foto.jpg)` |

## Insertar un video de YouTube

Copia el código del video (lo que va después de `watch?v=` en el enlace) y pega:

```
<div class="video"><iframe src="https://www.youtube.com/embed/CODIGO" allowfullscreen></iframe></div>
```

## Insertar un mapa

En Google Maps: **Compartir → Insertar un mapa → Copiar HTML**, toma la dirección que aparece en `src="..."` y pega:

```
<div class="mapa"><iframe src="DIRECCION_DEL_MAPA" loading="lazy"></iframe></div>
```

## Cambiar datos generales

- Texto "Sobre nosotros", correo y redes sociales: `_config.yml`
- Secciones del menú: `_data/secciones.yml`
- Colores: al inicio de `assets/css/estilo.css`
