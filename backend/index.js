const express = require ('express');
const app = express();
const mysql = require ('mysql');// exporta mysql
const cors = require ('cors');

const login = ()=>{
    alert("inicio correcto")
    console.log("inicio correcto")
}

app.use (cors());
app.use(express.json());


const conex = mysql.createConnection({
    host: "localhost",
    user: "root", //usuario por defecto
    password: "", //contraseña por defecto
    database: "nudisa",
}); // crea la conexion  con la base de datos


app.post('/create', (req, res) =>{
    const correo = req.body.email;
    const password = req.body.password;
    console.log(correo,password)
    

    conex.query(`SELECT contraseña FROM registro WHERE correo = ?`,[correo],
        (err, result) => {
        
            if (err){
                console.log (err);
                console.log("ERROR")
            }
            else{
                if(result != undefined || result != null ){
                
                let y = Object.values(result[0]);

                if(y == password){
                    console.log("inicio correcto")
                    
                    app.get('/sada', (req, res)=>{
                        res.send([password, correo])
                    }) 
                }
                
                else{
                res.send (result);
                console.log("inicio incorrecto");
                }
            }
            } 
        }
    );
});


app.listen(3001, ()=>{
    console.log ('corriendo en el puerto 3001')
})


//conex.end();