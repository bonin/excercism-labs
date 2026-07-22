// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let timeToMix = 0;
  console.log("Juicy Name " +  name );
  switch (name){
    case 'Pure Strawberry Joy':
      timeToMix = 0.5;
    break;
    case ( 'Energizer' ): 
      console.log("Am I in? ");
      timeToMix = 1.5;
    break;
    case ( 'Green Garden' ): 
      console.log("Am I in? ");
      timeToMix = 1.5;
    break;
    case 'Tropical Island': 
      timeToMix = 3;
    break;
    case 'All or Nothing':
      timeToMix = 5;
    break;
      default:
        timeToMix = 2.5;
    }
  return timeToMix;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  console.log("Limes " + limes );
  let wedgesLeft = wedgesNeeded;
  let wedges = 0;
  let numLimes = 0;
while (wedgesLeft > 0 ) {
    if(!limes[numLimes]){
      console.log("You're out of limes");
      return numLimes;
    }
    switch (limes[numLimes]){
      case 'small':
        wedges = 6;
      break;
      case 'medium':
        wedges = 8;
      break;
      case 'large':
        wedges = 10;
      break;
    }
    wedgesLeft -= wedges;
    numLimes++;
  } 

  return numLimes;
}

/*
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
    let currentOrder = 0;
    let timeToMix = 0;
    let ordersLeft = [];
  
    while ( orders[currentOrder] && timeLeft > 0 ) {
      console.log( timeLeft  + " Orders : " + orders[currentOrder]); 
      switch (orders[currentOrder]){
        case 'Pure Strawberry Joy':
          timeToMix = 0.5;
        break;
        case ( 'Energizer' ): 
          timeToMix = 1.5;
        break;
        case ( 'Green Garden' ): 
          console.log("Am I in? ");
          timeToMix = 1.5;
        break;
        case 'Tropical Island': 
          timeToMix = 3;
        break;
        case 'All or Nothing':
          timeToMix = 5;
        break;
        default:
            timeToMix = 2.5;
        }
      currentOrder++;
      timeLeft -= timeToMix;      
    }
   
    if( timeLeft <= 0 ){ 
      console.log(currentOrder + "  Remaining Orders : " + orders.slice(currentOrder, (orders.length))); 
     ordersLeft = orders.slice(currentOrder, (orders.length)); 
    }
  
  return ordersLeft;
 }
