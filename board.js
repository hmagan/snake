class Board {
    constuctor(){
        this.board = new Array(20);
        for(let i = 0; i < 20; i++){
            let temp = new Array(20);
            for(let j = 0; j < 20; j++){
                temp[j] = 0;
            }
            this.board[i] = temp;
        }
    }
}