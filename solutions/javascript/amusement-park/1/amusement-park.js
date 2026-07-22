/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const visitor = {
    'name' : name,
    'age' : age,
    'ticketId' : ticketId
  }

  return visitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  const revokeTicket = visitor;   
  revokeTicket.ticketId = null;

  return revokeTicket;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  console.log("Tickets : " + JSON.stringify(tickets));
  let ticketCheck = tickets;
  let verified = ''
  let found = false;
  
  for (let id in tickets) {
    console.log("Who dis? " + ticketCheck[id]);
    if ( id === ticketId){
      found = true;
      if( ticketCheck[id] === null ) { verified = 'not sold' }
      else{ verified = 'sold to ' +  ticketCheck[id]; }
    }
  }
    if( !found ){
      verified = 'unknown ticket id';
    }
  return verified;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
   console.log("Tickets : " + JSON.stringify(tickets));
  let ticketCheck = tickets;
  let verified = ''
  let found = false;
  
  for (let id in tickets) {
    //console.log("Who dis? " + ticketCheck[id]);
    if ( id === ticketId){
      found = true;
      if( ticketCheck[id] === null ) { verified = 'invalid ticket !!!' }
      else{ verified = ticketCheck[id]; }
    }
  }
    if( !found ){
      verified = 'invalid ticket !!!';
    }
  return verified;
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  let visitorGTC = visitor;
  if(visitorGTC.gtc){
    console.log("1 " + JSON.stringify(visitorGTC.gtc.version));
    return visitorGTC.gtc.version;
  }else{ 
    console.log("2 " + JSON.stringify(visitorGTC)); 
    return undefined ; 
  }
  
}
