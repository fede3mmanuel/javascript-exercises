const repeatString = function(word, times) {

    if (times >= 0) {
        return word.repeat(times);
    } else {
        return "ERROR";
    }
}

module.exports = repeatString
