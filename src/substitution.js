// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (validityCheck(alphabet)) return false;

    input = input.toLowerCase();
    let output = "";
    const trueAlphabet = "abcdefghijklmnopqrstuvwxyz";

    if (encode == true) {
      for (let i = 0; i < input.length; i++) {
        output += replacer(input.substr(i, 1), trueAlphabet, alphabet);
      }
    }

    if (encode == false) {
      for (let i = 0; i < input.length; i++) {
        output += replacer(input.substr(i, 1), alphabet, trueAlphabet);
      }
    }
    return output;
  }

  function replacer(input, value, key) {
    if (input == " ") return input;
    let index = value.indexOf(`${input}`);
    let output = key.substr(index, 1);

    console.log(`Found ${input} at ${index}, converting to ${output}`);
    return output;
  }

  function validityCheck(alphabet) {
    // RegEx here is used to check for Duplicate Characters in the Alphabet
    // returns true the moment it finds a Dup
    // (.) matches any character and stores it, . check any other character, .* matches any characters, \1 rechecks group 1
    if (alphabet == null || alphabet.length != 26 || /(.).*\1/.test(alphabet)) return true;
    /*
    let test = alphabet.split("");
    if (test.some(function (currentIteration, currentIndex, currentPosition) {
        return currentPosition.lastIndexOf(currentIteration) != currentIndex;
    })) return true;
    */
  
 
}

  return {
    substitution,
  };
})();


module.exports = substitutionModule.substitution;
