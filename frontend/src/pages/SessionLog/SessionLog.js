import React from 'react'
import SessionFrom from '../../components/SessionFrom'


function SessionLog() {
    const handleSession = (nombre, apellido, correo, password) => {
        console.log(nombre, apellido, correo, password)

    }

    return (
        <div className='login-page'>
            <h2>Registrarse</h2>
            <SessionFrom onSubmit={handleSession} />
        </div>
    )
}

export default SessionLog


// <?php
// $nom = $_POST['nombre'];
// $apell = $_POST['apellido'];
// $corre = $_POST['correo'];
// $contra = $_POST['contrasenia'];
// $contra2 = $_POST['contrasenia'];

// // preguntarse sei esta bien la contrasenia con un if
// $varible="INSERT INTO registro (nombre, apellido, correo, contrasenia) Values ('$nom', '$apell', '$corre', '$contra')";
// include 'conexion.php';

// if ($contra == $contra2) {
//     // echo 'pruede ingresar';
//     $conex->query($varible);
//     // conectar con el home de la pagina.

// }

// else {
    
//     header('location:registrarse.php');
//     echo 'las contrasenias son difirentes';
//     // veremos a donde nos lleva jajajja
// }


// ?>