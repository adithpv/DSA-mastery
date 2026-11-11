# Best Time to Buy and Sell Stock — Explanation

Pattern: [Running prefix state](../../../patterns/running-prefix-state.md).

Visual explanation: [Open the interactive lesson](../../../lessons/0004-best-time-to-buy-stock.html)

## Recognition Clues

The current price is a possible selling price, but it must be paired with an earlier buying price. We therefore need the best relevant information from the prefix already scanned.

## State Meanings

- `min` is the cheapest buying price seen so far.
- `maxProfit` is the best valid profit found so far.

## Invariant

After processing index `i`, `min` is the lowest price in `prices[0...i]`, and `maxProfit` is the best profit from a valid buy-before-sell transaction entirely inside that prefix.

For every possible selling day, the algorithm tests the cheapest eligible buying price. Updating the maximum across all selling days therefore considers the best transaction.

## Update Order

The saved solution evaluates today's profit and then updates the minimum. Using today's price as both buy and sell would only produce zero, but keeping the order explicit makes the time rule easier to reason about.

## Complexity

- Time: `O(n)`.
- Extra space: `O(1)`.

## Recall Questions

1. What does the running minimum summarize?
2. Why can a global minimum and maximum produce an invalid answer?
3. State the two-part invariant.
