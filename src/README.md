## 💬NicoChat en Tiempo Real ##

**Introducción**

El desarrollo de aplicaciones robustas en Node.js requiere no solo una lógica funcional eficiente, sino también un manejo adecuado de errores y excepciones. En la Unidad 1 se trabajó en la implementación de un sistema de chat en tiempo real usando Socket.IO y Express, donde se abordó el control de errores como una parte fundamental para garantizar la estabilidad y la buena experiencia del usuario.

**Tipos de Errores Comunes en Node.js**

Node.js puede enfrentar diversos tipos de errores durante la ejecución de un programa. Los más comunes incluyen:

SyntaxError
Ocurre cuando el código fuente no sigue la sintaxis correcta del lenguaje JavaScript. Por ejemplo, una llave o paréntesis sin cerrar.
// Ejemplo
const x = ; // SyntaxError: Unexpected token ;

TypeError
Se lanza cuando una operación se realiza sobre un tipo de dato inadecuado.
// Ejemplo
const user = null;
console.log(user.name); // TypeError: Cannot read property 'name' of null

ReferenceError
Indica que se está utilizando una variable que no ha sido declarada.
// Ejemplo
console.log(nombre); // ReferenceError: nombre is not defined

SystemError
Proviene de problemas del entorno de ejecución o del sistema operativo. Por ejemplo, errores de red, archivos no encontrados o límites de recursos del sistema.
// Ejemplo
const fs = require('fs');
fs.readFile('/ruta/incorrecta', (err, data) => {
  if (err) console.error(err); // SystemError: ENOENT: no such file or directory
});

CustomError
Son errores personalizados creados por el programador para situaciones específicas de la lógica de negocio.
// Ejemplo
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}

**Buenas Prácticas**

El manejo adecuado de errores no solo evita que la aplicación falle, sino que también mejora el mantenimiento del código, la experiencia del usuario y la seguridad del sistema. A continuación, se presentan algunas prácticas recomendadas:

1. Uso de try-catch en funciones síncronas y controladores de eventos
Cuando se realiza una operación que puede fallar, como lectura de datos, conexión a sockets o manipulación de datos del usuario, se recomienda envolver la lógica en un bloque try-catch.
// Ejemplo
try {
  const result = JSON.parse(userInput);
} catch (error) {
  console.error('Error al analizar JSON:', error.message);
}

2. Manejo de errores en funciones asíncronas con async/await
// Ejemplo
async function cargarDatos() {
  try {
    const respuesta = await fetch('https://api.example.com');
    const datos = await respuesta.json();
  } catch (error) {
    console.error('Error al cargar datos:', error);
  }
}

3. Middleware de errores en Express
Express permite capturar errores de forma centralizada mediante middleware. Esto estandariza las respuestas y evita repetir código en múltiples rutas.
// Ejemplo
app.use((err, req, res, next) => {
  console.error('Error capturado:', err);
  res.status(500).json({
    error: 'Error interno del servidor',
    mensaje: err.message,
  });
});

4. Respuestas claras y consistentes en la API
Es importante mantener una estructura uniforme en las respuestas de error, incluyendo el código de estado HTTP, un mensaje y, si es necesario, información adicional para depuración.
// Ejemplo
{
  "error": "Usuario no autorizado",
  "codigo": 401
}

5. Uso de herramientas de logging (winston, morgan)
Para aplicaciones más grandes, se recomienda utilizar bibliotecas como winston o morgan que permiten guardar logs con distintos niveles de severidad y transportes (archivos, consola, etc.).

##Ejemplo Aplicado a este Proyecto##
Durante el desarrollo del proyecto “Chat en tiempo real con Socket.IO”, se identificaron varios puntos críticos donde podrían surgir errores. Para asegurar el correcto funcionamiento del sistema, se aplicaron estrategias de manejo de excepciones de la siguiente manera:

