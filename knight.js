export default class Knight {
    constructor(start) {
        this.start = start;
    }

    getMoves(pos = this.start) {
        const arr = [];
        // top top
        if (pos[0] - 2 > -1) {
            if (pos[1] - 1 >= 0) arr.push([pos[0] - 2, pos[1] - 1]);
            if (pos[1] + 1 < 8) arr.push([pos[0] - 2, pos[1] + 1]);
        }
        // top bottom
        if (pos[0] - 1 > -1) {
            if (pos[1] - 2 >= 0) arr.push([pos[0] - 1, pos[1] - 2]);
            if (pos[1] + 2 < 8) arr.push([pos[0] - 1, pos[1] + 2]);
        }
        // bottom top
        if (pos[0] + 1 <= 7) {
            if (pos[1] - 2 > -1) arr.push([pos[0] + 1, pos[1] - 2]);
            if (pos[1] + 2 < 8) arr.push([pos[0] + 1, pos[1] + 2]);
        }
        // bottom bottom
        if (pos[0] + 2 < 8) {
            if (pos[1] - 1 > -1) arr.push([pos[0] + 2, pos[1] - 1]);
            if (pos[1] + 1 < 8) arr.push([pos[0] + 2, pos[1] + 1]);
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
            for (let move of moves) {
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
        console.log(nodes);
        path.push(end);
        while (end.toString() !== start.toString()) {
            end = nodes[end.toString()];
            path.push(end);
        }
        path.reverse();
        return path;
    }
}

const knight = new Knight([0, 0]);

console.log(knight.bfs([1, 7]));
