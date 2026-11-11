# Remove Element — Explanation

Pattern: [Read/write pointers](../../../patterns/read-write-pointers.md), stable compaction.

Visual explanation: [Open the interactive lesson](../../../lessons/0002-remove-element.html)

## Recognition Clues

Some values must be kept, others discarded, and the accepted values must occupy the beginning of the same array.

## State Meanings

- `i` reads every original value.
- `x` is both the next output position and the number of values kept so far.

## Invariant

Before each iteration, `arr[0...x-1]` contains exactly the non-`val` values encountered so far, in their original order.

If `arr[i]` should stay, writing it at `arr[x]` and incrementing `x` extends the valid prefix. If it equals `val`, leaving `x` unchanged correctly skips it.

## Why Return `x`?

Unlike Remove Duplicates, `x` is the next free position rather than the last valid index. It begins at zero and increases once per kept value, so it is already the count.

## Complexity

- Time: `O(n)`.
- Extra space: `O(1)`.

## Java Equivalent

```java
class Solution {
    public int removeElement(int[] nums, int val) {
        int x = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[x] = nums[i];
                x++;
            }
        }

        return x;
    }
}
```

## Recall Questions

1. What does the prefix before `x` contain?
2. Can `x` ever be greater than the read pointer?
3. Why do values after the first `x` positions not matter?
