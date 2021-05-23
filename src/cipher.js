const cipher = {
  encrypt: function encrypt(txt, offset) {
    let output ="";
    offset = parseInt(offset);
    let c = "";
    let aux1;
    for (let i = 0; i < txt.length; i++) {
      aux1 = txt.charCodeAt(i);

      if (aux1 >= 65 && aux1 <= 90) {
        c = String.fromCharCode(((aux1 - 65 + offset) % 26) + 65);
      } else if (aux1 >= 97 && aux1 <= 122) {
        c = String.fromCharCode(((aux1 - 97 + offset) % 26) + 97);
      }

      output+=c;
    }
    return output;
  },
  decrypt: function decrypt(txt,offset){
    let output ="";
    offset = parseInt(offset);
    let c = "";
    let aux1;
    for (let i = 0; i < txt.length; i++) {
      aux1 = txt.charCodeAt(i);

      if (aux1 >= 65 && aux1 <= 90) {
        c = String.fromCharCode(((aux1 - 65 - offset) % 26) + 65);
      } else if (aux1 >= 97 && aux1 <= 122) {
        c = String.fromCharCode(((aux1 - 97 - offset) % 26) + 97);
      }

      output+=c;
    }
    return output;
  }






};

export default cipher;
