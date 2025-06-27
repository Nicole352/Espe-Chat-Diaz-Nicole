const express = require('express');
const { createServer } = require('http');
const realTimeServer = require('./realTimeServer');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const httpServer = createServer(app);

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(express.json()); // Por si alguna ruta espera JSON

// Rutas
try {
  app.use(require('./routes'));
} catch (err) {
  console.error("Error al cargar las rutas:", err);
}

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Manejador de rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({
    error: "Ruta no encontrada",
  });
});

// Manejador global de errores
app.use((err, req, res, next) => {
  console.error("Error inesperado:", err);
  res.status(500).json({
    error: "Error interno del servidor",
    detalle: err.message,
  });
});

// Iniciar el servidor
httpServer.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});

// Servidor en tiempo real (Socket.IO)
realTimeServer(httpServer);
