# PetCare Tech Demo

🚀 **Proyecto desplegado en:** [https://anarragan.github.io/Prototipo_Petcare_tech/](https://anarragan.github.io/Prototipo_Petcare_tech/)

Prototipo web desarrollado con React, TypeScript y Vite para mostrar la experiencia de PetCare Tech. Incluye una landing page, selección de rol, panel de propietario y panel de proveedor.

## Requisitos

- Node.js 20 o superior.
- npm incluido con Node.js.
- Un editor como VS Code.

## Instalación local

1. Abre una terminal en la carpeta raíz de este repositorio.
2. Entra al proyecto:

```bash
cd petcare-tech-demo
```

3. Instala dependencias:

```bash
npm install
```

## Cómo ejecutar el proyecto

Para levantar el entorno de desarrollo:

```bash
npm run dev
```

Luego abre la URL que indique Vite, normalmente `http://localhost:5173`.

## Otros comandos útiles

- Compilar para producción:

```bash
npm run build
```

- Revisar estilo y posibles errores de lint:

```bash
npm run lint
```

- Probar la versión compilada localmente:

```bash
npm run preview
```

## Dónde modificar el proyecto

- `src/pages/landing/`: páginas de la landing y selección de rol.
- `src/pages/owner/`: dashboard del propietario.
- `src/pages/provider/`: dashboard del proveedor.
- `src/components/`: componentes reutilizables de UI y layout.
- `src/assets/images/`: imágenes y logos del proyecto.

## Estructura general

```text
petcare-tech-demo/
  public/
  src/
    assets/
      images/
    components/
    layouts/
    pages/
    routers/
  package.json
  vite.config.ts
```

## Notas de desarrollo

- La navegación principal se controla desde `src/routers/AppRouter.tsx`.
- La landing usa anclas internas para navegar entre secciones.
- El logo principal del prototipo está en `src/assets/images/logo_petcare.png`.
- Si agregas nuevas imágenes, colócalas en `src/assets/images/` y referéncialas en tu código apuntando directamente a esa carpeta (por ejemplo, `href="/src/assets/images/mi-imagen.png"` para el index.html).
