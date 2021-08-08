console.log('============ Exercise ============');

// ============ Exercise - 1 ============
const numberRange = arrayFromRange(-10, -4);
console.log(numberRange);

function arrayFromRange(min, max) {
    let arr = [];
    for (let index = min; index <= max; index++) 
        arr.push(index);
    return arr;
}



// ============ Exercise - 2 ============
const number1 = [1, 2, 3, 4, 5];
console.log(Includes(number1, 2));
console.log(Includes(number1, 12));

function Includes(array, searchItem) {
    for (const iterator of array) {
        if (iterator === searchItem) return true;
    } return false;
    
}


// ============ Exercise - 3 ============
const number2 = [1, 2, 3, 4, 5];
const OutPut1 = except1(number2, [2, 4, 5]);
console.log(OutPut1);
const OutPut2 = except2(number2, [2, 4, 5]);
console.log(OutPut2);

// Process - 1
function except1(array1, array2) {
    let out = [] , f=0;
    for (const val1 of array1) {
        for (const val2 of array2) {
            if (val1 !== val2)
                f = 1;
            else {
                f = 0;
                break;
            }
        }
        if (f) out.push(val1);
        f = 0;
    }
    return out;
}

// Process - 2
function except2(array1, array2) {
    let out = [] , f=0;
    for (const val1 of array1) {
        if (!array2.includes(val1))
            out.push(val1);
    }
    return out;
}



// ============ Exercise - 4 ============
const number3 = [1, 2, 3, 4, 5];
const RESULT = move(number3, 2, -1);
console.log(RESULT);

function move(array, index, ofset) {
    let position = index + ofset;
    if (position >= Math.abs(array.length)) return "Error";
    else {
        let del = number3.splice(index, 1);
        number3.splice(position , 0, del[0]);
    }
    return array;
}




// ============ Exercise - 5 ============
const number4 = [1, 2, 3, 4, 3, 5, 1, 1];
const COUNT = countOccurances(number4, 3);
console.log(COUNT);

function countOccurances(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
        let occurance = (searchElement === currentValue) ? 1 : 0;
        return accumulator + occurance;
    },0);
}

// ============ Exercise - 5 ============
const number5 = [10, 62, 53, 54, 59];
const MAX = getMax(number5);
console.log(MAX);

function getMax(array) {
    if (!array.length) return "undefined";
    return array.reduce((accumulator, currentValue) => {
        if (accumulator < currentValue)
            accumulator = currentValue;
        return accumulator;
    });
}



// ============ Exercise - 6 ============
const movies = [
    { title: 'a', year: 2018, ratting: 4.7 },
    { title: 'b', year: 2018, ratting: 4.5 },
    { title: 'c', year: 2018, ratting: 3.7 },
    { title: 'd', year: 2017, ratting: 4.7 },
    { title: 'e', year: 2017, ratting: 2.7 },
];

// Process - 1
let Title = getTitle(movies);
console.log(Title.sort().reverse());

function getTitle(movies) {
    let Title = [];
    for (const movie of movies) {
        if (movie.year === 2018 && movie.ratting >= 4)
            Title.push(movie.title);
    }
    return Title;
}

// Process - 2
let titles = movies
    .filter(m => m.year === 2018 && m.ratting >= 4)
    .sort()
    .reverse()
    .map(m => m.title);

console.log(titles);
