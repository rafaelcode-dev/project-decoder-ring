// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function decoder(word,shift) {
    const alphabet = ['a','b','c','d','e','f','g',
    'h','i','j','k','l',
    'm','n','o','p','q','r','s','t',
    'u','v','w','x','y','z']
    const wordArray = word.toLowerCase().split('')
    const newArray = [];
    for (let item of wordArray) {
      for (let i = 0; i < alphabet.length; i++) {
        let decryptChar = i - shift
        if(item === alphabet[i]) {
          newArray.push(alphabet[decryptChar])
        }
      }
    }
    return newArray.join('')
  }

  function encoder(input, shift) {
    const anArray = [];
    const wordArray = input.toLowerCase(). split('')
    for (let item of wordArray) {
      for (let i = 0; i < alphabet.length; i++) {
        if (item === alphabet[i]) {
          let newChar = i + shift
          anArray.push(alphabet[newChar])
        }
      }
    } 
    return anArray.join('')
  }

  function caesar(input, shift, encode = true) {
    if(!shift || shift === 0 || shift > 25 || shift < -25) {
      return false
    }
    if(encode === false) shift = -shift;
    let result = "";
    let inputLowerCase = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
      let codeNum = inputLowerCase.charCodeAt(i);
      if(codeNum >= 97 && codeNum <= 122) {
        codeNum += shift;
        codeNum < 97 ? codeNum += 26 : null;
        codeNum > 122 ? codeNum -= 26 : null;     
      }
      result += String.fromCharCode(codeNum); 
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
