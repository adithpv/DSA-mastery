# Running Prefix State

## Recognition Clues

- A decision at the current index depends on the best value from earlier indices.
- The earlier choice must occur before the current choice.
- Recomputing the best earlier value for every index would create a nested loop.

## Core Model

Maintain a small summary of the prefix already scanned:

```txt
prefixState = information from the first value
answer = initial answer

for each current value:
    use prefixState to evaluate the current value
    update answer
    update prefixState
```

For stock profit, `prefixState` is the minimum earlier price.

## Invariant

Before evaluating a selling day, `minPrice` is the lowest eligible buying price seen so far, and `bestProfit` is the best valid profit found in the scanned prefix.

## Why It Works

Every day is considered as a possible selling day. Pairing it with the cheapest allowed earlier buying price gives the best transaction ending that day. Taking the maximum over all days gives the global answer.

## Complexity

- Time: `O(n)`.
- Extra space: `O(1)`.

## Common Failure Modes

- Choosing a global minimum and maximum without respecting their order.
- Resetting the prefix summary too aggressively.
- Updating state in an order that accidentally allows an invalid choice.

## Course Problem

- Best Time to Buy and Sell Stock
