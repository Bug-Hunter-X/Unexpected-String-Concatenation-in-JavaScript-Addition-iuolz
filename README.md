# Unexpected String Concatenation in JavaScript Addition

This repository demonstrates a common pitfall in JavaScript: unexpected string concatenation when using the + operator with mixed data types.

## The Bug

The `foo` function intends to add two numbers. However, if either input is a string, the + operator performs string concatenation instead of numeric addition.  This leads to unexpected results. The example shows how it handles null values, and how unintended string concatenation occurs.

## The Solution

The solution uses strict comparison (`===` and `!==`) to explicitly check for `null` values, and uses `Number()` for type conversion before arithmetic operation to enforce numeric addition.  This makes the behavior more predictable and avoids unintended type coercion.