const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    // Create a new array and copy the original cats into it
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    // Create a new array and copy the original cats into it
    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat() {
    // Create a new array and copy all cats except the last one into it
    const newCats = cats.slice(0, -1);
    return newCats;
}

function removeFirstCat() {
    // Create a new array and copy all cats except the first one into it
    const newCats = cats.slice(1);
    return newCats;
}