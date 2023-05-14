import Knight from "./knight.js";

// test 1
const knight1 = new Knight([0, 0]);
console.log(knight1.knightMoves([7, 7]))
knight1.board.prettyPrint();

// test 2
const knight2 = new Knight([5, 3]);
console.log(knight2.knightMoves([4, 7]))
knight2.board.prettyPrint();

// test 3
const knight3 = new Knight([3, 4]);
console.log(knight3.knightMoves([3, 6]))
knight3.board.prettyPrint();

// test 4
const knight4 = new Knight([5, 5]);
console.log(knight4.knightMoves([0, 3]))
knight4.board.prettyPrint();

// test 5
const knight5 = new Knight([3, 5]);
console.log(knight5.knightMoves([7, 1]))
knight5.board.prettyPrint();