# Remove Duplicates — Explanation

Pattern: [Read/write pointers](../../../patterns/read-write-pointers.md), sorted unique variant.

Visual explanation: [Open the interactive lesson](../../../lessons/0001-remove-duplicates.html)

## Recognition Clues

The array is sorted, the change must happen in-place, and only one copy of each value should remain. Sorted order makes every duplicate adjacent to the copy already kept.

## State Meanings

- `i` scans candidates from left to right.
- `x` is the index of the last unique value written.

## Invariant

Before each iteration, `nums[0...x]` contains every unique value encountered so far exactly once and in sorted order.

When `nums[i] !== nums[x]`, the scanner found a new unique value. Advancing `x` and copying `nums[i]` preserves the invariant. Equal values can be skipped because one copy is already present.

## Why Return `x + 1`?

`x` is an index. If the last unique value is at index `4`, there are `5` unique values. The empty-array guard is necessary because index `0` would otherwise look like a valid first value.

## Complexity

- Time: `O(n)`.
- Extra space: `O(1)`.

## Recall Questions

1. Which property lets you compare with only the last unique value?
2. Why does this solution return `x + 1`, while Remove Element returns `x`?
3. State the invariant without reading it.
