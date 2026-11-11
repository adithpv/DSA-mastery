// Question:
// Check whether a given number is a palindrome number.

// Meaning:
// A palindrome number is a number that reads the same from left to right
// and right to left.

// Example 1:
// Input: 121
// Output: true
// Explanation: 121 reversed is still 121, so it is a palindrome.

// Example 2:
// Input: 123
// Output: false
// Explanation: 123 reversed becomes 321, so it is not a palindrome.

// Example 3:
// Input: 7
// Output: true
// Explanation: A single digit number is always a palindrome.

// Example 4:
// Input: 1221
// Output: true
// Explanation: 1221 reversed is still 1221.

function isPalindromeNumber(number) {
    if (number < 0) return false;

    // reversedNumber will store the reversed number
    // example: if number is 121, reversedNumber will become 121
    let reversedNumber = 0;

    // store original number in originalNumber
    // because number will change inside the while loop
    // later we compare reversedNumber with originalNumber
    let originalNumber = number;

    // keep running the loop until number becomes 0
    // each loop takes one digit from the right side of number
    while (number > 0) {
        // get the last digit of number
        // example: 121 % 10 gives 1
        // example: 12 % 10 gives 2
        let lastDigit = number % 10;

        // add the last digit to reversedNumber
        // reversedNumber * 10 shifts the old digits left
        // then + lastDigit adds the new digit at the end
        // example:
        // reversedNumber = 0, lastDigit = 1 -> reversedNumber = 0 * 10 + 1 = 1
        // reversedNumber = 1, lastDigit = 2 -> reversedNumber = 1 * 10 + 2 = 12
        // reversedNumber = 12, lastDigit = 1 -> reversedNumber = 12 * 10 + 1 = 121
        reversedNumber = (10 * reversedNumber) + lastDigit;

        // remove the last digit from number
        // example: 121 / 10 = 12.1 -> Math.floor gives 12
        // example: 12 / 10 = 1.2 -> Math.floor gives 1
        // example: 1 / 10 = 0.1 -> Math.floor gives 0
        number = Math.floor(number / 10);
    }

    // if reversed number is same as original number,
    // then it is a palindrome
    if (reversedNumber === originalNumber) {
        return true;
    } else {
        return false;
    }
}

console.log((isPalindromeNumber(121)))
