# Time Complexity and Space Complexity

This note explains how to understand time complexity and space complexity clearly when solving DSA problems.

## 1. What Is Time Complexity?

Time complexity tells us how the running time of an algorithm grows when the input size grows.

It does not usually mean the exact number of seconds.

It answers this question:

> If the input becomes bigger, how much more work will my code do?

Example:

```js
for (let i = 1; i <= n; i++) {
    console.log(i);
}
```

If `n = 5`, the loop runs 5 times.

If `n = 100`, the loop runs 100 times.

So the work grows directly with `n`.

Time complexity:

```txt
O(n)
```

## 2. What Is Space Complexity?

Space complexity tells us how much extra memory an algorithm uses when the input size grows.

It answers this question:

> If the input becomes bigger, how much extra storage will my code need?

Example:

```js
let count = 0;

for (let i = 1; i <= n; i++) {
    count++;
}
```

Here, only one variable `count` is used.

Even if `n` becomes very large, we still use only a fixed number of variables.

Space complexity:

```txt
O(1)
```

`O(1)` means constant space.

## 3. What Does Big O Mean?

Big O is a way to describe growth.

It focuses on the main growth pattern and ignores small details.

Example:

```js
for (let i = 1; i <= n; i++) {
    console.log(i);
}

for (let j = 1; j <= n; j++) {
    console.log(j);
}
```

The first loop runs `n` times.

The second loop also runs `n` times.

Total work:

```txt
n + n = 2n
```

But in Big O, we ignore constants like `2`.

So the time complexity is:

```txt
O(n)
```

Not:

```txt
O(2n)
```

## 4. Common Time Complexities

### O(1) - Constant Time

The code takes the same amount of work, no matter how big the input is.

Example:

```js
function getFirstElement(arr) {
    return arr[0];
}
```

Whether the array has 5 elements or 5,000 elements, we only access the first element.

Time complexity:

```txt
O(1)
```

### O(n) - Linear Time

The work grows directly with input size.

Example:

```js
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
```

If `n = 10`, loop runs 10 times.

If `n = 100`, loop runs 100 times.

Time complexity:

```txt
O(n)
```

### O(n^2) - Quadratic Time

This usually happens with nested loops.

Example:

```js
function printPairs(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(i, j);
        }
    }
}
```

For every `i`, the inner loop runs `n` times.

Total work:

```txt
n * n = n^2
```

Time complexity:

```txt
O(n^2)
```

### O(log n) - Logarithmic Time

This happens when the input is reduced by half or by a fixed division each step.

Example:

```js
while (n > 1) {
    n = Math.floor(n / 2);
}
```

Here, `n` is divided by 2 each time.

If `n = 16`:

```txt
16 -> 8 -> 4 -> 2 -> 1
```

Only 4 steps are needed.

Time complexity:

```txt
O(log n)
```

## 5. Important Rule: Count How Many Times Code Runs

To find time complexity, ask:

> How many times does the main work happen?

Example:

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

Main work:

```js
console.log(i);
```

It runs `n` times.

So time complexity is:

```txt
O(n)
```

## 6. Time Complexity of Count Digits

Example:

```js
function countDigit(n) {
    if (n === 0) return 1;

    let count = 0;
    n = Math.abs(n);

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}
```

The important line is:

```js
n = Math.floor(n / 10);
```

This removes one digit from the number each time.

Example:

```txt
259 -> 25 -> 2 -> 0
```

The loop runs once for each digit.

If the number has `d` digits, the time complexity is:

```txt
O(d)
```

Sometimes this is also written as:

```txt
O(log n)
```

Why?

Because the number is divided by 10 again and again.

Space complexity:

```txt
O(1)
```

Only a few variables are used: `count` and `n`.

## 7. Time Complexity of Reverse Number

Example:

```js
function reverseNumber(number) {
    let sign = number < 0 ? -1 : 1;
    number = Math.abs(number);

    let reversedNumber = 0;

    while (number > 0) {
        let lastDigit = number % 10;
        reversedNumber = (10 * reversedNumber) + lastDigit;
        number = Math.floor(number / 10);
    }

    return sign * reversedNumber;
}
```

Each loop removes one digit from `number`.

Example:

```txt
12345 -> 1234 -> 123 -> 12 -> 1 -> 0
```

There are 5 digits, so the loop runs 5 times.

If the number has `d` digits:

```txt
Time Complexity: O(d)
Space Complexity: O(1)
```

Space is `O(1)` because we use only fixed variables:

```txt
sign, reversedNumber, lastDigit
```

The number of variables does not grow when the input grows.

## 8. Time Complexity of Palindrome Number

Palindrome number code usually reverses the number and compares it with the original number.

Example:

```js
function isPalindromeNumber(number) {
    if (number < 0) return false;

    let reversedNumber = 0;
    let originalNumber = number;

    while (number > 0) {
        let lastDigit = number % 10;
        reversedNumber = (10 * reversedNumber) + lastDigit;
        number = Math.floor(number / 10);
    }

    return reversedNumber === originalNumber;
}
```

The loop runs once for every digit.

If the number has `d` digits:

```txt
Time Complexity: O(d)
Space Complexity: O(1)
```

## 9. How To Find Space Complexity

Look at what extra memory your code creates.

### Example 1: Constant Space

```js
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}
```

Only `sum` and `i` are used.

Even if `n` becomes very large, we still use only a fixed number of variables.

Space complexity:

```txt
O(1)
```

### Example 2: Linear Space

```js
let result = [];

for (let i = 1; i <= n; i++) {
    result.push(i);
}
```

Here, the array grows as `n` grows.

If `n = 5`, array has 5 values.

If `n = 100`, array has 100 values.

Space complexity:

```txt
O(n)
```

## 10. Quick Cheat Sheet

| Code Pattern | Time Complexity | Space Complexity |
|---|---:|---:|
| Direct value access | O(1) | O(1) |
| One loop from `1` to `n` | O(n) | Usually O(1) |
| Two separate loops from `1` to `n` | O(n) | Usually O(1) |
| Nested loop, both up to `n` | O(n^2) | Usually O(1) |
| Dividing input by 2 each time | O(log n) | O(1) |
| Dividing number by 10 each time | O(d) or O(log n) | O(1) |
| Creating an array of size `n` | O(n) | O(n) |

## 11. Simple Steps To Solve Complexity Questions

Use these steps:

1. Find the main repeated work.
2. Count how many times it runs.
3. Ignore constants.
4. Keep only the fastest-growing part.
5. For space, check if extra memory grows with input size.

Example:

```js
for (let i = 1; i <= n; i++) {
    console.log(i);
}
```

Main repeated work:

```txt
console.log(i)
```

Runs:

```txt
n times
```

Answer:

```txt
Time Complexity: O(n)
Space Complexity: O(1)
```

## 12. Most Important Thing To Remember

Time complexity is about:

```txt
How many operations happen as input grows?
```

Space complexity is about:

```txt
How much extra memory is used as input grows?
```

For your current number problems:

```txt
Count digits       -> O(d) time, O(1) space
Reverse number     -> O(d) time, O(1) space
Palindrome number  -> O(d) time, O(1) space
```

Here, `d` means number of digits.

