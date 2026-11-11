# 02 — Remove Element

Source: [LeetCode 27](https://leetcode.com/problems/remove-element/)

Visual explanation: [Open the interactive lesson](../../../lessons/0002-remove-element.html)

## Problem

Given an integer array `nums` and a value `val`, remove every occurrence of `val` in-place. Return `k`, the number of remaining values. The first `k` positions must contain values not equal to `val`; values after `k` do not matter.

The remaining values may appear in any order. The saved solution preserves their original order, but the problem does not require that behavior.

## Examples

```txt
Input:  nums = [3, 2, 2, 3], val = 3
Return: 2
First k values: [2, 2]

Input:  nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
Return: 5
First k values: [0, 1, 3, 0, 4]
```

## Constraints That Matter

- Modify `nums` in-place.
- Only the first `k` positions are judged.
- The order of the first `k` values may change.
- The problem does not require values after position `k` to be cleared.

## Before Coding

- What does `k` count?
- When should the write position move?
- What happens when every value must be removed?
