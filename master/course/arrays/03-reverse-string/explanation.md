# Reverse String — Explanation

Pattern: [Converging two pointers](../../../patterns/converging-two-pointers.md).

Visual explanation: [Open the interactive lesson](../../../lessons/0003-reverse-string.html)

## Recognition Clues

Reversing maps the first position to the last, the second to the second-last, and so on. Each operation naturally handles a pair from opposite ends.

## State Meanings

The saved solution uses `i` as the left index and calculates the matching right index as `len - 1 - i`. This is equivalent to explicit `left` and `right` pointers.

## Invariant

Before iteration `i`, the first `i` positions and last `i` positions are already in their final reversed locations. The middle interval remains unprocessed.

Each swap puts two characters into their final positions. Only `floor(length / 2)` swaps are required; a middle character does not move.

## Complexity

- Time: `O(n)`.
- Extra space: `O(1)`.

## Recall Questions

1. Why is the matching right index `length - 1 - i`?
2. Why is half the length enough?
3. State what is already correct before every swap.
