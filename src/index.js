import cipher from './cipher.js';

console.log(cipher);

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
const offset = document.getElementById("offset");
const decode_btn = document.getElementById("decode-btn")

encode_btn.addEventListener("click", () => {
  
  let tt= cipher.encode(text.value, offset.value);

  text2.innerText = tt;

});
decode_btn.addEventListener("click", () => {
  
  let tt= cipher.decode(text.value, offset.value);

  text2.innerText = tt;

});
