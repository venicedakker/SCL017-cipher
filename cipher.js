const cipher = {
  encode: function encode(offset,txt) {

    offset = parseInt(offset);
    if (offset<0){
      offset = 26+(offset%26);
    }

    let output = "";
    let cChar = "";
    let char;
    
    for (let i = 0; i < txt.length; i++) {
      char = txt.charCodeAt(i);

      if (char >= 65 && char <= 90) {
        cChar = String.fromCharCode(((char - 65 + offset) % 26) + 65);
      } else if (char >= 97 && char <= 122) {
        cChar = String.fromCharCode(((char - 97 + offset) % 26) + 97);
     }else if (char == 32){
       cChar = " ";
     }

      output += cChar;
    }
    
    return output;
  },
  decode: function decode(offset,txt) {
    offset = parseInt(offset);
    if (offset<0){
      offset = 26+(offset%26);
    }
    let output = "";
    let cChar = "";
    let char;
    for (let i = 0; i < txt.length; i++) {
      char = txt.charCodeAt(i);

      if (char >= 65 && char <= 90) {
        cChar = String.fromCharCode(((char - 65 - offset) % 26) + 65);
      } else if (char >= 97 && char <= 122) {
        cChar = String.fromCharCode(((char - 97 - offset) % 26) + 97);
      }else if (char == 32){
        cChar = " ";
      }
      output += cChar;
    }
    return output;
  }
};

export default cipher;
