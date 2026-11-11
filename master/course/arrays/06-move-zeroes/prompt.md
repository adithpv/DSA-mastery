# 06 — Move Zeroes

Source: [LeetCode 283](https://leetcode.com/problems/move-zeroes/)

Visual explanation: [Open the interactive lesson](../../../lessons/0006-move-zeroes.html)

## Problem

Move every zero to the end of an integer array while preserving the relative order of non-zero values. Modify the array in-place.

## Examples

```txt
Input:  [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Input:  [0]
Output: [0]
```

## Constraints That Matter

- `1 <= nums.length <= 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`
- Preserve the order of non-zero values.
- Modify the same array.
- Avoid a copied result array.

## Follow-up

Can you minimize the total number of write operations?

## Before Coding

- Where should the next non-zero value be written?
- After compaction, which positions must be filled?
- What happens when there are no zeroes?
