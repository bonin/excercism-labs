// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * @typedef {function (number, number): [number, number]} CallbackType
 */

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  let newCoordinates = [];

  return function moveThePixels(x, y){
    newCoordinates[0] = Number(dx + x);
    newCoordinates[1] = Number(y+dy);
    
    return newCoordinates;
  }
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy){

  let newScaler = [];
  return function doubleScale(x, y){
    console.log( x + "," + y );

    newScaler[0] = Number(sx * x);
    newScaler[1] = Number(sy * y);
    
    return newScaler;
  }
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {CallbackType} f the first function to apply
 * @param {CallbackType} g the second function to apply
 *
 * @returns {CallbackType} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
    let finalCoordinates = [];
    let coordinates = f;

    //console.log("Outside " + f );

  
    return function bungHole(a,b){
      
      coordinates = f(a,b);
      finalCoordinates = g(coordinates[0], coordinates[1]);
      
      return finalCoordinates;
    }
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {CallbackType} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {CallbackType} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let cache = {};

  return function memScale(a,b) {
    let key = `${a},${b}`
    let scaledValue = [];
    console.log(`${a},${b}` + " : " + "Cache " + JSON.stringify(cache));
    if (key in cache) {
      console.log("Already computed ");
      scaledValue = cache[key];
    }else{
      scaledValue = f(a,b);
      cache = {};
      cache[key] = scaledValue;
    }
    //console.log("Scaled Value " + scaledValue);
    
    return scaledValue;
  }
}
