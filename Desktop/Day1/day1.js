// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

function century(year) {
  let cent = 0;
  let numOfYear = Math.floor(year/100);
  let remainingValue = year % 100;
  
  if (remainingValue > 0){
    cent = numOfYear + 1;
  }else{
    cent = numOfYear;
  }
  
  return cent;
}