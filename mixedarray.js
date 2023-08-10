// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let intWhole = x.map((item) => parseInt(item)).reduce((acc, c) => acc + c, 0);
  //   let sumWhole = intWhole.reduce((acc, c) => acc + c, 0);
    
    return intWhole;
  }