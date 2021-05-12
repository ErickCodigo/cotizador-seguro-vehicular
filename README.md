# Cotizador de seguro vehicular

## ¿Cómo correr la app?
Ejecute en la terminal o consola:

```bash
npm install
# or
yarn install
```

## DNI disponibles:
- 15784947
- 15784564
- 15786416
- 15786927
- 15783540

## Librerías utilizadas:

- clsx: Validar clases css (funcional)
- next: Framework para realizar renderizado del lado del servidor escogido para garantizar el posicionamiento SEO (funcional)
- nprogress: Muestra una barra de progreso entre páginas (estético)
- postcss: Convertidor de css a código css estándar (funcional)
- autoprefixer: Plugin de PostCSS que permite analizar código CSS estándar y convertirlo a css adaptable para navegadores antiguos (funcional)
- tailwindcss: Herramienta css que permite crear clases de utilidad que acelerar el desarrollo de sitios webs. (funcional)
- typescript: superconjunto de javascript que agrega tipado estático y objetos basados en clases. (funcional)

## Pasos para desarrollar la app:

- Definir tecnologías de desarrollo
- Definir paleta de colores
- Maquetar la web
- Crear api de datos
  - Definir datos a obtener del usuario
  - Crear endpoints
  - Crear un manejador de endpoint
- Desarrollar flujo de aplicación
- Validar los formularios
- Validar flujo de aplicación

## Obstáculos encontrados durante el desarrollo del proyecto:

- No se brindó los iconos e imágenes originales
- Obviamente debido a la naturaleza de la prueba técnica no hubo un stakeholder, pero durante el desarrollo surgieron preguntas que fueron resueltas pero con un coste de tiempo.

## Notas del desarrollador:

### Conseguidos:

- La aplicación actualmente cumple con el flujo de trabajo requeridos.
- Diseño conseguido respetando el diseño brindado. (95%)
- La aplicación fue desarrollada con Typescript
- La mayoría de componentes son reutilizables, debido al factor tiempo existen componentes que necesitan refactorización.
- Se utilizó TailwindCSS para un desarrollo acelerado del proyecto
- Se respetó el layout
- Se aplicaron diferentes técnicas para garantizar un código limpia y escalable, como codificación en ingles, correcto naming de variables, uso de patrones de diseños (factory, singleton), custom hooks: useMemo, useState, useContext, además de técnicas de optimización de renderización como: react memo
- Creación de API clientes de prueba utilizando la página de JsonPlaceholder
- Además de la línea anterior se crearon clases específicas que encapsulan el funcionamiento interno de una API de la mano con interfaces que funcionan como DTO



### Faltantes:

- Si bien el diseño se mantuvo durante la maquetación de la aplicación, hubo algunas complicaciones con obtener los iconos e imágenes originales utilizadas en el diseño enviado, por esta razón se podrá apreciar en ciertos lugares de la aplicación que las imágenes e iconos no se ven demasiados trabajados, lo cual se soluciona fácilmente con los recursos ya mencionados.
- En los requerimientos secundarios se menciona la implementación de añadir y eliminar asegurado, pero no se brindó los diseños respectivos para llevar esto a cabo, sin embargo cabe mencionar que en el tema funcional, la aplicación podría fácilmente implementar estos requerimientos, ya que los métodos fueron creados, pero debido a que no existían diseños para la creación de la interfaz esto fue inviable.
