# 07 — Max Consecutive Ones

Source: [LeetCode 485](https://leetcode.com/problems/max-consecutive-ones/)

Visual explanation: [Open the interactive lesson](../../../lessons/0007-max-consecutive-ones.html)

## Problem

Given a binary array, return the length of its longest consecutive run of `1` values.

## Examples

```txt
Input:  [1, 1, 0, 1, 1, 1]
Output: 3
Explanation: the final three ones form the longest consecutive run.

Input:  [1, 0, 1, 1, 0, 1]
Output: 2
```

## Constraints That Matter

- `1 <= nums.length <= 10^5`
- Every value is either `0` or `1`.
- Only consecutive values count; total ones are not enough.

## Before Coding

- What state describes a run ending at the current index?
- What should a zero do to that state?
- How will you handle a longest run that reaches the final element?
