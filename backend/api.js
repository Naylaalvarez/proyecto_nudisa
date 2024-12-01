const express = require('express');
const cors = require('cors');
const app = express();

// Permitir solicitudes desde localhost:3000
app.use(cors({
    origin: 'http://localhost:3000'
}));

// Rutas de tu API
app.get('/api', (req, res) => {
    res.json({ message: 'Hola desde la API' });
});

app.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
});