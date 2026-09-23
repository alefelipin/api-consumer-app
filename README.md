# API Consumer App

Aplicación web sencilla para practicar el consumo de APIs utilizando **Fetch API** y **Axios**.

## Objetivo

El objetivo de esta tarea es aprender a realizar peticiones HTTP desde JavaScript y comparar el funcionamiento de Fetch y Axios.

La aplicación utiliza la API de prueba **JSONPlaceholder** para obtener una lista de posts.

## Funcionalidades

* Obtener datos utilizando Fetch API.
* Obtener datos utilizando Axios.
* Buscar posts.
* Mostrar los resultados en tarjetas.
* Mostrar mensajes de carga y error.
* Navegar entre páginas mediante paginación.

## Tecnologías utilizadas

* HTML
* CSS
* JavaScript
* Fetch API
* Axios
* JSONPlaceholder

## Estructura del proyecto

```text
api-consumer-app/
├── index.html
├── styles.css
├── main.js
└── README.md
```

## API utilizada

La aplicación consume los posts de JSONPlaceholder:

```text
https://jsonplaceholder.typicode.com/posts
```

## Axios

Axios se incluye mediante CDN en el archivo `index.html`.

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## Uso

1. Abrir `index.html` en el navegador.
2. Seleccionar Fetch o Axios.
3. Introducir un término de búsqueda.
4. Pulsar el botón **Fetch Data**.
5. Navegar entre las páginas utilizando los botones de paginación.
