const fibonacci = function( position ) {

    let fibonacci_list = new Array();
    fibonacci_list.push(1);
    fibonacci_list.push(1);
    
    function addNumbers(position, actualPosition) {

        if (position == actualPosition) {

            return fibonacci_list[fibonacci_list.length - 1] + fibonacci_list[fibonacci_list.length - 2];

        } else {

            fibonacci_list.push(fibonacci_list[fibonacci_list.length - 1] + fibonacci_list[fibonacci_list.length - 2]);
            
            return addNumbers(position, actualPosition + 1);
            
        }
      
    }
    
    if (!isNaN(position) && (typeof position) == "string") {
        position = parseInt(position);
        
    }
    if (position <= 0) {
        return "OOPS";
    }

    if (Number.isInteger(position)) {
        if (position == 1) {

            return 1;
    
        } else if (position == 2) {
    
            return 1;
    
        } else {
    
            let actualPosition = 3;
            return addNumbers(position, actualPosition);
    
        }
    }
    

}

module.exports = fibonacci
