const cipher = {
    crypto:function crypto(txt, offset){

    const output = "";

    let c;

    for (i = 0; i < txt.length(); i++) {
      let aux1 = txt.charCodeAt(i);
      
      if (aux1 >= 65 && aux1 <= 90) {
        c = String.fromCharCode(((aux1 - 65 + offset) % 26) + 65);
      } else if (aux1 >= 97 && aux1 <= 122) {
        c = String.fromCharCode(((aux1 - 97 + offset) % 26) + 97);
      }
      output += c;
    }
    return output;
    
  }






};

export default cipher;