![image](https://github.com/user-attachments/assets/74822fc5-ae07-43f1-9c15-7dc7bafbf2e9)

En la primera imagen se muestra la implementación de un bloque try-catch dentro del evento "connection" del servidor de Socket.IO. Esta estructura permite capturar cualquier error que pueda surgir durante el proceso de conexión de un cliente, como problemas al leer las cookies o registrar al usuario. Gracias a este manejo, si ocurre un error inesperado, se evita que el servidor se caiga y, en su lugar, se emite un mensaje de error al cliente informándole que hubo un problema en la conexión, mejorando así la robustez del sistema.


![image](https://github.com/user-attachments/assets/6a89ec1f-5a49-4213-95bf-565719d37f64)

La segunda imagen corresponde al evento "message" del socket, donde se agregó una validación para asegurarse de que el mensaje enviado por el usuario sea válido. Se verifica que el mensaje no esté vacío y que sea de tipo string, y en caso de que esta condición no se cumpla, se emite un mensaje de error al cliente. Este control previene que datos corruptos o maliciosos se propaguen a todos los usuarios conectados al chat, manteniendo la integridad de la comunicación en tiempo real.


![image](https://github.com/user-attachments/assets/c7da25a2-ee41-42e2-99ab-3d47faadb69e)

En la tercera imagen se presenta el middleware de Express que maneja las rutas no encontradas (404). Esta función se ejecuta cuando el cliente intenta acceder a una ruta que no existe en la aplicación. En lugar de dejar que el navegador muestre un error genérico, el servidor responde con un mensaje JSON claro indicando que la ruta no fue encontrada. Esta estrategia contribuye a una mejor experiencia del usuario y mantiene la coherencia de las respuestas HTTP en toda la API.


![image](https://github.com/user-attachments/assets/81d3b8cc-a152-4ddf-99a2-571bf1291f90)

La cuarta imagen muestra el middleware global de manejo de errores en Express. Este middleware se encarga de capturar cualquier excepción que ocurra en las rutas o en otras partes de la aplicación y que no haya sido manejada previamente. Al interceptar estos errores, el servidor responde con un mensaje de error estructurado y un código de estado HTTP 500, informando que ocurrió un error interno. Además, el error se registra en la consola para facilitar su análisis por parte del desarrollador, promoviendo un entorno más controlado y mantenible.


**Instrucciones para ejecutar el proyecto localmente**

Sigue estos pasos para ejecutar NicoChat en tu máquina local:

1. **Clonar el repositorio**:
https://github.com/Nicole352/Espe-Chat-Diaz-Nicole.git

2. **Instala las dependencias:**
npm install

3. **Ejecuta el servidor:**
npm start

4. **Abre tu navegador en:**
http://localhost:3000

**Conclusiones**

El manejo adecuado de excepciones en aplicaciones desarrolladas con Node.js representa una práctica fundamental para garantizar la estabilidad, seguridad y usabilidad de los sistemas. A través de la implementación de técnicas como bloques try-catch, validaciones explícitas, middlewares especializados y respuestas HTTP coherentes, es posible anticiparse a errores comunes del entorno de ejecución y responder de forma controlada ante situaciones inesperadas.

Durante el desarrollo del proyecto "Chat en tiempo real con Socket.IO", se evidenció la importancia de integrar mecanismos de control de errores tanto en la comunicación en tiempo real como en las rutas tradicionales del servidor Express. La validación de cookies, el control de los datos emitidos por los usuarios, la definición de respuestas personalizadas para rutas no encontradas y el uso de middlewares de errores permitieron construir una aplicación más confiable, resiliente y profesional.

**Referencias**

Eich, B. (2022). JavaScript: The Definitive Guide. O’Reilly Media.
(Incluye fundamentos del lenguaje JavaScript, tipos de errores y excepciones).

Node.js Foundation. (2024). Error Handling Best Practices. Recuperado de https://nodejs.org/en/docs/guides/error-handling-best-practices
(Guía oficial sobre el manejo de errores en Node.js).

Express.js. (2024). Error Handling. Recuperado de https://expressjs.com/en/guide/error-handling.html
(Documentación oficial sobre cómo manejar errores y middlewares en Express).

Socket.IO. (2024). Socket.IO Documentation. Recuperado de https://socket.io/docs/v4/
(Documentación oficial de la biblioteca utilizada para comunicación en tiempo real).

Mozilla Developer Network. (2024). JavaScript Errors - Throw and Try...Catch Statements. Recuperado de https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
(Referencia técnica sobre estructuras de manejo de errores en JavaScript).

Krasner, D. (2023). Writing Resilient Node.js Applications. Medium. Recuperado de https://medium.com/@dkrasner/writing-resilient-node-js-applications
(Artículo técnico sobre cómo construir aplicaciones robustas usando buenas prácticas de error handling).




