/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  let firstCard = '';
  [firstCard] = deck;

  return firstCard;
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  let second = function cardStack(deck, first = '', second = '') {
    [first, second] = deck;
    return second;
  }

  return second(deck);
}

/**
 * Switch the position of the two cards
 *
 * @param {[Card, Card]} deck
 *
 * @returns {[Card, Card]} new deck with the 2 cards swapped
 */
export function swapTwoCards(deck) {
    let cardSwap = function swapCard(deck, first = '', second = '') {
    [first, second] = deck;
    return [second, first];
  }

  return cardSwap(deck);
}

/**
 * Rotate (shift) the position of the three cards (by one place)
 *
 * @param {[Card, Card, Card]} deck
 *
 * @returns {[Card, Card, Card]} new deck with the 3 cards shifted by one position
 */
export function shiftThreeCardsAround(deck) {
  let moveThree = function shiftThree(deck, first = '', second = '', third = '') {
    [first, second, third] = deck;
    
    return [second, third, first];
  }

  return moveThree(deck);
}

/**
 * Grab the chosen pile from the available piles
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles
 *
 * @returns {Card[]} the pile named chosen
 */
export function pickNamedPile(piles) {
  // 🚨 Do NOT use piles.chosen or piles.disregarded.

  let junkPile = function trashPile(cards) {
    let name = '';
    for ( name in cards) {
      if (name == 'chosen') {
        console.log(cards[name]);
        return cards[name] ;      
      }
      console.log(cards[name]);
    }

    return [];
  }
    return junkPile(piles);

}

/**
 * Swap the chosen pile for the disregarded pile and the disregarded pile for the chosen pile
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles
 * @returns {{ chosen: Card[], disregarded: Card[] }} new piles where the two piles are swapped
 */
export function swapNamedPile(piles) {
  // 🪄 Don't break the magic.
  // 🚨 Do NOT use piles.chosen or piles.disregarded.
  // 🚨 Do NOT touch the next line or Elyse will accidentally reveal the trick.

  let { "chosen" : disregarded, "disregarded" : chosen } = piles; 
  //console.log("Chosen " + chosen)
  //console.log("Piles Chosen " + piles.chosen)
  return { chosen, disregarded };
}
