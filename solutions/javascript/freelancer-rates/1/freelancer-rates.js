// @ts-check
//
// ☝ 🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽   Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

export const HOURLY_RATE = 89;
export const FIXED_BUDGET = 20000;
export const BILLABLE_DAYS = 230; // 22 billable days in a month
export const DISCOUNT_RATE = 42;  // Whole number percent, needs to be converted to fraction in calculations.

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  let dailyRate = ratePerHour * 8;
  return dailyRate;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  let hourlyPay = Math.floor( budget / ( ratePerHour * 8 ) );
  return hourlyPay;
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let dayPay = ratePerHour * 8;
  let leftOverDays = numDays % 22;
  let discountDays = numDays - leftOverDays
  let adjustedDays = ( 1 - discount ) * discountDays + leftOverDays;
  let totalPriceWithDiscount = Math.ceil( adjustedDays * dayPay );

  return totalPriceWithDiscount;
}

let daysPay = dayRate(HOURLY_RATE);
let fixedProjectHourly = daysInBudget(1280, 16);
let monthlyDiscountPrice = priceWithMonthlyDiscount(HOURLY_RATE, BILLABLE_DAYS, DISCOUNT_RATE);