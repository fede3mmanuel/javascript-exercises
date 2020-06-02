const caesar = function(sentence, number) {

    let result = [];

    let alphabetCapitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let alphabetLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    function eachLetterEncrypted(letter, numberOfCode) {        

        for (let i = 0; i <= alphabetCapitalLetter.length - 1; i++) {            

            if (letter == alphabetCapitalLetter[i]) {                              

                while (i + numberOfCode >= alphabetCapitalLetter.length){
                    i = i - alphabetCapitalLetter.length;                    
                }
                
                while (i + numberOfCode < 0) {
                    i = i + alphabetCapitalLetter.length;
                }
                
                return alphabetCapitalLetter[i + numberOfCode];

            } else if (letter == alphabetLowerCase[i]) {
                
                while (i + numberOfCode >= alphabetLowerCase.length){
                    i = i - alphabetLowerCase.length;
                }
                
                while (i + numberOfCode < 0) {
                    i = i + alphabetLowerCase.length;
                }
                
                return alphabetLowerCase[i + numberOfCode];
                
            }
            
        }
        return letter;
        
    }

    function wordEncryptedInArray(completeSentence, numberforCode) {
        wordInArray = []

        for (let i = 0; i <= completeSentence.length - 1; i++) {
            
            wordInArray.push(eachLetterEncrypted(completeSentence[i], numberforCode));
            
        }
        return wordInArray;
    }

    return wordEncryptedInArray(sentence, number).join("");
    
    
}

module.exports = caesar
