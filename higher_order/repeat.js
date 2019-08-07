function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

// const labels = [];

// repeat(3, i => {
//     labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);

function noisy(f) {
    return (...args) => {
        console.log('Calling with arguments');
        let result = f(...args);
        console.log(result);
        return result;
    }
}

noisy(Math.min)(3, 2, 1);
