class CollectionManager {
    constructor() {
        this.map = new Map();
        this.set = new Set();
    }

    addToMap(key, value) {
        this.map.set(key, value);
    }

    removeFromMap(key) {
        if (this.map.has(key)) {
            this.map.delete(key);
        } else {
            console.log(`Key '${key}' not found in Map.`);
        }
    }

    addToSet(item) {
        this.set.add(item);
    }

    clearSet() {
        this.set.clear();
    }

    showMap() {
        console.log('Map contents:');
        this.map.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
    }

    showSet() {
        console.log('Set contents:');
        this.set.forEach(item => {
            console.log(item);
        });
    }
}

const manager = new CollectionManager();

manager.addToMap('city', 'Kutaisi');
manager.addToMap('country', 'Georgia');
manager.showMap();

manager.removeFromMap('city');
manager.showMap();

manager.addToSet(5);
manager.addToSet(10);
manager.showSet();

manager.clearSet();
manager.showSet();