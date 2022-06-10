// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){      //destructively appends a cat
    cats.push(name);
}

function destructivelyPrependCat(name){ //destructively prepends a cat
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){ //destructively removes the last cat
cats.pop();
}

function destructivelyRemoveFirstCat(){ //destructively removes the first cat
    cats.shift();
}

function appendCat(name){    //uses the spread operator to append a cat
    return [...cats, name];
}

function prependCat(name){ //uses the spread operator to prepend a cat
    return [name, ...cats];
}

function removeLastCat(){   // uses slice to non-destructively remove last cat
  return cats.slice(0, -1);
}

function removeFirstCat(){ //uses slice to non-destructively remove first cat
    return cats.slice(1);
}



