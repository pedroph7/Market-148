function login(){
    var nome = $("#nome").val()
    var senha = $("#senha").val()

    //console.log(senha,nome)
    if(nome && senha && nome === "admin" && senha === "1234"){
        const user = {
            name: nome,
            dataEntrada: new Date(),
            id : Math.floor(Math.random() * 100000),
        }

        localStorage.setItem("usuario", JSON.stringify(user))

        window.location.href = "https://www.boticario.com.br/"
    }else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.border = "2px solid red"
        document.getElementById("senha").style.border = "2px solid red"
    }

}

function fecharError(){
    document.getElementById("error-modal").style.display = "none"
    document.getElementById("nome").style.border = "2px solid white"
    document.getElementById("senha").style.border = "2px solid white"
}

function showPassword(){
    var inputSenha = document.querySelector("#senha")
    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type","text")
    }else{
        inputSenha.setAttribute("type","password")
    }
}