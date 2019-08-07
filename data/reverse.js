function reverseArray(array) {
    const returningArray = [];
    for (let value of array)
        returningArray.unshift(value);
    return returningArray;
}

function reverseArrayInPlace(array) {
    let auxArray = [];  
    
    for (let i = 0; i < (array.length / 2); i++) {
        const auxValue = array[(array.length - 1) - i];
        array[(array.length - 1) - i] = array[i];
        array[i] = auxValue;
    }
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue)