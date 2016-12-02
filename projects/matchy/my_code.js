let animal = {};
animal.species = "Dog";
animal["name"] = "Pooper",
animal.noises = [];

console.log(animal);


var noises = [];
noises[0] = "Wan wan wan";
noises.push("Woof woof");
noises.unshift("Wao wao");
noises[noises.length] = "Arf arf";

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

animal["noises"] = noises;
animal["noises"].push("Ruff ruff");

console.log(animal);


var animals = [];

animals.push(animal);
console.log(animals);

var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};

animals.push(duck);
console.log(animals);

var cat = { 
    species: 'cat', 
    name: 'Puppy', 
    noises: ['miao', 'mew', 'meow'] 
};

var otter = { 
    species: 'otter', 
    name: 'Connor', 
    noises: ['kwa', 'cococo'] 
};

animals.push(cat, otter);

console.log(animals);
console.log(animal.length);

let friends = []; 
// I'm making the friends variable an array because it is easier to access different values. The "friends" do not need to be key value pairs, but they CAN still be objects nested inside the array.

function randomNum() {
    return Math.floor(Math.random() * animals.length);
}

friends.push(animals[randomNum()].name);

console.log(friends);

animal.friends = friends;

console.log(animal);

function search(name) {
    for(var i = 0; i < animals.length; i++) {
        if(animals[i].name === name) {
            return animals[i];
        } 
    }
    return null;
}

// 
// name = animals => animal.name - array position
// object = something new
// 

function edit(name, object) {
    for(var i = 0; i < animals.length; i++) {
        if(animals[i].name === name) {
            // animals[i] = object
            animals.splice(i, 1, object);
            // animals.push(object);
        } 
    }
}

function remove(name) {
    for(var i = 0; i < animals.length; i++) {
        if(animals[i].name === name) {
            animals.splice(i, 1);
        } 
    }
}

function create(object) {
    console.log(object.hasOwnProperty("name").length);
    console.log(object["species"].length);
    if(object["name"].length > 0 && object["species"].length > 0) {
            for(var i = 0; i < animals.length; i++) {
                if(animals[i].name === object["name"]) {
                    return null;
            }
        }
        animals.push(object);
    }
}