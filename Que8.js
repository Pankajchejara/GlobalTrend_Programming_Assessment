// Simple HashMap Class
class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        delete this.map[key];
    }
}

const hashMap = new HashMap();
hashMap.put('name', 'Pankaj');
hashMap.put('age', 22);

console.log(hashMap.get('age'));//22
console.log(hashMap.get('name')); // Pankaj

hashMap.remove('name');
console.log(hashMap.get('name')); // undefined
