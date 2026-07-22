/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime){
  console.log("Parmesean dump " + remainingTime + " " + typeof(remainingTime));
  if ( remainingTime === null || remainingTime === undefined ){
    return "You forgot to set the timer."
  }else if ( remainingTime === 0 ) {
    return "Lasagna is done."
  } else {
    return "Not done, please wait."
  }
}

export function preparationTime(layers, time = 2){
  console.log("Layers " + layers);
  let totalTime = layers.length * time;
  
  return totalTime;
}

export function quantities(ingredients){
  let ingredientList = { noodles : Number(0), sauce : Number(0) }
  
  for (let name of ingredients) {
      if (name === 'sauce') {
        ingredientList.sauce += 0.2;
      }else if ( name === 'noodles' ) {
          ingredientList.noodles += 50;
      } 
    }

  return ingredientList;
}
export function addSecretIngredient( friendsList, myList){
  let secretIngredientList = [];
  
  console.log("MyList " + myList);
  console.log("friendsList " + friendsList);
  secretIngredientList = myList;
  
  secretIngredientList.push(friendsList[friendsList.length - 1 ]);

  console.log( " secretIngredientList: " + secretIngredientList );
}

export function scaleRecipe( recipe, scalar ){
/* Example recipe object  
  const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
  };
*/

const recipeScale = {};

for (let name in recipe ) {
  recipeScale[name] = Number(recipe[name] * scalar / 2);
}
  
  //console.log( "Old Recipe : " +  JSON.stringify(recipe) + " : Size " + scalar);
  //console.log( "New Recipe : " +  JSON.stringify(recipeScale));

  return recipeScale;
  
}



