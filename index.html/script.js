const tglDark = document.querySelector("#toggle--dark"); 
const body = document.body
const imagem = document.querySelector(".img--main"); 
const elipse = document.querySelector(".sol") 
let temaPreferido = localStorage.getItem("tema") 

tglDark.addEventListener("change", alterarTema); 

function carregarTema(){
    if (temaPreferido === "dark"){
        body.classList.add("dark")
        imagem.setAttribute("src", "fundo--noite3.jpeg");
        elipse.setAttribute("src", "lua1.png")
    } else {
        body.classList.remove("dark"); 
        imagem.setAttribute("src", "fundo--diaa.jpg" )
        elipse.setAttribute("src", "sol.png");
    }
}


function alterarTema() {
    //   existe a classe dark no body? // 
   if (body.classList.contains("dark")) { 
    body.classList.remove("dark");
    imagem.setAttribute("src", "fundo--diaa.jpg" )
    elipse.setAttribute("src", "sol.png");
    localStorage.setItem("tema", "") 
} else {
        elipse.setAttribute("src", "lua1.png" ) 
        body.classList.add("dark") 
        imagem.setAttribute("src", "fundo--noite3.jpeg");
        localStorage.setItem("tema", "dark") 
    }
}

const resposta = prompt("Qual a sua senha?")
localStorage.setItem("senha", resposta) 
console.log(localStorage.getItem("senha")) 

// setItem("Chave", valor) gravar um valor no local string 
// getItem("Chave") resgata um valor do localString 
// removeItem("Chave") remove único valor  
carregarTema() 