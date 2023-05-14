# Knights Travails

Given enough turns, a chess knight can move from any square on the usual 8x8 chess board to any other square on the board.

This application is a solution to <b><i>Knights Travails</i></b> to find the shortest path between two positions for a chess knight piece.

```
starting point = [0, 0]
ending point = [7, 7]
―—————―—————―—————―—————―—————―—————―—————―——————
│  𝐒  │     │     │     │  2  │     │     │     │
―—————―—————―—————―—————―—————―—————―—————―——————
│     │     │  1  │     │     │     │  3  │     │
―—————―—————―—————―—————―—————―—————―—————―——————
│     │     │     │     │     │     │     │     │
―—————―—————―—————―—————―—————―—————―—————―——————
│     │     │     │     │     │  4  │     │     │
―—————―—————―—————―—————―—————―—————―—————―——————
│     │     │     │     │     │     │     │     │
―—————―—————―—————―—————―—————―—————―—————―——————
│     │     │     │     │     │     │  5  │     │
―—————―—————―—————―—————―—————―—————―—————―——————
│     │     │     │     │     │     │     │     │
―—————―—————―—————―—————―—————―—————―—————―——————
│     │     │     │     │     │     │     │  6  │
―—————―—————―—————―—————―—————―—————―—————―——————
```

## Links

This application was a part of <a href="https://www.theodinproject.com/lessons/javascript-knights-travails">The Odin Project course</a>

## Features

### knight.js

Which is a class for the knight and it brain to find the shortest path.

-   `getMoves` function that returns all the possible next movements from it given position.
-   `knightMoves` returns the path of the knight to it designated position.

### board.js

which is a class for the chess board.

-   `setValues` function that marks the path of the knight in the board.
-   `prettyPrint` which a visualization of the board in the consol (as you can see above).
