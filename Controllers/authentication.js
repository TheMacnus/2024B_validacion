import { accessuser } from "../Controllers/conecction.js";

document.getElementById("btnlogin").addEventListener("click", async function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del botón

    const email = document.getElementById("edtuser").value;
    const password = document.getElementById("edtpsw").value;

    // Lista de correos de administradores
    const adminEmails = ["victormanuel22122@gmail.com", "admin2@example.com"];

    try {
        const validation = await accessuser(email, password);

        if (validation) {
            alert('Autenticación exitosa');
            console.log('Autenticación exitosa');

            // Verificar si el correo pertenece a un administrador
            if (adminEmails.includes(email)) {
                window.location.replace("Templates/admin.html"); // Redirigir a admin.html
            } else {
                window.location.replace("Templates/bienvenido.html"); // Redirigir a bienvenido.html
            }
        } else {
            alert('Error: Fallo en la autenticación');
            console.log('Fallo en la sesión del usuario');
        }
    } catch (error) {
        alert('Error of Authentication: '+error.message)
        console.log('Error of Authentication: '+error)
    }
});
