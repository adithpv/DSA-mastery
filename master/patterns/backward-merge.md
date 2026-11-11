# Backward Merge

## Recognition Clues

- Two inputs are already sorted.
- The first array has empty capacity at its end.
- The result must be written into that first array without an extra result array.

## Core Model

```txt
left = last real value in nums1
right = last value in nums2
write = last slot in nums1

while nums2 has values left:
    write the larger remaining value at nums1[write]
    move its source pointer left
    move write left
```

## Invariant

Before each iteration, every position to the right of `write` contains the correct largest values in final sorted order. All unmerged values remain at or left of their source pointers.

## Why Work Backward

The unused slots are at the end of `nums1`. Filling them from right to left avoids overwriting real `nums1` values that still need to be compared.

## Why Only `nums2` Must Be Checked at the End

If `nums2` is exhausted, leftover `nums1` values are already in their correct front positions. If `nums1` is exhausted first, remaining `nums2` values still need to be copied.

## Complexity

- Time: `O(m + n)`.
- Extra space: `O(1)`.

## Common Failure Modes

- Starting from the front and overwriting unread data.
- Forgetting the case where `nums1` has no real values left.
- Treating the placeholder zeroes as real sorted values.

## Course Problem

- Merge Sorted Array
