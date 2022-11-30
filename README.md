## Prueba técnica Celcia.

Con base en el reto planteado, se pedía la creación de una aplicación que tuviese backend, fronted de alta disponibilidad, para el registro de archivos de medición de energía de generación fotovoltaica.

## Solución plateada:

Para la solución del reto se plantea un monorepo, con una estructura con tres directorios

Database: contiene la definición de estructuras para una base de datos de postgres con un archivo Dockerfile de configuración y despliegue

Api: contiene el backend desarrollado en node, con express basado una arquitectura de tres capas rutas, servicios y modelos, siendo este último el manejador de toda data, también se encuentra un middleware de autorización (auth.js) quien a través del atributo authorization del header recibirá un token en formato jwt para validad la autenticación de sesiones.

También se incluye un archivo Dockerfile con la configuración de despliegue.

En el archivo database de /src/components/database.js encontraran una definición de la conexión a la base de datos con dos instancias, una de lectura y escritura y una réplica de lectura, como mecanismo de escalado para alta disponibilidad.

En /src/routs encontrara dos rutas authr y medición la última esta con protección de autorization.

También encontraran un archivo docker-compose.yml con la definición de la infraestructura

Todo el ejercicio está en el repositorio de github

https://github.com/cgalvisleon/celcia-test.git
