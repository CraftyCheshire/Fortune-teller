// We want to make a fortune telling machine
// takes your name as input
// and outputs your fortune

// Name is longer than 7 characters: "will marry late in life"
// Name is shorter than 5 characters: "will marry within a year."
// name is between 5 and 7 characters (inclusive): "will encounter a once-in-a-lifetime opurtunity"
// first letter is 'R': "will be rich"
// Name contains an 'i': "will fall in love this week"

let myName;
myName = "Savannah";

let lengthOfName = myName.length;

if (lengthOfName < 5) {
    console.log("You will marry within this year!");
}

if (lengthOfName > 7) {
    console.log("You will marry late in life");
}

if (lengthOfName === 5 || lengthOfName === 6 || lengthOfName === 7) {
    console.log("You will encounter a one-in-a-lifetime opportunity!");
}


let iVariable = myName.includesi

if (iVariable) {
    console.log("You will fall in love this week")
}

let firstCharacter = myName[0];
console.log("The first letter is " + firstCharacter)

if (firstCharacter === 'R') {
    console.log("You will live to be old!")
}

if (firstCharacter === 'S') {
    console.log("You will be rich!")
}