import{recover}  from "../Controllers/conecction.js"

const recovery = document.getElementById("recoverybtn")
console.log("en js de reestablecer")

async function Resetear(){
    const email = document.getElementById('btnemail').value

    const verificar=recover(email)
    const validation = await verificar

    .then((validation) => {
        alert("Reset verification succesfull "+email)
        window.location.href="../index.html"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}

window.addEventListener('DOMContentLoaded', async()=>{
    recovery.addEventListener('click', Resetear)
})