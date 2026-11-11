// Question:
// Count the number of digits in a given number.

// Meaning:
// If a number is given, find how many digits are present in that number.

// Example 1:
// Input: 12345
// Output: 5
// Explanation: 12345 has 5 digits -> 1, 2, 3, 4, 5

// Example 2:
// Input: 987
// Output: 3
// Explanation: 987 has 3 digits -> 9, 8, 7

// Example 3:
// Input: 7
// Output: 1
// Explanation: 7 has only 1 digit

function countDigit(n) {
    if (n === 0) return 1;
    // count will store how many digits are in the number
    let count = 0;

    // Math.abs removes the negative sign if the number is negative
    // example: -259 becomes 259
    // because we only want to count digits, not the sign
    n = Math.abs(n);

    // keep running the loop until the number becomes 0
    // every loop removes one digit from the right side
    while (n > 0) {
        // divide by 10 and remove decimal using Math.floor
        // example:
        // 259 / 10 = 25.9 -> Math.floor gives 25
        // 25 / 10 = 2.5 -> Math.floor gives 2
        // 2 / 10 = 0.2 -> Math.floor gives 0
        n = Math.floor(n / 10);

        // increase count because one digit was removed
        count++;
    }

    // return total number of digits counted
    return count;
}

console.log(countDigit((259)))
