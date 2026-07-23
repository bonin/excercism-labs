# JavaScript Exercism Progress

## Track Summary

| Item | Value |
|---|---:|
| Track | JavaScript |
| Exercises currently stored | 20 |
| Solution directory | [`solutions/javascript`](../solutions/javascript) |
| Status | In progress |

## Goals

- Strengthen core JavaScript syntax and language fundamentals.
- Practice writing small, testable functions.
- Improve fluency with arrays, objects, strings, destructuring, closures, and higher-order functions.
- Record useful lessons that can be reused outside Exercism.

## Exercise Log

| # | Exercise | Status | Concepts / Notes |
|---:|---|---|---|
| 1 | [Amusement Park](../solutions/javascript/amusement-park) | Completed | Functions, booleans, conditional logic |
| 2 | [Annalyn's Infiltration](../solutions/javascript/annalyns-infiltration) | Completed | Boolean expressions and logical operators |
| 3 | [Bird Watcher](../solutions/javascript/bird-watcher) | Completed | Arrays, loops, aggregation |
| 4 | [Captain's Log](../solutions/javascript/captains-log) | Completed | Random numbers, strings, formatting |
| 5 | [Coordinate Transformation](../solutions/javascript/coordinate-transformation) | Completed | Closures, returned functions, function composition |
| 6 | [Custom Signs](../solutions/javascript/custom-signs) | Completed | String interpolation and manipulation |
| 7 | [Elyse's Destructured Enchantments](../solutions/javascript/elyses-destructured-enchantments) | Completed | Array and object destructuring |
| 8 | [Elyse's Enchantments](../solutions/javascript/elyses-enchantments) | Completed | Array access and mutation |
| 9 | [Freelancer Rates](../solutions/javascript/freelancer-rates) | Completed | Numbers, arithmetic, rounding |
| 10 | [Fruit Picker](../solutions/javascript/fruit-picker) | Completed | Rest parameters and array handling |
| 11 | [Hello World](../solutions/javascript/hello-world) | Completed | Basic functions and module exports |
| 12 | [High Score Board](../solutions/javascript/high-score-board) | Completed | Objects, properties, object updates |
| 13 | [Lasagna Master](../solutions/javascript/lasagna-master) | Completed | Rest parameters, functions, arrays |
| 14 | [Lasagna](../solutions/javascript/lasagna) | Completed | Variables, constants, arithmetic |
| 15 | [Line Up](../solutions/javascript/line-up) | Completed | Template literals and string formatting |
| 16 | [Lucky Numbers](../solutions/javascript/lucky-numbers) | Completed | Type conversion, parsing, validation |
| 17 | [Mixed Juices](../solutions/javascript/mixed-juices) | Completed | Switch statements, loops, arrays |
| 18 | [Poetry Club Door Policy](../solutions/javascript/poetry-club-door-policy) | Completed | String indexing and slicing |
| 19 | [Vehicle Purchase](../solutions/javascript/vehicle-purchase) | Completed | Comparisons and conditional statements |
| 20 | [Elyse's Analytic Enchantments](../solutions/javascript/elyses-analytic-enchantments) | Verify | Add or remove this row based on repository contents |

> The repository page exposed 20 exercise directories, but only 19 names were visible in the initial directory listing. Verify the final exercise name locally and replace the placeholder row above.

## Concepts Practiced

### Fundamentals

- Variables and constants
- Numbers and arithmetic
- Strings and template literals
- Booleans and comparisons
- Conditional logic

### Collections and Data Structures

- Arrays
- Objects
- Destructuring
- Rest parameters
- Array and object mutation

### Functions

- Function declarations
- Returning functions
- Closures
- Function composition
- Small, testable operations

## Lessons and Patterns

Use this section to capture concepts that deserve more than a one-line note.

### Function Composition

Function composition connects small functions so the output from one becomes the input to another.

```javascript
const compose = (outer, inner) => value => outer(inner(value));

const double = value => value * 2;
const addOne = value => value + 1;

const doubleThenAddOne = compose(addOne, double);

doubleThenAddOne(5); // 11
```

### Closures

A closure allows a returned function to retain access to values from the function that created it.

```javascript
const createMultiplier = factor => value => value * factor;

const triple = createMultiplier(3);
triple(4); // 12
```

## Next Steps

- Verify the complete list of JavaScript exercises.
- Add the date completed to future exercise entries.
- Record one meaningful takeaway for each exercise.
- Add links to Exercism exercise pages when useful.
- Create a document for each new language track.

