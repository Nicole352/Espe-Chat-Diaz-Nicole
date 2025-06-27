# 💬NicoChat en Tiempo Real

**Introducción**

**NicoChat** es una aplicación de mensajería en tiempo real desarrollada con tecnologías modernas como **Express**, **Socket.IO** y **Bootstrap 5**. Su principal objetivo es demostrar cómo implementar comunicación bidireccional usando **WebSockets**, permitiendo a múltiples usuarios conectarse simultáneamente, intercambiar mensajes y visualizar cambios en tiempo real dentro de una sala de chat.

Este proyecto prioriza tanto la funcionalidad técnica como la experiencia del usuario. La interfaz se diseñó con una estética amigable, adaptable a móviles y escritorio, usando tonos rosados suaves e íconos intuitivos.

**Funcionalidades principales**

- ✅ **Conexión en tiempo real** entre múltiples usuarios utilizando **Socket.IO**.
- 👥 **Lista dinámica de usuarios conectados**, que se actualiza en tiempo real.
- 🛎️ **Notificación cuando un usuario se une** al chat, visible para todos los participantes.
- 🚪 **Notificación cuando un usuario abandona** el chat.
- 💬 **Envío y recepción de mensajes instantáneos**, visibles para todos los usuarios conectados.
- 🧑‍🎤 **Identificación de usuarios por nombre**, solicitado al ingresar.
- 🖼️ **Mensajes estilizados** con nombre, hora de envío, avatar redondo y diseño limpio.
- 📱 **Diseño responsive**, optimizado para móviles y pantallas de escritorio.
- 🎨 Interfaz moderna con **Bootstrap 5**, íconos visuales y animaciones suaves.
- 🧹 **Autolimpieza del input** después de enviar un mensaje.
- 📡 **Manejo de eventos WebSocket** como `connection`, `disconnect`, `chat message`, entre otros.
- 🔒 **Validación básica** para evitar mensajes vacíos.


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


**Diseño e Interfaz**

🎀 Paleta en tonos rosados para una interfaz suave y estética.
🧑‍🎨 Avatares circulares personalizados junto al nombre del usuario.
💻 Diseño adaptable (responsive) para móviles, tablets y computadoras.
🧼 Interfaz ordenada, amigable y centrada, con animaciones sutiles.
🎯 Uso de íconos y tipografía clara para facilitar la lectura de mensajes.

**Capturas de pantalla**
Formulario de ingreso:

![image](https://github.com/user-attachments/assets/519f0119-687b-4953-9342-f0c1187fa9cb)

Chat en funcionamiento:

![image](https://github.com/user-attachments/assets/b6f4d2f3-f839-455f-b9b0-e8f8efdd2413)

Notificacion de union o salida del chat:

![image](https://github.com/user-attachments/assets/fa9e66cb-9eb6-47a2-921d-b84926b48289)

Lista de usuarios conectados: 

![image](https://github.com/user-attachments/assets/fc7d9c0c-e140-49a9-a900-1d15102e421e)

**ALLALALALALA**
## Ejemplo Aplicado a mi Proyecto de la Unidad 1
En mi proyecto "Chat en tiempo real con Socket.IO", implementé el siguiente manejo de errores:

![image](https://github.com/user-attachments/assets/45fc1c2d-d8d7-45d7-b163-bb6a05a54af7)
solucion
![image](https://github.com/user-attachments/assets/74822fc5-ae07-43f1-9c15-7dc7bafbf2e9)

![image](https://github.com/user-attachments/assets/f307e6f6-832e-472c-97ca-9e4232289c06)
soluion
![image](https://github.com/user-attachments/assets/6a89ec1f-5a49-4213-95bf-565719d37f64)

![image](https://github.com/user-attachments/assets/9eab5a19-4cca-4a08-be11-e2b96adf5826)
solucion
![image](https://github.com/user-attachments/assets/c7da25a2-ee41-42e2-99ab-3d47faadb69e)


![image](https://github.com/user-attachments/assets/179e3a35-06db-445a-a9fb-48be1af0fece)
solucion
![image](https://github.com/user-attachments/assets/81d3b8cc-a152-4ddf-99a2-571bf1291f90)



**Conclusiones**

El desarrollo de NicoChat permitió aplicar conocimientos sobre eventos WebSocket, interacción cliente-servidor, y diseño responsive. Además de su funcionalidad, se priorizó una experiencia visual atractiva y fácil de usar.

Se comprobó la eficacia de Socket.IO como solución para comunicación en tiempo real, y se fortalecieron habilidades en el uso de Express.js como servidor backend. Las decisiones de diseño y estructura también reflejan buenas prácticas de codificación, documentación y modularidad.

Este proyecto establece una base sólida para futuras aplicaciones web colaborativas, con posibilidad de escalar e integrar más funciones como autenticación, historial de mensajes y salas múltiples.

**Referencias**

[1] Bootstrap, “Bootstrap 5 Documentation,” [Online]. Available: https://getbootstrap.com/docs/5.3/getting-started/introduction/
[2] Socket.IO, “Socket.IO Documentation,” [Online]. Available: https://socket.io/docs/v4/


