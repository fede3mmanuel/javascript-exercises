let findTheOldest = function(data) {

    let name = "";
    let age = 0;
    let positonOnArray = -1;
    let AnswerPosition = 0;

    data.forEach(person => {
        positonOnArray += 1;

        if(person.yearOfDeath == undefined) {
            let actualDate = new Date();
            let actualYear = actualDate.getFullYear();
            person.yearOfDeath = actualYear;
                        
        }

        let newAge = person.yearOfDeath - person.yearOfBirth;        

        if (newAge > age) {
            name = person.name;
            age = newAge;
            AnswerPosition = positonOnArray;
        }
        
    });
    
    return data[AnswerPosition];
    
}

module.exports = findTheOldest
