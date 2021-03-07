class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.length = 1;
        this.context = document.getElementById("canvas").getContext("2d");
    }

    move(x, y){
        x *= 2;
        y *= 2;
        if(this.x + x <= 700 && this.x + x > 0){
            this.x += x;
        }
        if(this.y + y <= 700 && this.y + y > 0){
            this.y += y;
        }
        console.log("MOVING");
    }

    update(){
        this.context.fillStyle = "#FFFFFF";
        for(let i = 0; i < this.length; i++){
            this.context.fillRect(this.x, this.y, 30, 30);
        }
        console.log("UPDATING");
    }
}