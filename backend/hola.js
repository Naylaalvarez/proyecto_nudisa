const express = require ('express');
const app = express();
const mysql = require ('mysql');// exporta mysql
const cors = require ('cors');

app.use (cors());
app.use(express.json());

const conex = mysql.createConnection({
    host: "localhost",
    user: "root", //usuario por defecto
    password: "", //contraseña por defecto
    database: "nudisa",
}); // crea la conexion  con la base de datos

app.post('/create', (req, res) =>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.email;
    const password = req.body.password;

    conex.query(`INSERT INTO registro (nombre, apellido, correo, contraseña) VALUES (?, ?, ?, ?)`, [nombre, apellido, correo, password],
        (err, result) => {
            if (err){
                console.log (err);
                console.log("no")
            }else{
                res.send ('registro exitoso');
                console.log("si")
            }
        }
    );
});


app.listen(3001, ()=>{
    console.log ('corriendo en el puerto 3001')
})

//conex.end();