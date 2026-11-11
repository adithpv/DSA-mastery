# Max Consecutive Ones — Explanation

Pattern: [Running streak](../../../patterns/running-streak.md).

Visual explanation: [Open the interactive lesson](../../../lessons/0007-max-consecutive-ones.html)

## Recognition Clues

The word “consecutive” means the current answer candidate either grows by one or is broken completely by the current value.

## State Meanings

- `count` is the number of consecutive ones ending at the most recently processed value.
- `maxCount` is the best completed streak seen so far.

## Invariant

After processing each index, `count` is the length of the run of ones ending there, or zero when that value is zero. The maximum of `maxCount` and `count` is the longest streak in the processed prefix.

The saved solution updates `maxCount` when a zero ends a streak, then returns `Math.max(count, maxCount)`. That final comparison is necessary when the longest streak reaches the end and is never closed by a zero.

## Complexity

- Time: `O(n)`.
- Extra space: `O(1)`.

## Recall Questions

1. Why does a zero reset `count` rather than merely pause it?
2. What bug appears if the function returns only `maxCount`?
3. State what `count` means after every processed value.
