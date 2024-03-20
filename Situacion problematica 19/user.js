const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Base de datos simulada para almacenar usuarios registrados
const usersDB = [];

// Ruta para registrar un nuevo usuario
app.post('/registro', (req, res) => {
  const nuevoUsuario = req.body;
  usersDB.push(nuevoUsuario);
  res.status(201).json({ mensaje: 'Usuario registrado con éxito' });
});

// Ruta para obtener la lista de usuarios registrados
app.get('/usuarios', (req, res) => {
  res.status(200).json(usersDB);
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
