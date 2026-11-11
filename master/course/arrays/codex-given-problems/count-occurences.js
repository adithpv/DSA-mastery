function countOccurences(arr, target) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count = count + 1;
        }
    }

    return count;
}

console.log(countOccurences([4, 4], 4));
