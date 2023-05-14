import Board from "./board.js";

export default class Knight {
    constructor(start, x = 8, y = 8) {
        this.start = start;
        this.x = x;
        this.y = y;
        this.board = new Board(x, y)
    }

    getMoves(pos = this.start) {
        const arr = [];
        // top top
        if (pos[0] - 2 > -1) {
            if (pos[1] - 1 >= 0) arr.push([pos[0] - 2, pos[1] - 1]);
            if (pos[1] + 1 < this.y) arr.push([pos[0] - 2, pos[1] + 1]);
        }
        // top bottom
        if (pos[0] - 1 > -1) {
            if (pos[1] - 2 >= 0) arr.push([pos[0] - 1, pos[1] - 2]);
            if (pos[1] + 2 < this.y) arr.push([pos[0] - 1, pos[1] + 2]);
        }
        // bottom top
        if (pos[0] + 1 < this.x) {
            if (pos[1] - 2 > -1) arr.push([pos[0] + 1, pos[1] - 2]);
            if (pos[1] + 2 < this.y) arr.push([pos[0] + 1, pos[1] + 2]);
        }
        // bottom bottom
        if (pos[0] + 2 < this.x) {
            if (pos[1] - 1 > -1) arr.push([pos[0] + 2, pos[1] - 1]);
            if (pos[1] + 1 < this.y) arr.push([pos[0] + 2, pos[1] + 1]);
        }
        return arr;
    }

    knightMoves(end, start = this.start) {
        const queue = [start];
        const visited = new Set([start.toString()]);
        const road = {};

        while (queue.length !== 0) {
            start = queue.shift();
            if (end.toString() === start.toString())
                return this.path(this.start, end, road);
            const moves = this.getMoves(start);
            for (const move of moves) {
                if (!visited.has(move.toString())) {
                    queue.push(move);
                    visited.add(move.toString());
                    road[move] = start;
                }
            }
        }
        return this.path(this.start, end, road);
    }

    path(start, end, nodes) {
        const path = [];
        path.push(end);
        while (end.toString() !== start.toString()) {
            end = nodes[end.toString()];
            path.push(end);
        }
        path.reverse();

        // set positions in the board
        this.board.setValues(path)
        return path;
    }
}
