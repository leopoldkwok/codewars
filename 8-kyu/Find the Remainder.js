// Task
// Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number.

// Division by zero should return NaN. (

// Example
// remainder(17, 5) -> 2
// remainder(13, 72) -> remainder(72,13) -> 7 (The larger number should divide the smaller number)
// remainder(1, 0) -> NaN (Division by 0)
// remainder(0, 0) -> NaN (Divison by 0)
// Input
// Arguments will both be integers: positive, negative, or neutral (0)

function remainder(a, b) {
  // Divide the larger argument by the smaller argument and return the remainder
  if (a > b) {
    return a % b;
  } else if (b > a) {
    return b % a;
  } else if (a == 0 || b == 0) {
    return NaN;
  } else if (a < 0) {
    return (a = 0);
  }
}