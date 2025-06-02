module.exports = (httpServer) => {
  const { Server } = require("socket.io");
  const io = new Server(httpServer);
  const connectedUsers = new Map();

  io.on("connection", (socket) => {
    const cookie = socket.handshake.headers.cookie;
    if (!cookie) return;

    const userCookie = cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith("username="));
    if (!userCookie) return;

    const username = userCookie.split("=")[1];
    connectedUsers.set(socket.id, username);

    // Enviar mensaje de unión
    io.emit("message", {
      user: "🔔",
      message: `${username} se ha unido al chat.`,
    });

    // Enviar lista actualizada
    io.emit("users-list", Array.from(connectedUsers.values()));

    socket.on("message", (message) => {
      io.emit("message", {
        user: username,
        message,
      });
    });

    socket.on("disconnect", () => {
      connectedUsers.delete(socket.id);
      io.emit("message", {
        user: "🔔",
        message: `${username} salió del chat.`,
      });
      io.emit("users-list", Array.from(connectedUsers.values()));
    });
  });
};
