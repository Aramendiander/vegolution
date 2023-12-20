# Vegolution Backend

¡Bienvenido al backend de Vegolution! Este componente es esencial para la funcionalidad del ecommerce y está desarrollado utilizando Node.js y MongoDB. A continuación, se proporciona una guía detallada sobre las características y estructura del backend.

## Estructura del Proyecto

La aplicación backend de Vegolution sigue el patrón de diseño Modelo Vista Controlador (MVC) para una organización clara y mantenible del código.

### 1. Modelo Vista Controlador (MVC)
La estructura MVC divide la aplicación en tres componentes principales:

   - **Modelo:** Representa la capa de datos y la lógica de la aplicación. En nuestro caso, gestiona las interacciones con la base de datos MongoDB.

   - **Vista:** Maneja la presentación y la interfaz de usuario. En el backend, la vista se centra en la presentación de los datos de manera adecuada para ser consumidos por el frontend.

   - **Controlador:** Actúa como intermediario entre el modelo y la vista, gestionando las solicitudes y respuestas. Contiene la lógica de negocio de la aplicación.

## Funcionalidades Principales

### 1. Registro y Login
Vegolution utiliza JSON Web Tokens (JWT) y bcrypt para proporcionar un sistema seguro de registro y login de usuarios.

### 2. Gestión del Carrito
La aplicación implementa las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar el carrito de compras. Esto se logra mediante los métodos HTTP:

   - **GET:** Obtener información sobre el carrito.
   - **POST:** Agregar un producto al carrito.
   - **PUT:** Actualizar la cantidad de un producto en el carrito.
   - **DELETE:** Eliminar un producto del carrito.

### 3. Rutas Dinámicas
Vegolution utiliza rutas dinámicas para cada producto y categoría. Esto permite una navegación eficiente y una gestión efectiva de la información relacionada con productos y categorías.

## Instrucciones de Ejecución

1. Clona el repositorio de Vegolution Backend.
 ```bash
   git clone https://github.com/tu-usuario/vegolution-backend.git
   ```
3. Instala las dependencias
   ```bash
   cd vegolution-backend
    npm install
    ```
Configura las variables de entorno, incluyendo la conexión a la base de datos MongoDB, secretos JWT, etc.

Inicia el servidor.
```bash
npm start
```

La aplicación backend estará disponible en http://localhost:3006.
