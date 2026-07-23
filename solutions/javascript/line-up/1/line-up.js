//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = ( name, number ) => {
  let ordinal = '';
  let stringNum = String(number);
  let evalNum = stringNum[stringNum.length - 1];
  let oneCheck = stringNum[stringNum.length - 2];
  
  switch(evalNum){
    case '1' :
      ordinal = oneCheck == '1' ? 'th' : 'st'
      console.log( ordinal );
    break;
    case '2' :
      ordinal = oneCheck == '1' ? 'th' : 'nd'
    break;
    case '3' :
      ordinal = oneCheck == '1' ? 'th' : 'rd'
    break;
   default :
        ordinal = 'th'
    break;
  }
 
  return `${name}, you are the ${number}${ordinal} customer we serve today. Thank you!`
};

