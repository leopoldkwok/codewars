// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove(s) {
  //coding and coding....
  let arr = s.split('');
  if (arr[arr.length - 1] === '!') {
    arr = arr.slice(0, -1).join('');
    return arr;
  } else {
    return arr.join('');
  }
}