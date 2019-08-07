
function hashString(length) {
    let wholeString = '#';
    while(wholeString.length < length) {
        wholeString += '#'
    }
    return wholeString;
}

for(let i = 1; i <= 7; i++)
    console.log(hashString(i));