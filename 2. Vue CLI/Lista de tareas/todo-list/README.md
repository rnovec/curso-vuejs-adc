# Aplicación Lista de Tareas

> Versión reconstruida de to-do-list con Vue CLI, Bootstrap Vue y Webpack

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Estructura del Proyecto

```
├── node_modules        <-- Dependencias del proyecto
├── src                 <-- Workspace de desarollo
│   ├── assets          <-- Archivos estáticos
│   │   └── logo.png
│   ├── components      <-- Componentes de la aplicación
│   │   ├── ListaTareasComponent.vue
│   │   ├── NuevaTareaComponent.vue
│   │   └── TituloComponent.vue
│   ├── App.vue         <-- Componente principal
│   └── main.js         <-- Instancia principal
├── .babelrc            <-- Configuración de Babel
├── .editorconfig       <-- Configuración del proyecto
├── .gitignore          <-- Archivos ignorados para Git
├── index.html          <-- Entrypoint
├── package.json        <-- Dependecias del proyecto
├── package-lock.json   <-- Dependencies locker
├── README.md           <-- Documentación
└── webpack.config.js   <-- Configuración de Webpack
```

`src/` --> Esta será nuestra carpeta de desarrollo ahora aqui se encontrará la lógica de nuestra aplicación

`src/components/` --> Aquí crearemos los componentes que necesitemos para nuestra aplicación

`src/main.js` --> Archivo principal aqui importaremos las dependencias del proyecto que usaremos globalmente

`src/App.vue` --> Componente principal este será cargado cada vez que iniciemos nuestra aplicación

Ahora ve a `main.js` ahi donde todo inicia.