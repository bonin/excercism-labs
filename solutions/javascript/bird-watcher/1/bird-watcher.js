// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;

  for (let index = 0; index < birdsPerDay.length; index++) {
    totalBirds += birdsPerDay[index];
  }
  return totalBirds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let totalBirds = 0;
  let weekPointer = ((week - 1) * 7);
  
  for ( let index = weekPointer ; index < weekPointer + 7 ; index++ ) {
        totalBirds += birdsPerDay[index];
  }  
  
  return totalBirds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  console.log("Starting Array " + birdsPerDay + "with type " + typeof(birdsPerDay) );
  for (let index = 0; index < birdsPerDay.length; index++) {
    let even = index % 2;
    if ( even == 0 ) {
      birdsPerDay[index]++;
      console.log( index + " " + typeof(birdsPerDay[index]) + " incrementer " + birdsPerDay[index]) ;
    }
  }
  console.log( "Ending Array   " + birdsPerDay ) ;
  
  return birdsPerDay;
}
