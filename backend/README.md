# Files API - Backend

API REST para gestionar y recuperar archivos CSV.

## 🛠️ Tecnologías

- **Node.js** v14
- **Express.js**
- **Swagger** (Documentación API)
- **Jest** (Testing)

## 📋 Requisitos Previos

- Node.js v14 o superior
- npm

## 🚀 Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

2. Ir a la carpeta principal del proyecto:

```bash
cd challeng-fullstack
```

3. Ir a la carpeta del backend:

```bash
cd backend
```

4. Instalar dependencias:

```bash
npm install
```

## ▶️ Ejecución

Iniciar el servidor:

```bash
npm start
```

El servidor estará disponible en `http://localhost:9000`

## 🧪 Testing

Ejecutar los tests:

```bash
npm test
```

## 📖 Documentación API (Swagger)

Una vez el servidor esté corriendo, puedes acceder a la documentación interactiva de la API en:

👉 **http://localhost:9000/api-docs**

### Exportar para Postman

Para importar la API en Postman:

1. Accede a la especificación JSON de Swagger:
   - **http://localhost:9000/api-docs.json**

2. En Postman:
   - Click en **Import**
   - Selecciona **Link**
   - Pega la URL: `http://localhost:9000/api-docs.json`
   - Click en **Continue** y luego **Import**

## 🐳 Docker

También puedes ejecutar el proyecto con Docker:

```bash
docker build -t backend-app .
docker run -p 9000:9000 backend-app
```

O usando Docker Compose desde la carpeta raíz:

```bash
docker-compose up --build
```

## 📁 Estructura del Proyecto

```
backend/
├── src/
│   ├── config/       # Configuración de Express
│   ├── controller/   # Controladores
│   ├── routers/      # Rutas de la API
│   ├── services/     # Servicios externos
│   └── utils/        # Utilidades y helpers
├── test/             # Tests
├── Dockerfile
├── index.js          # Punto de entrada
└── package.json
```
