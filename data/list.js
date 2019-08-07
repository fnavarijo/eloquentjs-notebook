function arrayToList(array) {
    if (array.length > 0) {
        const value = array.shift();
        return { value, rest: arrayToList(array) };
    } else {
        return null;
    }
}

function listToArray(list) {
    if (list) {
        return [list.value, ...listToArray(list.rest)];
    } else {
        return [];
    }
}

function prepend(value, list) {
    return { value, rest: list };
}

function nth(list, position) {
    if (position == 0) {
        return list.value;
    } else {
        return nth(list.rest, position - 1)
    }
}

// function nth(list, position) {
//     for(let node = list; node; node = node.rest) {
//         console.log(node.value);
//     }
// }

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
