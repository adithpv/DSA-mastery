// Search element

const arr = [4, 2, 0, 10, 8, 30, 10];
const negativeArr = [2, -9, 17, 0, 1, -10, -4, 8];
const largestArr = [5, 0, 10, 8, 17, 1];

function searchEl(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            return i;
        }
    }

    return -1; // Element not found
}

console.log(searchEl(arr, 10));

function searchElLastIndex(arr, el) {
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            index = i;
        }
    }

    return index;
}

console.log("Search last index", searchElLastIndex([-3, 2, -3], -3));

function countNegatives(arr) {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter++;
        }
    }

    return counter;
}

console.log("Count negative numbers:", countNegatives(negativeArr));

function findLargest(arrL) {
    let largest = -Infinity;

    for (let i = 0; i < arrL.length; i++) {
        if (arrL[i] > largest) {
            largest = arrL[i];
        }
    }

    return largest;
}

console.log("Find largest:", findLargest(largestArr));

function findSecondLargest(arrSL) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arrSL.length; i++) {
        if (arrSL[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arrSL[i];
        } else if (arrSL[i] > secondLargest) {
            secondLargest = arrSL[i];
        }
    }

    return secondLargest;
}

console.log("Find second largest", findSecondLargest(largestArr));
