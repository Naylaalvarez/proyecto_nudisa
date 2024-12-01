let mysql = require ("mysql"); // exporta mysql

let conex = mysql.createConnection({
    host: "localhost",
    database: "nudisa",
    user: "root", //usuario por defecto
    password: "", //contraseña por defecto
}); // crea la conexion  con la base de datos

conex.connect(function(err){
    if (err){
        throw err;
    }else{
        console.log ("conecion exitosa")
    }
})

conex.end();

// const http = require('http')
// const dotenv = require('dotenv')

// require('dotenv').config()

// const hostname = '127.0.0.1';
// const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => { //req (es lo que resive) y el res (es lo que recive)
//     const authHeader = req.headers ['authorization']

//     if (authHeader){
//         console.log ()
//     }
//     res.statusCode = 200;

//     res.setHeader('Content-Type', 'text/plain');
    
//     const objerest = {
//         menssge: 'exito',
//         status: 'success',
//         data: {
//             id: 1,
//             name: 'nayla'
//          }
//     }

//     res.end(JSON.stringify(objerest));
//     // res.end('Hola');
// })

// server.listen(port, hostname, () => {console.log('servicor corriendo ')})

// server.end();