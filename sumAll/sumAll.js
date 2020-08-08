const sumAll = function(firstNum, secondNum) {

    if (firstNum < 1 || secondNum < 1) {
        
        return "ERROR";
    
    }

    if (typeof(firstNum) != 'number' || typeof(secondNum) != 'number') {
        
        return "ERROR";
    
    }

    let startNum = 0;
    let endNum = 0;

    if (firstNum < secondNum) {
    
        startNum = firstNum;
        endNum = secondNum;
    
    } else {
    
        startNum = secondNum;
        endNum = firstNum;
    
    }

    let result = 0;
    
    for (let i = startNum; i <= endNum; i++) {
        
        result += i;
    
    }

    return result;

}

module.exports = sumAll
