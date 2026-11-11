// Question:
// Reverse a given number.

// Meaning:
// If a number is given, reverse its digits and return the reversed number.

// Example 1:
// Input: 12345
// Output: 54321
// Explanation: The digits of 12345 in reverse order are 5, 4, 3, 2, 1.

// Example 2:
// Input: 987
// Output: 789
// Explanation: The digits of 987 in reverse order are 7, 8, 9.

// Example 3:
// Input: 1200
// Output: 21
// Explanation: Reversing 1200 gives 0021, which becomes 21 as a number.

// Example 4:
// Input: -259
// Output: -952
// Explanation: Reverse the digits and keep the negative sign.

function reverseNumber(number) {
    // sign stores whether the number is positive or negative
    // example: -259 should become -952 after reversing
    let sign = number < 0 ? -1 : 1;

    // Math.abs removes the negative sign before reversing digits
    number = Math.abs(number);

    // reversedNumber will store the reversed number
    let reversedNumber = 0;

    // keep running the loop until number becomes 0
    // each loop takes one digit from the right side of number
    while (number > 0) {
        // get the last digit of number
        // example: 123 % 10 gives 3
        let lastDigit = number % 10;

        // add the last digit to reversedNumber
        // reversedNumber * 10 shifts the old digits left
        // then + lastDigit adds the new digit at the end
        // example:
        // reversedNumber = 0, lastDigit = 5 -> reversedNumber = 0 * 10 + 5 = 5
        // reversedNumber = 5, lastDigit = 4 -> reversedNumber = 5 * 10 + 4 = 54
        reversedNumber = (10 * reversedNumber) + lastDigit;

        // remove the last digit from number
        // example: 123 / 10 = 12.3 -> Math.floor gives 12
        number = Math.floor(number / 10);
    }

    // return the reversed number with the original sign
    return sign * reversedNumber;
}

console.log(reverseNumber(-12345))
