# 04 — Best Time to Buy and Sell Stock

Source: [LeetCode 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

Visual explanation: [Open the interactive lesson](../../../lessons/0004-best-time-to-buy-stock.html)

## Problem

Given an array `prices` where `prices[i]` is the stock price on day `i`, choose one day to buy one stock and a different, later day to sell it. Return the maximum possible profit. Return `0` when no profitable transaction exists.

## Examples

```txt
Input:  [7, 1, 5, 3, 6, 4]
Output: 5
Explanation: buy at 1 and later sell at 6, giving 6 - 1 = 5.

Input:  [7, 6, 4, 3, 1]
Output: 0
Explanation: every later price is lower, so no profitable transaction exists.
```

## Constraints That Matter

- The buying day must be earlier than the selling day.
- Only one buy and one sell are allowed.
- Selling before buying is not a valid transaction.

## Before Coding

- If today is the selling day, what earlier information do you need?
- Why is choosing the global minimum and maximum insufficient?
- What should happen when prices only decrease?
