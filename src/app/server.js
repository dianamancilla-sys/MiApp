const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const productos = [
  { id:1, nombre: "Clean Code" },
  { id:2, nombre: "NativeScript Libro" },
  { id:3, nombre: "Angular Avanzado" },
  { id:4, nombre: "Redux Patterns" }
];

app.get('/api/productos', (req,res)=>{
  const q = (req.query.q || "").toLowerCase();
  const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(q));
  res.json(filtrados);
});

app.listen(3000, () => console.log("API corriendo en puerto 3000 - filtrado por ?q="));