import cipher from './cipher.js';

console.log(cipher);

// click del boton de cifrado - llega a la pagina para poner el texto y offset
document.getElementById("cpr-btn").addEventListener('click', () => {
    document.getElementById("explanation-card").style.display = "none";
    document.getElementById("question-card").style.display = "block";
    document.getElementById("answer-card").style.display = "block";
});

//click en boton de descifrado - llega a la pagina para poner el texto y offset
document.getElementById("dcpr-btn").addEventListener('click', () => {
    document.getElementById("explanation-card").style.display = "none";
    document.getElementById("question-card").style.display = "block";
    document.getElementById("answer-card").style.display = "block";
});

// Obtengo el texto dentro del input
var texto = document.getElementById("txt");
var sbt_btn = document.getElementById("submit-btn");

sbt_btn.addEventListener("click",()=>{
console.log(texto.value)
}); 