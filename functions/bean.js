function countBs(word) {
    return countChar(word, "B");
}

function countChar(word, character) {
    let counter = 0;
    for(let i = 0; i < word.length; i++) {
        if (word[i] == character) counter++;
    }
    return counter;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));