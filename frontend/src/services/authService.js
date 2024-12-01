import { Php } from "@mui/icons-material";
import { useEventCallback } from "@mui/material";
import Axios from 'axios';
import { useState } from "react";
// src/services/authService.js

    //const [cuenta,setCuenta] = useState([]);

export const authService = {

    login:(email, password) => {
        
        return fetch('http://localhost:3001/sada')
            .then(response => response.json())
            .then(users => {
                //Axios.get('http://localhost:3001/sada').then ((responser)=>{
                    //alert(responser.data[1]);
                    alert(users[0]);
                const user = users[1];
                const validPassword = users[0];  // Contraseña simulada
                if (user == email && password == validPassword) {
                    console.log('Login exitoso');
                    return { success: true, email: user, name: validPassword };
                } else {
                    alert("error")
                    console.log('Email o contraseña incorrectos');
                    throw new Error('Email o contraseña incorrectos');
                }
            //})
            })   
            .catch(error => {
                console.error('Error en la autenticación:', error.message);
                return { success: false, message: error.message }})  

}};
//tadeovallejos87@gmail.com
//123 });