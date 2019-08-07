function deepEqual(obj1, obj2) {
    let isEqual = true;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length == 0 || keys2.length == 0) isEqual = false;
    if (Object.keys(obj1).length !== Object.keys(obj2).length) isEqual = false;

    for (let key of keys1) {
        if (obj1[key] && obj2[key] && typeof obj1[key] == 'object' && typeof obj2[key] == 'object') isEqual = deepEqual(obj1[key], obj2[key]);
        else {
            if (obj1[key] !== obj2[key]) {
                isEqual = false;
                break;
            }
        }
    }
    return isEqual;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
