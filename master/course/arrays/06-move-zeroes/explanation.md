# Move Zeroes — Explanation

Pattern: [Read/write pointers](../../../patterns/read-write-pointers.md), stable compaction followed by filling.

Visual explanation: [Open the interactive lesson](../../../lessons/0006-move-zeroes.html)

## Recognition Clues

The non-zero values are the values to keep, their order must remain stable, and they must be compacted into the front of the same array.

## State Meanings

- `i` reads every original value.
- `p1` is the next position for a non-zero value and the number of non-zero values written.
- `j` fills the unused suffix with zeroes.

## Invariant

During the first loop, before each iteration, `nums[0...p1-1]` contains exactly the non-zero values seen so far in their original order.

After the first loop, that prefix is final. Every position from `p1` to the end belongs to the zero suffix, so the second loop fills it with zeroes.

## Why Two Passes Are Still Linear

The first pass examines `n` values and the second fills at most `n` positions. `n + n` is `2n`, and Big O ignores the constant factor, so the total is `O(n)`.

## Complexity

- Time: `O(n)`.
- Extra space: `O(1)`.

## Recall Questions

1. What does `p1` mean after the first loop ends?
2. Why does copying forward preserve non-zero order?
3. Why must the suffix be explicitly filled?
