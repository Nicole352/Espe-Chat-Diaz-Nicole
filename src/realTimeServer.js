module.exports = (httpServer) => {
  const { Server } = require("socket.io");
  const io = new Server(httpServer);
  const connectedUsers = new Map();

  io.on("connection", (socket) => {
    try {
      const cookie = socket.handshake.headers.cookie;
      if (!cookie) {
        console.warn("Conexión sin cookie detectada");
        socket.emit("error", "No se encontró la cookie de autenticación.");
        return;
      }

      const userCookie = cookie
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith("username="));

      if (!userCookie) {
        console.warn("Cookie 'username' no encontrada");
        socket.emit("error", "No se encontró el nombre de usuario en la cookie.");
        return;
      }

      const username = userCookie.split("=")[1];
      connectedUsers.set(socket.id, username);

      // Notificar que el usuario se unió
      io.emit("message", {
        user: "🔔",
        message: `${username} se ha unido al chat.`,
      });

      // Enviar lista actualizada de usuarios
      io.emit("users-list", Array.from(connectedUsers.values()));

      socket.on("message", (message) => {
        try {
          if (!message || typeof message !== 'string') {
            socket.emit("error", "Mensaje inválido.");
            return;
          }
          io.emit("message", {
            user: username,
            message,
          });
        } catch (err) {
          console.error("Error al enviar mensaje:", err);
          socket.emit("error", "Ocurrió un error al enviar el mensaje.");
        }
      });

      socket.on("disconnect", () => {
        connectedUsers.delete(socket.id);
        io.emit("message", {
          user: "🔔",
          message: `${username} salió del chat.`,
        });
        io.emit("users-list", Array.from(connectedUsers.values()));
      });
    } catch (err) {
      console.error("Error en conexión del socket:", err);
      socket.emit("error", "Ocurrió un error en la conexión.");
    }
  });
};
