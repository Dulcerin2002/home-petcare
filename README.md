# PetCare — Angular + pnpm + Tailwind CSS + GSAP

Landing page responsive de veterinaria con cinco secciones: Inicio, Servicios, Nosotros, App Android y Contacto.

## Requisitos
- Node.js 20.19+ (o 22.12+)
- pnpm

## Instalar y ejecutar
```bash
pnpm install
pnpm start
```
Abre `http://localhost:4200`.

## Compilar
```bash
pnpm build
```

## Personalizar la paleta
Edita las variables CSS al inicio de `src/styles.css`:
- `--pc-primary`: color principal
- `--pc-primary-dark`: variante oscura
- `--pc-primary-soft`: fondos suaves
- `--pc-accent`: color de acento
- `--pc-ink`: texto principal
- `--pc-muted`: texto secundario
- `--pc-bg`: fondo general
- `--pc-surface`: superficies
- `--pc-border`: bordes
- `--pc-radius`: radio estándar
- `--pc-shadow`: sombra

## Colocar el APK
Crea la carpeta `public/apk/` y copia tu archivo real con este nombre:
`public/apk/petcare.apk`

El botón de descarga ya apunta a `/apk/petcare.apk`. El ZIP no incluye un APK; debes colocar el compilado real de tu aplicación Android.

## Antes de publicar
1. Reemplaza dirección, teléfono y redes sociales.
2. Configura el formulario de contacto con tu backend o proveedor. El formulario tiene un action de ejemplo y no debe publicarse sin configurarlo.
3. Sustituye las fotografías de demostración por imágenes propias/licenciadas.
4. Ajusta los textos de servicios a los servicios reales de la veterinaria.

## Animaciones
GSAP + ScrollTrigger anima la entrada del hero, las imágenes y los bloques con `data-reveal` al entrar en el viewport. El contexto GSAP se revierte al destruir el componente.
