// let protoAnimal = {
//     speak(sound) {
//         console.log(`I'm a ${this.animal} and make a sound like: ${sound}`);
//     }
// }

// const tiger = Object.create(protoAnimal);
// tiger.animal = 'Tigger';
// tiger.speak('Rawr!');

// Using new

// function Rabbit(animal) {
//     this.animal = animal;
// }

// Rabbit.prototype.speak = function(sound) {
//     console.log(`I'm a ${this.animal} and make a sound like: ${sound}`);
// };

// const angryRabbit = new Rabbit('Angry');
// angryRabbit.speak('Hijaa');

// const myMap = new Map();
// myMap.set('Fernando', 23);
// myMap.set('Rene', 26);
// myMap.set('Erick', 24);

// console.log(myMap.get('Fernando'));
// console.log(myMap.has('toString'));

// ITERABLES

// class Matrix {
//     constructor(width, height, element = (x,y) => undefined) {
//         this.width = width;
//         this.height = height;
//         this.content = [];

//         for(let y = 0; y < height; y++) {
//             for(let x = 0; x < width; x++) {
//                 this.content[y * width + x] = element(x, y);
//             }
//         }
//     }

//     get(x, y) {
//         return this.content[y * this.width + x];
//     }

//     set(x, y, value) {
//         this.content[y * this.width + x] = value;
//     }
// }

// class MatrixIterator {
//     constructor(matrix) {
//         this.x = 0;
//         this.y = 0;
//         this.matrix = matrix;
//     }

//     next() {
//         if (this.y == this.matrix.height) return { done: true };

//         let value = {
//             x: this.x,
//             y: this.y,
//             value: this.matrix.get(this.x, this.y)
//         };

//         this.x++;
//         if(this.x > this.matrix.width) {
//             this.x = 0;
//             this.y++;
//         }
//         return { value, done: false }
//     }
// }

// Matrix.prototype[Symbol.iterator] = function() {
//     return new MatrixIterator(this);
// }

// let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
// for(let {x, y, value} of matrix) {
//     console.log(x, y, value);
// }

// SETTER AND GETTER
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value-32)/1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celsius);

const morph = Temperature.fromFahrenheit(100);
console.log(morph.fahrenheit);