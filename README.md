# progra-web-2024-1-back

API de ejemplo para la materia Programación Web (2024-1).  
Repositorio backend desarrollado en Node.js utilizando Express y Sequelize.

## Descripción

Este proyecto implementa una API para la gestión de matrículas. Está construido en JavaScript, usando Express como framework principal y Sequelize como ORM para la conexión con bases de datos PostgreSQL.

## Características principales

- API RESTful construida con Express.
- Conexión a base de datos PostgreSQL mediante Sequelize.
- Soporte para CORS y procesamiento de datos con body-parser.
- Scripts para desarrollo y despliegue rápido usando nodemon.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/otro34/progra-web-2024-1-back.git
   cd progra-web-2024-1-back
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

- Inicia el servidor en modo desarrollo:
  ```bash
  npm run dev
  ```
- Inicia el servidor en modo producción:
  ```bash
  npm start
  ```

## Scripts disponibles

- `npm start`: Ejecuta el servidor (`index.js`).
- `npm run dev`: Ejecuta el servidor con reinicio automático usando `nodemon`.
- `npm run init`: Inicializa la aplicación (puede requerir configuración adicional).
- `npm test`: (No implementado)

## Dependencias principales

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [pg (PostgreSQL)](https://node-postgres.com/)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [cors](https://www.npmjs.com/package/cors)
- [nodemon (dev)](https://nodemon.io/)

## Autor

JCR

## Licencia

ISC

## Enlace

[Repositorio en GitHub](https://github.com/otro34/progra-web-2024-1-back)  
[Demo / Homepage](https://progra-web-2024-1-back.vercel.app)
