import { createuser, everification } from "../Controllers/conecction.js";

const crear = document.getElementById('btncreate');

// Función para validar un correo electrónico
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para validar la contraseña
function validarPassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}

// Función para habilitar o deshabilitar el botón de registro según la validez de los campos
function habilitarBoton() {
    const campos = document.querySelectorAll("#edtuser, #edtconfuser, #edtpsw, #edtconfpsw");
    const boton = document.getElementById("btncreate");

    let todosLlenos = true;
    campos.forEach(campo => {
        if (campo.value.trim() === "") {
            todosLlenos = false;
        }
    });

    boton.disabled = !todosLlenos;
    console.log(todosLlenos ? "Botón habilitado" : "Botón deshabilitado");
}

// Event listeners para habilitar o deshabilitar el botón cuando cambian los campos del formulario
document.querySelectorAll("#edtuser, #edtconfuser, #edtpsw, #edtconfpsw")
    .forEach(campo => campo.addEventListener("input", habilitarBoton));

// Función para registrar al usuario
async function register() {
    const email = document.getElementById('edtuser').value;
    const confemail = document.getElementById('edtconfuser').value;
    const psw = document.getElementById('edtpsw').value;
    const confpsw = document.getElementById('edtconfpsw').value;

    // Validación de campos
    if (!email || !confemail || !psw || !confpsw) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (!validarEmail(email)) {
        alert("El correo electrónico no es válido. Use el formato ejemplo@example.com");
        return;
    }

    if (email !== confemail) {
        alert("Los correos electrónicos no coinciden.");
        return;
    }

    if (psw !== confpsw) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    if (!validarPassword(psw)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un carácter especial.");
        return;
    }

    try {
        const userCredential = await createuser(email, psw);
        await everification();
        alert('Usuario registrado exitosamente.');
        window.location.href = "../Templates/register.html";
    } catch (error) {
        alert("Error en el registro: " + error.message);
    }
}

// Event listener para el botón de registro
window.addEventListener('DOMContentLoaded', async () => {
    crear.addEventListener('click', register);
    // Desactivar el botón al cargar la página
    crear.disabled = true;
});
