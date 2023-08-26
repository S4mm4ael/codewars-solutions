//Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

function createMessage(string) {
  return function(nextString) {
    if (!nextString) {
      return string;
    } else {
      return createMessage(string + ' ' + nextString);
    }
  }
}
