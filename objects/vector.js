class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus (vec){
        const { x, y } = this;
        return new Vec(x + vec.x, y + vec.y);
    }

    minus (vec){
        const { x, y } = this;
        return new Vec(x - vec.x, y - vec.y);
    }

    get length() {
        return Math.sqrt(Math.pow(0 - this.x, 2) + Math.pow(0 - this.y, 2));
    }
    
}


// function Vec(x, y) {
//     this.x = x;
//     this.y = y;
// }

// Vec.prototype.plus = function (vec){
//     const { x, y } = this;
//     return new Vec(x + vec.x, y + vec.y);
// };

// Vec.prototype.minus = function (vec){
//     const { x, y } = this;
//     return new Vec(x - vec.x, y - vec.y);
// }


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
