function isEven(number) {
    const validatedNumber = number < 0 ? -(number) : number;
    if (validatedNumber == 0) {
        return true
    } else if (validatedNumber == 1) {
        return false;
    } else {
        return isEven(validatedNumber - 2)
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));