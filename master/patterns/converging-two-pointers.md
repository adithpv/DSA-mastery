# Converging Two Pointers

## Recognition Clues

- Work must happen symmetrically at both ends of a sequence.
- The sequence must be reversed or compared in-place.
- Each operation can finish one position on the left and one on the right.

## Core Model

```txt
left = 0
right = length - 1

while left < right:
    process or swap values at left and right
    left++
    right--
```

## Invariant

Before each iteration, every position outside `[left, right]` is already in its final correct state. The unprocessed work remains inside that interval.

## Why It Stops at the Middle

One operation settles two positions. When the pointers meet or cross, no unsettled pair remains. An odd-length sequence's middle value stays where it is.

## Complexity

- Time: `O(n)`.
- Extra space: `O(1)`.

## Common Failure Modes

- Using `left <= right` when processing the middle is unnecessary.
- Moving only one pointer after a successful operation.
- Overwriting one side before saving the value needed for the swap.

## Course Problem

- Reverse String
