// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    //You got this!
     //split the string into an array
     let newStr = str.split('');
     //remove the first element of the array
     let firstRemoved = newStr.shift();
     //remove the last element of the array
     let lastRemoved = newStr.pop();
     //join the array back into a string
     let finalString = newStr.join('');
     return finalString;
   };
   
   
   
   
   
   