// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  const symbolArray = s.split('');
  
  if (symbolArray.length % 2 !== 0){
    return symbolArray[Math.floor(symbolArray.length / 2)]
  }
  else {
    return symbolArray[symbolArray.length / 2 - 1] + symbolArray[symbolArray.length / 2] 
  }
  
}
