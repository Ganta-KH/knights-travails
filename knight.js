export default class Knight {
    constructor(start) {
        this.start = start;
        this.moves = this.getMoves();
    }

    getMoves(arr = [], pos = this.start) {
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
}

const knight = new Knight([0, 0]);
console.log(knight.moves);
