const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");
const currentUser = document.cookie
  .split("; ")
  .find((row) => row.startsWith("username="))
  ?.split("=")[1];

send.addEventListener("click", () => {
  const message = document.querySelector("#message");
  if (message.value.trim() !== "") {
    socket.emit("message", message.value);
    message.value = "";
  }
});

socket.on("message", ({ user, message }) => {
  const isOwnMessage = user === currentUser;

  const msg = document.createRange().createContextualFragment(`
    <div class="message fade-in-up d-flex ${isOwnMessage ? 'justify-content-end' : ''} align-items-start mb-3">
      ${!isOwnMessage ? `
        <div class="image-container me-2">
          <img src="/img/perfil2.jpeg" class="rounded-circle" style="width: 40px;" alt="User" />
        </div>
      ` : ''}
      <div class="message-body ${isOwnMessage ? 'bg-own' : 'bg-others'} p-3 rounded-4">
        <div class="user-info fw-bold ${isOwnMessage ? 'text-end text-success' : 'text-primary'}">
          ${isOwnMessage ? 'Tú' : user} <span class="time text-muted small ms-2">🕒 Ahora</span>
        </div>
        <p class="mb-0">${message}</p>
      </div>
    </div>
  `);
  allMessages.append(msg);
  allMessages.scrollTop = allMessages.scrollHeight;
});

// Muestra los mensajes del sistema
socket.on("system-message", (msg) => {
  const systemMsg = document.createRange().createContextualFragment(`
    <div class="text-center text-muted small mb-2">
      🔔 ${msg}
    </div>
  `);
  allMessages.append(systemMsg);
  allMessages.scrollTop = allMessages.scrollHeight;
});

// Muestra lista de usuarios conectados


socket.on("users-list", (users) => {
  console.log("Usuarios conectados:", users); // Verifica si llega
  const usersList = document.getElementById("users-list");
  usersList.innerHTML = users
    .map((user) => `<li class="list-group-item">${user}</li>`)
    .join("");
});
