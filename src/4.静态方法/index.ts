class Board {
    width:number = 90;
    height:number = 700;
    init() {
        console.log('初始化操作');
    }
    protected static _board?: Board;
    private constructor() {}
    static readonly singleBoard = new Board();
    // static createBoard(): Board {
    //     if (this._board) {
    //         return this._board
    //     }
    //     this._board = new Board();
    //     return this._board;
    // }
}
const b1 = Board.singleBoard
const b2 = Board.singleBoard
console.log(b1===b2);
