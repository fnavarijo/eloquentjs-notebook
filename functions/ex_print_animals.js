function printwZeroes(number) {
    const zeroLength = 3 - number.toString().length;
    return "0".repeat(zeroLength) + number;
}

function printAnimals(cows, chickens) {
    console.log(`${printwZeroes(cows)} Cows`)
    console.log(`${printwZeroes(chickens)} Chickens`)
}

printAnimals(7, 11);