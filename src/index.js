import cipher from './cipher.js';

//console.log(cipher);

// click del boton de cifrado - llega a la pagina para poner el texto y offset
document.getElementById("start-btn").addEventListener('click', () => {
    document.getElementById("explanation-card").style.display = "none";
    document.getElementById("question-card").style.display = "block";
    document.getElementById("answer-card").style.display = "block";
    
});

// Obtengo el texto dentro del input
const text = document.getElementById("txt");
const encode_btn = document.getElementById("encode-btn");
const text2 = document.getElementById("answer-text");
const shift = document.getElementById("offset");
const decode_btn = document.getElementById("decode-btn")

const offset = parseInt(shift.value);
encode_btn.addEventListener("click", () => {

  let tt= cipher.encode( offset,text.value);

  text2.innerText = tt;

});
decode_btn.addEventListener("click", () => {
  
  let tt= cipher.decode( offset,text.value);

  text2.innerText = tt;

});
