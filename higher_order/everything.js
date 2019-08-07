// function every(array, test) {
//     let passTest = true;
//     for (let val of array) {
//         if (!test(val)) {
//             passTest = false;
//             break;
//         }
//     }
//     return passTest;
// }

function every(array, test) {
    return !array.some(n => !test(n));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true