import cipher from './cipher.js';

console.log(cipher);


// Diferencia en el texto de las Casilla para ingresar el texto
var txt1 = ["Cifremos !!", "Descifremos !!"];
var aux = document.getElementById("title-question");


// click del boton de cifrado - llega a la pagina para poner el texto y offset
document.getElementById("cpr-btn").addEventListener('click', () => {
    document.getElementById("explanation-card").style.display = "none";
    document.getElementById("question-card").style.display = "block";
    document.getElementById("answer-card").style.display = "block";
    aux.innerText = txt1[0];
});

//click en boton de descifrado - llega a la pagina para poner el texto y offset
document.getElementById("dcpr-btn").addEventListener('click', () => {
    document.getElementById("explanation-card").style.display = "none";
    document.getElementById("question-card").style.display = "block";
    document.getElementById("answer-card").style.display = "block";
    aux.innerText = txt1[1];
});

// Obtengo el texto dentro del input
var texto = document.getElementById("txt");
var sbt_btn = document.getElementById("submit-btn");
var texto2 = document.getElementById("answer-text");
var offset = document.getElementById("offset");

sbt_btn.addEventListener("click", () => {
  
  let tt= cipher.decrypt(texto.value, offset.value);

  texto2.innerText = tt;

});
