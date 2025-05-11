console.log("Inicio")

// const boton = document.getElementById("enviar")
// boton.addEventListener("click",
//     () => {
//         console.log("los parametros: ")
//         let user = document.getElementById("user")
//         let password = document.getElementById("password")
//         console.log(password.value)
//         console.log(user.value)
//         console.log (user + password)

//     }
// )

export const mostrar = () =>{
    console.log("los parametros: ")
    let user = document.getElementById("user")
    let password = document.getElementById("password")        
    console.log(password.value)
    console.log(user.value)
    console.log (user + password)

    let formulario = document.getElementsByTagName("form")
    console.log(formulario)
    user.setAttribute("name", "user")
    password.setAttribute("name", "password")
    // formulario[0].setAttribute("action", "https://google.com/search")
    formulario[0].submit()
}

export const button = document.getElementById("enviar")
button.addEventListener("click", mostrar)