const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Base de datos simulada para almacenar productos
const productosDB = [];

// Ruta para agregar un nuevo producto
app.post('/productos', (req, res) => {
  const nuevoProducto = req.body;
  productosDB.push(nuevoProducto);
  res.status(201).json({ mensaje: 'Producto agregado con éxito' });
});

// Ruta para obtener la lista de productos
app.get('/productos', (req, res) => {
  res.status(200).json(productosDB);
});

// Ruta para buscar productos por nombre o categoría
app.get('/productos/buscar', (req, res) => {
  const { nombre, categoria } = req.query;
  let resultados = productosDB;

  if (nombre) {
    resultados = resultados.filter(producto => producto.nombre.includes(nombre));
  }

  if (categoria) {
    resultados = resultados.filter(producto => producto.categoria === categoria);
  }

  res.status(200).json(resultados);
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
