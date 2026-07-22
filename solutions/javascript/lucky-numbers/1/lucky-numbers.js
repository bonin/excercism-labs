// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let firstNum = '';
  let secondNum = '';
  
  for (let num of array1) {
    firstNum += num;
  }
  
  for (let num of array2) {
    secondNum += num;
  }
  
  console.log(" First Num " + firstNum );  
  
  let total = Number(firstNum) + Number(secondNum);

  return total;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let stringValue = String(value);
  let reverseValue = '';
  let catchChar= [];

  for (let char of stringValue) {
    catchChar.unshift(char);
  }

  let i = 0;
  for ( let out of catchChar ){
    reverseValue += out;
  }
  
  return ( String(value) === reverseValue );
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let numberTest = Number(input);
  var output = '';
  
  console.log("Value " + input);
  if( input == undefined || input == null || input == '' ){
    console.log(" Null/Undefined ");
    output = "Required field";
  }else if ( numberTest < 0 ){
    console.log(" Number Found");
    output = "";
  }else if ( isNaN(numberTest) || numberTest == 0 ) {
    console.log(" Not a number ");
    output = 'Must be a number besides 0';
  }
  console.log("Output " + output);
  return output;
}
