export default class Board {
    constructor(x = 8, y = 8) {
        this.board = this.matrix(x, y);
    }

    setValues(values) {
        const start = values[0];
        this.board[start[0]][start[1]] = "S";

        for (let i = 1; i < values.length; i++) {
            const val = values[i];
            console.log(val);
            this.board[val[0]][val[1]] = i;
        }
    }

    matrix(x, y) {
        const mat = [];
        for (let i = 0; i < x; i++) {
            const row = [];
            for (let j = 0; j < y; j++) {
                row.push(" ");
            }
            mat.push(row);
        }
        return mat;
    }

    prettyPrint() {
        let line = "";
        for (let i = 0; i < 8; i++) line += "―—————";
        line += "—";
        for (let x = 0; x < this.board.length; x++) {
            console.log(line);
            let values = "";
            for (let y = 0; y < this.board[0].length; y++) {
                values += `│  ${this.board[x][y]}  `;
            }
            values += "│";
            console.log(values);
        }
        console.log(line);
    }
}
