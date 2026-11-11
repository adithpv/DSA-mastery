# Running Streak

## Recognition Clues

- Find the longest consecutive run satisfying a condition.
- A failing value breaks the current run.
- Only the current run and best run are needed.

## Core Model

```txt
current = 0
best = 0

for each value:
    if value matches:
        current++
        best = max(best, current)
    else:
        current = 0

return best
```

## Invariant

After processing each value, `current` is the length of the matching streak ending at that value, and `best` is the longest matching streak anywhere in the processed prefix.

## Why Reset

A non-matching value makes it impossible for a streak before that value to continue through it. The next matching value must begin a new streak.

## Complexity

- Time: `O(n)`.
- Extra space: `O(1)`.

## Common Failure Modes

- Updating the maximum only when a streak breaks, then missing a streak at the end.
- Resetting the best count instead of the current count.
- Counting total matches rather than consecutive matches.

## Course Problem

- Max Consecutive Ones
