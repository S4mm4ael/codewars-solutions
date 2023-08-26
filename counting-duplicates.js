//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits
function duplicateCount(text){
  const regExp = /([^])\1+/g;
  const textArray = text.toLowerCase().split('').sort();
  return (textArray.join('').match(regExp) || []).length;
}
