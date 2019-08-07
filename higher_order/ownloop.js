function loop(value, testF, updateF, bodyF) {
    let n = value;
    if (testF(n)) {
        bodyF(n);
        n = updateF(n);
        loop(n, testF, updateF, bodyF);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);