const getTheTitles = function(data) {
    let arrayOfBooks = new Array();
    data.forEach(book => {
        arrayOfBooks.push(book.title);
    });
    return arrayOfBooks
}

module.exports = getTheTitles;
