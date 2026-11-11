# 03 — Reverse String

Source: [LeetCode 344](https://leetcode.com/problems/reverse-string/)

Visual explanation: [Open the interactive lesson](../../../lessons/0003-reverse-string.html)

## Problem

Given an input string represented as an array of characters, reverse the character array in-place using constant extra memory. The same array must contain the reversed order when the function finishes.

## Examples

```txt
Input:  ["h", "e", "l", "l", "o"]
Output: ["o", "l", "l", "e", "h"]

Input:  ["H", "a", "n", "n", "a", "h"]
Output: ["h", "a", "n", "n", "a", "H"]
```

## Constraints That Matter

- Modify the same character array.
- Use `O(1)` extra space.

## Before Coding

- Which two positions form the first pair?
- When should pointer movement stop?
- What happens to the middle character of an odd-length input?
