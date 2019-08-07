function range(init, end, step = 1) {
    let builtArray = [];
    if (step < 0) {
        for(let i = init; i >= end; i += step)
            builtArray.push(i);
    } else {
        for(let i = init; i <= end; i += step)
            builtArray.push(i);
    }
    return builtArray;
}

function sum(numbers) {
    let total = 0;
    for (let number of numbers)
        total += number;
    return total;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
