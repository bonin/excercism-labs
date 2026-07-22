/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  const scoreBoard = {
    'The Best Ever' : 1000000,
    //'name' : '...',
    //'high-score' : '...'
  }
  return scoreBoard;
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  const playerScores = scoreBoard;

  //console.log("Data dump : " + JSON.stringify(player));
  
  playerScores[ player ] = score;
  //console.log("Big Dumper : " + JSON.stringify(playerScores));

  return playerScores;

}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {

  const playerScores = scoreBoard;
  
  delete playerScores[ player ];

  return playerScores;  
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  const playerScores = scoreBoard;

  console.log("Data dump : " + JSON.stringify(player) + "  " + points);

  let newScore =  playerScores[player] + points
  playerScores[ player ] = newScore;
  console.log("Big Dumper : " + JSON.stringify(playerScores));

  return playerScores;
  
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  const playerScores = scoreBoard;

  for ( name in playerScores) {
      let newScore =  playerScores[name] + 100
      
      playerScores[ name ] = newScore;
  }

  return playerScores;
}
