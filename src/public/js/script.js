const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

send.addEventListener("click", () => {
  const message = document.querySelector("#message");
  socket.emit("message", message.value);
  message.value = "";
});


socket.on("message", ({ user, message }) => {
  const msg = document.createRange().createContextualFragment(`
    <div class="message fade-in-up d-flex align-items-start mb-3">
      <div class="image-container me-2">
        <img src="/img/perfil2.jpeg" class="rounded-circle" style="width: 40px;" alt="User" />
      </div>
      <div class="message-body">
        <div class="user-info text-primary fw-bold">
          ${user} <span class="time text-muted small ms-2">Hace 1 minuto</span>
        </div>
        <p class="text-dark">${message}</p>
      </div>
    </div>
  `);
  allMessages.append(msg);
});
