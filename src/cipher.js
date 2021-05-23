const cipher = {
  encode: function encode(txt, offset) {

    offset = parseInt(offset);
    if (offset<0){
      offset = 26+(offset%26);
    }
    let output = "";
    let c = "";
    let aux1;
    for (let i = 0; i < txt.length; i++) {
      aux1 = txt.charCodeAt(i);

      if (aux1 >= 65 && aux1 <= 90) {
        c = String.fromCharCode(((aux1 - 65 + offset) % 26) + 65);
      } else if (aux1 >= 97 && aux1 <= 122) {
        c = String.fromCharCode(((aux1 - 97 + offset) % 26) + 97);
      }

      output += c;
    }
    return output;
  },
  decode: function decode(txt, offset) {
    offset = parseInt(offset);
    if (offset<0){
      offset = 26+(offset%26);
    }
    let output = "";
    let c = "";
    let aux1;
    for (let i = 0; i < txt.length; i++) {
      aux1 = txt.charCodeAt(i);

      if (aux1 >= 65 && aux1 <= 90) {
        c = String.fromCharCode(((aux1 - 65 - offset) % 26) + 65);
      } else if (aux1 >= 97 && aux1 <= 122) {
        c = String.fromCharCode(((aux1 - 97 - offset) % 26) + 97);
      }

    }
    return output;
  }






};

export default cipher;
