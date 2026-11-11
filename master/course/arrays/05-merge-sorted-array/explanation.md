# Merge Sorted Array — Explanation

Pattern: [Backward merge](../../../patterns/backward-merge.md).

Visual explanation: [Open the interactive lesson](../../../lessons/0005-merge-sorted-array.html)

## Recognition Clues

Two sorted streams must be combined, and the output array's free space is at its end. The safe output direction is therefore right to left.

## State Meanings

In `mergeSortedArray2`:

- `p1` is the largest unmerged real value in `nums1`.
- `p2` is the largest unmerged value in `nums2`.
- `i` is the destination for the next largest value.

## Invariant

Before every iteration, positions after `i` contain the correct largest merged values in final order. Values at or before `p1` and `p2` are still available for comparison.

Writing the larger candidate at `i` is safe because it must be the largest remaining value. The destination never overwrites a `nums1` value before that value is compared.

## Why Stop When `p2 < 0`?

If `nums2` is empty, remaining `nums1` values are already in their correct positions. If `nums1` empties first, the `else` branch continues copying values from `nums2`.

The saved file also contains a forward merge using a copy. That version is correct but uses `O(m)` extra space; the backward version achieves the in-place target with `O(1)` extra space.

## Complexity

- Time: `O(m + n)`.
- Extra space for the backward version: `O(1)`.

## Recall Questions

1. Why is forward writing dangerous without a copy?
2. What is guaranteed to be correct to the right of `i`?
3. Why do leftover `nums1` values need no copy operation?
