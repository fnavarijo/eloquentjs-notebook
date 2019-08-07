function findSequence(number) {
    function find(actualNumber, history) { 
        if (number == actualNumber) {
            return history;
        } else if (actualNumber > number) {
            return null;
        } else {
            return find(actualNumber + 5, `(${history} + 5)`) || find(actualNumber * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSequence(13))