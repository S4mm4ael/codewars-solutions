//Can Santa save Christmas?
//Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

//But he has only 24 hours left. Can he do it?

//Your Task:
//You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

function determineTime (durations) {
  let secondsCounter = 0;
  
  function convertArray(array){
      return array.map(time => time.split(':').map(string => +string))
  }
  
  for (duration of convertArray(durations)) {
    secondsCounter += duration[0]*3600 + duration[1]*60 + duration[2];
  }
  
  return secondsCounter <= 86400
}
