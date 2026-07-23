# Exercism Labs

A working repository for tracking my progress through the programming-language tracks and exercises on [Exercism](https://exercism.org/).

## Language Tracks

| Language | Progress document | Solutions |
|---|---|---|
| JavaScript | [JavaScript Progress](docs/javascript.md) | [`solutions/javascript`](solutions/javascript) |

## Repository Structure

```text
.
├── README.md
├── docs/
│   ├── javascript.md
│   └── LANGUAGE-TEMPLATE.md
└── solutions/
    └── javascript/
        └── <exercise-name>/
```

Each language has:

- a solution directory under `solutions/<language>/`
- a progress document under `docs/<language>.md`
- a table recording completed exercises, concepts practiced, and notes

## Adding Another Language

1. Create the solution directory:

   ```bash
   mkdir -p solutions/<language>
   ```

2. Copy the documentation template:

   ```bash
   cp docs/LANGUAGE-TEMPLATE.md docs/<language>.md
   ```

3. Add the new language to the **Language Tracks** table above.

4. Update the language document whenever an exercise is completed.
