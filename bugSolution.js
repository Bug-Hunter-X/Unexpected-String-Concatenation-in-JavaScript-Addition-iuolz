function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return null; // Handle non-numeric values
  }
  return a + b; // Now correctly adds numbers
}

console.log(foo(10, 20)); // 30
console.log(foo(null, 20)); // null
console.log(foo(10, null)); // null
console.log(foo("10", 20)); // 30
console.log(foo(10, "20")); // 30
console.log(foo([1,2], [3,4])); //NaN 