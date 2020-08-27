class Group {
    constructor(values) {
        this.items = values || [];
    }

    static from(values) {
        return new Group(values);
    }

    has(item) {
        const hasValue = this.items.some(value => value === item);
        return hasValue;
    }

    add(item) {
        const hasValue = this.has(item);
        !hasValue ? this.items.push : null;
    }

    delete(item) {
        const items = this.items;
        const itemIdx = items.indexOf(item);
        this.items = items.slice(0, itemIdx).concat(items.slice(itemIdx + 1));
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.items = group.items;
        this.index = 0;
    }

    next() {
        if (this.index > this.items.length - 1) return { done: true };

        const value = { value: this.items[this.index], done: false };
        this.index++;

        return value;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}