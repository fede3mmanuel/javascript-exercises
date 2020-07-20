const removeFromArray = function(completeArray, ...args) {

    let finalArray = completeArray;
    
    for (let x = 0; x < args.length; x++) {

        for (let i = 0; i < completeArray.length; i++) {

            if (!isNaN(args[x]) && (typeof(args[x]) != "number")) {

            } else {

                if (completeArray[i] == args[x]) {

                    finalArray.splice(i, 1);

                }
            }

            
            
        }
        
    }

    return finalArray;
}

module.exports = removeFromArray
