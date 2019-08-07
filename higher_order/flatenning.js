let arrays = [[1, 2, 3], [4, 5], [6]];

const newArray = arrays.reduce((finalArray, array) => finalArray.concat(array), []);

console.log(newArray);