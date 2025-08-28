# Mi Portafolio

Este proyecto es un portafolio web personal desarrollado para mostrar información profesional, proyectos y habilidades. Está construido con HTML, CSS y JavaScript.

## Estructura del Proyecto

```
mi-portafolio/
│
├── index.html           # Página principal del portafolio
├── 404.html             # Página de error personalizada
├── assets/
│   ├── css/             # Hojas de estilo CSS
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   └── utilities.css
│   ├── docs/            # Documentos, como el CV
│   │   └── CV.pdf
│   ├── img/             # Imágenes utilizadas en el sitio
│   │   ├── hero.jpg
│   │   ├── proyecto-1.png
│   │   ├── proyecto-2.png
│   │   └── proyecto-3.png
│   └── js/              # Archivos JavaScript
│       └── main.js
└── README.md            # Documentación del proyecto
```

## Descripción paso a paso

1. **Inicio del Proyecto**
   - Se crea la estructura de carpetas y archivos principales.
   - Se incluye `index.html` como página principal y `404.html` para errores.

2. **Diseño Base**
   - Se desarrollan las hojas de estilo en `assets/css/` para definir la apariencia general, componentes, layout y utilidades.

3. **Contenido**
   - Se agregan imágenes en `assets/img/` para la sección principal y los proyectos destacados.
   - Se incluye el archivo `CV.pdf` en `assets/docs/` para descarga.

4. **Funcionalidad**
   - Se implementa la lógica básica en `assets/js/main.js` para interactividad (menú, animaciones, etc.).

5. **Personalización**
   - Se adapta el contenido de `index.html` con información personal, proyectos realizados y enlaces a redes sociales.

6. **Página de Error**
   - Se diseña `404.html` para mejorar la experiencia del usuario en caso de rutas no encontradas.

## Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/KarinG-Z/mi-portafolio.git
   ```
2. Abre la carpeta `mi-portafolio` en tu editor o navegador.
3. Visualiza el sitio abriendo `index.html`.

## Pasos realizados en el bash de Git para este repositorio

1. **Configurar usuario de Git**
   ```bash
   git config --global user.name "KarinG-Z"
   git config --global user.email "kariim2004@email.com"
   ```

2. **Clonar el repositorio desde GitHub**
   ```bash
   git clone https://github.com/KarinG-Z/mi-portafolio
   cd mi-portafolio
   ```

3. **Agregar el contenido del portafolio al repositorio**
   - Copia todos los archivos y carpetas (`index.html`, `assets/`, etc.) dentro de la carpeta clonada.

4. **Agregar y confirmar la estructura base**
   ```bash
   git add .
   git commit -m "chore: estructura base del portafolio (HTML, CSS modular, JS, README)"
   git push -u origin main
   ```

5. **Crear y subir la rama de desarrollo**
   ```bash
   git checkout -b develop
   git push -u origin develop
   ```

6. **Realizar cambios y registrar los commits en la rama develop**
   ```bash
   git add .
   git commit -m "feat: agrega sección de proyectos y enlaces de demo"
   git commit -m "style: ajusta paleta y espaciados para mejor contraste"
   git commit -m "docs: actualiza README con pasos de despliegue"
   git push
   ```

7. **Fusionar los cambios de develop en main**
   ```bash
   git checkout main
   git merge develop
   git push
   ```

## Créditos

Desarrollado por KarinG-Z.

