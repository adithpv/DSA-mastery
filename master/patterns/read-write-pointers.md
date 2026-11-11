# Read/Write Pointers

## Recognition Clues

- Scan an array while keeping, removing, or transforming selected values.
- Modify the array in-place.
- Only the first `k` positions must contain the valid result.
- The relative order of kept values may need to stay the same.

## Core Model

The read pointer examines every input value. The write pointer marks where the next accepted value belongs.

```txt
write = 0

for read from 0 to end:
    if current value should be kept:
        nums[write] = nums[read]
        write++

return write
```

## Invariant

Before each iteration, `nums[0...write-1]` contains exactly the accepted values seen so far, in the required order.

That invariant explains both correctness and the return value: `write` is the number of accepted values and the next free output position.

## Important Variant: Sorted Unique Values

For a sorted array, duplicates are adjacent. A write pointer may represent the index of the last unique value instead of the next free position:

```txt
lastUnique = 0

for read from 1 to end:
    if nums[read] != nums[lastUnique]:
        lastUnique++
        nums[lastUnique] = nums[read]

return lastUnique + 1
```

Here `lastUnique` is an index, so the count is `lastUnique + 1`.

## Complexity

- Time: `O(n)` because each element is read once.
- Extra space: `O(1)` because the input array is reused.

## Common Failure Modes

- Confusing “last written index” with “next write position.”
- Returning the pointer without deciding whether it represents an index or a count.
- Destroying the relative order when the problem requires stable compaction.
- Creating a second result array despite an in-place requirement.

## Course Problems

- Remove Duplicates from Sorted Array
- Remove Element
- Move Zeroes
