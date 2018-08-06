// Code your solution here!
function printString(myString) {
  let substring;

  //console.log(myString);
  console.log(myString[0]);

  if(myString.length > 1) {
    substring = myString.substring(1);
    //console.log(substring);
    printString(substring);
  } else {
    console.log(substring);
    return true;
  }
}
 
printString("Babycat");

function reverseString(myString) {
  
}

function isPalindrome(myString){
  
}
