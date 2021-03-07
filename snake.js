class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.length = 1;
        this.body = [{x: 0, y: 0, type: 2}];
        this.context = document.getElementById("canvas").getContext("2d");
        this.dirx = 1;
        this.diry = 0;
        this.old = {x: 0, y: 0, type: 0};
        this.end = false;
        this.ate = false;
        this.moved = false;

        this.context.fillStyle = "#FFFFFF";
        this.context.fillRect(this.x, this.y, 30, 30);
    }

    move(x, y){
        if(x != this.dirx * -1){
            this.dirx = x;
            this.moved = true;
        }
        if(y != this.diry * -1){
            this.diry = y;
            this.moved = true;
        }
    }

    isFinished(){
        return this.end;
    }

    getAlreadyMoved(){
        return this.moved;
    }

    update(board){
        this.x += 35 * this.dirx;
        this.y += 35 * this.diry;
      
        this.end = (this.x >= 700 || this.x < 0) || (this.y >= 700 || this.y < 0);
        if(this.end){
            return;
        }
        for(let i = 0; i < this.length; i++){
            if(this.x === this.body[i].x && this.y === this.body[i].y){
                this.end = true;
                return;
            }
        }

        this.body.push({x: this.x, y: this.y, type: 2});

        this.ate = this.x === board.food.x && this.y === board.food.y;

        if(!this.ate){
            this.old = this.body.shift();
            this.old.type = 0;
        } else {
            this.length++;
            board.randomFood(this.body, this.length);
        }

        this.context.fillStyle = "#FFFFFF";
        for(let i = 0; i < this.length; i++){
            this.context.fillRect(this.body[i].x, this.body[i].y, 30, 30);
        }

        this.context.fillStyle = "#808080";
        this.context.fillRect(this.old.x, this.old.y, 30, 30);

        this.moved = false;
    }
}