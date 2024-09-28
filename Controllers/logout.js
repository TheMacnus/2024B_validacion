import {userstate,logout}from "./conecction.js"

userstate()
const cerrar = document.getElementById('btnlogout')

async function sesion(){
     const verificar = logout()
     const validar = await verificar

     .then((validar) =>
        {
            alert('Sesión cerrada')
            window.location.href="../index.html"
        })
        .catch((error) => {
            alert('Sesión no cerrada')
        });
}

window.addEventListener('DOMContentLoaded',async()=>{
    cerrar.addEventListener('click', sesion)
})