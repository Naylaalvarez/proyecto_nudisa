export const sesionservice = {
    login: (nombre, apellido, correo, password) => {
        
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                // JSONPlaceholder no tiene contraseñas, así que simulamos una
                const user = users[0]
                // users.find(u => u.email === email);
                const validPassword = "contrasena123";  // Contraseña simulada

                if (user && password === validPassword) {
                    console.log('Login exitoso');
                    return { success: true, nombre: user.nombre, name: user.nombre,
                        success: true, apellido: user.apellido, name: user.apellido,
                        success: true, correo: user.correo, name: user.correo,
                     };
                    // si esta correcto que habilite el calendario.
                } else {
                    console.log('Email o contraseña incorrectos');
                    throw new Error('Email o contraseña incorrectos');
                }
            })
            .catch(error => {
                console.error('Error en la autenticación:', error.message);
                return { success: false, message: error.message };
            });
    }
};