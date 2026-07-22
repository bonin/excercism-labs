// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  console.log(Math.random(10)); 
    let randomShipNumber = `NCC-${Math.floor(Math.random() * 8999 + 1000)}`;

    return randomShipNumber;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let starDate = (Math.random() * 1000 + 41000);

  return starDate;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let planetClasses = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']
  let planetClass = planetClasses[ (Math.floor(Math.random() * 10))];
  
  console.log("Planet Class " + planetClass);

  return planetClass;

  
}
