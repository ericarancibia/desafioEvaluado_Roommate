# Desafío Evaluado, Módulo VIII - Roommate.

## Descripción del proyecto

Crear un servidor con Node que sirva una interfaz HTML, cuya temática está basada en el registroe gastos entre roommates.

Servir una API REST que permite hacer lo siguiente:

- Almacenar roommates nuevos ocupando random user.
- Devolver todos los roommates almacenados.
- Devolver el historial de gastos registrados.
- Modificar la información correspondiente a un gasto.
- Eliminar gasto del historial.
- Enviar un correo electrónico a todos los roommates cuando se registre un nuevo gasto. Se recomienda agregar a la lista de correos su correo personal para verificar esta funcionalidad.

## Prerrequisitos o Dependencias
- Windows, Mac, Linux.
- Javascript, Node.js, GitHub.
- Visual Studio Code.
- Postman

### Para inicializar el programa se requiere:

1. Instalar las dependencias Express, Axios, Uuid, Dotenv y Nodemailer,  e instalarlas con el comando `npm i express axios uuid dotenv nodemailer`.

### Ejemplos de uso:

Ruta para la página:
URL: http://localhost:3000/

- Agregar Roommate; presionar botón `Agregar Roommate`:

![Imagen](/assets/img/agregar.png)

- Agregar Gasto; elegir Roommate, agregar Descripción y Monto. Por último hacer click en botón `Agregar`:

![Imagen](/assets/img/agregar_gasto.png)


- Editar Gasto; click icono amarillo en Historial, ingresar actualización de datos y click en boton `Agregar`:

![Imagen](/assets/img/editar_gasto.png)
![Imagen](/assets/img/editar_gasto2.png)

- Eliminar Gasto; hacer click en ícono rojo en Historial:

![Imagen](/assets/img/eliminar_gasto.png)

## Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE.md](LICENSE) para detalles

---

## Eric Arancibia (https://github.com/ericarancibia) - G68 Desarrollo Aplicaciones Full Stack JavaScript. Talento Digital - Academia Desafío Latam