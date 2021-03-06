// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

const people = ["Cadence", "Ordel", "Marion"]

function remove(arrayNames, name) {
    if (arrayNames.indexOf(name) === -1) {
        return arrayNames
    } else {
        while (arrayNames.indexOf(name) !== -1) {
            let idx = arrayNames.indexOf(name)
            arrayNames.splice(idx, 1)
        }
    } return arrayNames
}

// Also works:

// function remove(arrayNames, name) {
//     while (arrayNames.includes(name)) {
//         let idx = arrayNames.indexOf(name);
//         arrayNames.splice(idx, 1);
//     }
//     return arrayNames
// }

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// arr = [1, 2, 3]
// newArr = arr.slice()
// newArr.pop()  should return [1, 2]
// arr will still return [1, 2, 3]

function remove(arrayNames, name) {
    let arrayCopy = arrayNames.slice()
    if (arrayNames.indexOf(name) === -1) {
        return arrayNames
    } else {
        while (arrayCopy.indexOf(name) !== -1) {
            let idx = arrayCopy.indexOf(name)
            arrayCopy.splice(idx, 1)
        }
    } return arrayCopy
}

// Also works:

// function remove(arrayNames, name) {
//     let result = [];
//     for (let item of arrayNames) {
//         if (item != name) {
//             result.push(item);
//         }
//     }
//     return result;
// }

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

let numbers = [36, 69, 420, 14]
function sum(numbers) {
    return numbers.reduce(function(a,b) {
        return a + b
    }, 0)
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(numbers) {
   if (numbers.length > 0)
     return numbers.reduce(function(a,b) {
        return a + b / numbers.length
    }, 0)
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(numbers) {
    if (numbers.length > 0)  {
        return Math.min(...numbers)
    }
}

// Also works:

// function minimum(numbers) {
//     let smallestNumber = numbers[0];
//     for (let number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number 
//         }
//     }
//     return smallestNumber;
// }

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function swap(numbers, i, j) {
    var temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
}

function selectionSort(numbers) {
    for(var i = 0; i < numbers.length; i++) {
        var min = i;
        for(var j = i + 1; j < numbers.length; j++) {
            if(numbers[j] < numbers[min]) {
                min = j;
            }
        }
        if(i !== min) {
            swap(numbers, i, min);
        }
    }
    return numbers;
}
// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList(people) {
   var newArray = [];
   if(people.filter(people => typeof people === 'string' && people.length > 0)) {
       people.concat(newArray);
   } return people
}