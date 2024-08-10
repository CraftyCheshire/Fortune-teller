// Day 2
// Create a file called index-2.js
// Use the requirements for Day-1, but use functions instead.
// Create functions called:
    // willMarryLate
    // willMarryEarly
    // onceInALifeTime
    // willBeRich
    // willFallInLove
// Note: These function will take the name (a string) as an ARGUMENT, and return a boolean
// Create a function called tellFortune
// This function will take the name (a string) as an argument, and return a fortune (a string)
// This function will use the 5 functions above
// Execute your tellFortune function with a few names of friend/family who would like a fortune.


// Name is longer than 7 characters: "will marry late in life"
// Name is shorter than 5 characters: "will marry within a year."
// name is between 5 and 7 characters (inclusive): "will encounter a once-in-a-lifetime opurtunity"
// first letter is 'R': "will be rich"
// Name contains an 'i': "will fall in love this week"


function marryLate(firstName) {
    let nameLength = firstName.length;
    if(nameLength > 7){
        return true;
    } else {
        return false;
    }
}

function marryWithinYear(firstName) {
    let nameLength = firstName.length;
    if(nameLength < 5) {
        return true
    } else {
        return false
    }
}

function lifetime(firstName) {
    let nameLength = firstName.length;
    if(nameLength === 5 || nameLength === 6 || nameLength === 7) {
        return true
    } else {
        return false
    }
}

function firstChar(firstName) {
    let r = firstName.startsWith("R");
    if(r) {
        return true
    } else {
        return false
    }
}

function nameContainsI(firstName) {
    let y = firstName.includes("i")
    if(y) {
        return true;
    } else {
        return false;
    }
}

function tellFortune(firstName) {
    let ml = marryLate(firstName);
    let y = marryWithinYear(firstName);
    let lo = lifetime(firstName);
    let i = nameContainsI(firstName);
    let r = firstChar(firstName);

    if(ml) {
        console.log(`${firstName}, you will marry late in life.`);
    } else {
        console.log(`${firstName}, you have already met your soulmate`);
    }
    
    if(y) {
        console.log(`${firstName}, you will marry within this year!`);
    } else {
        console.log(`${firstName}, your marriage is further out than a year.`);
    }

    if(lo) {
        console.log(`${firstName}, you will encounter a once-in-a-lifetime opportunity!`);
    }

    if(i) {
        console.log(`${firstName}, you will fall in love this week!`);
    } else {
        console.log(`${firstName}, you will never find love. HAHA!`);
    }

    if(r) {
        console.log(`${firstName}, you will die extremely wealthy!`);
    }
}

let firstName = "Dot";
let input1 = "Roxanne";
let input2 = "Oleivr";
let input3 = "Jose";
let input4 = "Marc";
let input5 = "Savannah";
tellFortune(firstName);
tellFortune(input1);
tellFortune(input2);
tellFortune(input3);
tellFortune(input4);
tellFortune(input5);