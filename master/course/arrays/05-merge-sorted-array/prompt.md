# 05 — Merge Sorted Array

Source: [LeetCode 88](https://leetcode.com/problems/merge-sorted-array/)

Visual explanation: [Open the interactive lesson](../../../lessons/0005-merge-sorted-array.html)

## Problem

`nums1` contains `m` sorted values followed by `n` placeholder zeroes. `nums2` contains `n` sorted values. Merge both inputs into `nums1` in non-decreasing order.

The placeholder zeroes at the end of `nums1` are empty capacity, not values to merge. Store the final result inside `nums1`; the function does not need to return the array.

## Examples

```txt
Input:
nums1 = [1, 2, 3, 0, 0, 0], m = 3
nums2 = [2, 5, 6],          n = 3

Modified nums1:
[1, 2, 2, 3, 5, 6]
```

## Constraints That Matter

- Both sets of real values are already sorted.
- Only the first `m` values of `nums1` are real input values.
- `nums2` contains exactly `n` real input values.
- `nums1` has exactly enough capacity for the result.
- The result must be written into `nums1`.

## Before Coding

- Which direction avoids overwriting unread values?
- What does each of the three pointers represent?
- Which source's leftovers still need copying?
