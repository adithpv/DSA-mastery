# 01 — Remove Duplicates from Sorted Array

Source: [LeetCode 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

Visual explanation: [Open the interactive lesson](../../../lessons/0001-remove-duplicates.html)

## Problem

Given an integer array sorted in non-decreasing order, remove duplicates in-place so each unique value appears once. Return the number `k` of unique values. The first `k` positions must contain those unique values in their original sorted order.

Values after the first `k` positions are ignored by the judge and do not need to be cleared.

## Examples

```txt
Input:  [1, 1, 2]
Return: 2
First k values: [1, 2]
Modified array shape: [1, 2, _]

Input:  [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
Return: 5
First k values: [0, 1, 2, 3, 4]
Modified array shape: [0, 1, 2, 3, 4, _, _, _, _, _]
```

## Constraints That Matter

- The input is sorted in non-decreasing order.
- Modify the input array in-place.
- Do not use another array as the final result.

## Before Coding

- How does sorted order help you recognize a new value?
- Does your pointer represent an index or a count?
- What should an empty input return?
