function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // This may throw if a or b is not a number
}

console.log(foo(10, 20)); // 30
console.log(foo(null, 20)); // null
console.log(foo(10, null)); // null
console.log(foo("10", 20)); // "1020" (unexpected)
console.log(foo(10, "20")); // "1020" (unexpected)
console.log(foo([1,2], [3,4])); // Error