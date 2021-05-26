const cipher = {
  encode: function encode(offset, txt) {
    offset = parseInt(offset);
    if (typeof offset!== "number"){
      throw new TypeError ("Error: offset not a number");
    }
    if (typeof txt !== "string"){
      throw new TypeError("Error: text not a string");
    }

    let output = "";
    let changeChar = "";
    let char = "";
    
    for (let i = 0; i < txt.length; i++) {
      char = txt.charCodeAt(i);

      if (char >= 65 && char <= 90) {
        changeChar = String.fromCharCode(((char - 65 + offset) % 26) + 65);
      } else if (char >= 97 && char <= 122) {
        changeChar = String.fromCharCode(((char - 97 + offset) % 26) + 97);
      } else if (char == 32) {
        changeChar = " ";
      }else{
        changeChar = String.fromCharCode(char);
      }

      output += changeChar;
    }

    return output;
  },
  decode: function decode(offset, txt) {
    offset = parseInt(offset);

    if (typeof offset!== "number"){
      throw new TypeError ("Error: offset not a number");
    }
    if (typeof txt!=="string"){
      throw new TypeError("Error: text not a string");
    }

    const shift = ((26-offset)%26);
    
    let output = "";
    let changeChar = "";
    let char = "";

    for (let i = 0; i < txt.length; i++) {
      char = txt.charCodeAt(i);
    
      if (char >= 65 && char <= 90) {
        
        changeChar = String.fromCharCode(((char - 65 + shift+26) %26) + 65);


      } else if (char >= 97 && char <= 122) {
        changeChar = String.fromCharCode(((char - 97 + shift+26) % 26) + 97);
      } else if (char == 32) {
        changeChar = " ";
      }else{
        changeChar = String.fromCharCode(char);
      }

      output += changeChar;
    }

    return output;
  }
};

export default cipher;
