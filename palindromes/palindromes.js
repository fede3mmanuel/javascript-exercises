const palindromes = function(word) {

    let result = true;

    let regexFormWord = /[a-z]/gi;
    let onlyLetters = word.match(regexFormWord);


    for (let i = 0; i < onlyLetters.length; i++) {
        
        let left = (onlyLetters[i]);
        let right = (onlyLetters[(onlyLetters.length - i) - 1]);
        
        if (left.toUpperCase() != right.toUpperCase()) {
            return false;
        }

    }

    return result;
}

module.exports = palindromes
