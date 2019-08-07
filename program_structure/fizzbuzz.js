for(let i = 0; i <= 100; i++) {
    let displayValue = `${i % 3 == 0 ? 'Fizz' : ''}${i % 5 == 0 ? 'Buzz' : ''}`;
    console.log(`${displayValue == '' ? i : displayValue}`)
}