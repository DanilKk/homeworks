// task 1
function union(str1, str2) {
    return str1 + str2;
}

console.log(union("func", "tion"));


// task 2
const stringArray = ["this", " ", "text", " ", "should", " ", "be", " ", "united"]

function arrayToString(arr) {
    let stringToRead = "";
    arr.forEach(stringFromArray => {
        stringToRead = stringToRead + stringFromArray;
    });
    return stringToRead;
}

console.log(arrayToString(stringArray));


//task 3
const stringToReverse = "avocado";

function reverse(str) {
    const arrayFromString = str.split("");
    const arrayReverse = arrayFromString.reverse();
    const newString = arrayReverse.join("");
    return newString;
}

console.log(reverse(stringToReverse));


// task 4

function firstLetterUp(wordLowerLetter){
    const firstLetterOfWord = wordLowerLetter.charAt(0);
    const wordWithoutFirstLetter = wordLowerLetter.substring(1);
    const firstLetterUp = firstLetterOfWord.toUpperCase();
    return firstLetterUp + wordWithoutFirstLetter;
}

console.log(firstLetterUp("butterfly"));


// task 5

function randInRange(min, max) {
    return randNumb = Math.random() * (max - min) + min; 
}
console.log(randInRange(5,12));


// task 6

const arrayOfNumbers = [7, 6, 2, 3, 4]
function additionOFNumbers(arr) {
    var counter = 0;
    arr.forEach(numbFromArray => {
        counter = counter + numbFromArray;
    });
    return counter;
}

console.log(additionOFNumbers(arrayOfNumbers));


// task 7

const arrayOfNumbers2 = [17, 16, 12, 13, 14]
function avgOFNumbers(arr) {
    var counter = 0;
    arr.forEach(numbFromArray => {
        counter = counter + numbFromArray;
    });
    return counter/arr.length;
}

console.log(avgOFNumbers(arrayOfNumbers2));