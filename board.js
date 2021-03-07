class Board {
    constructor(){
        this.food = {type: 1};
        this.randomFood();
    }

    randomFood(body, length){
        while(true){
            this.food.x = Math.floor(Math.random() * 20) * 35;
            this.food.y = Math.floor(Math.random() * 20) * 35;
            let goodSpot = true;
            for(let i = 0; i < length; i++){
                if(body[i].x === this.food.x && body[i].y === this.food.y){
                    goodSpot = false;
                    break;
                }
            }
            if(goodSpot){
                break;
            }
        }
        document.getElementById("canvas").getContext("2d").fillStyle = "#FF0000";
        document.getElementById("canvas").getContext("2d").fillRect(this.food.x, this.food.y, 30, 30);
    }

    gameOver(points){
        let context = document.getElementById("canvas").getContext("2d");
        context.fillStyle = "#000000";
        context.font = "bold 50px Monospace";
        context.fillText("Game over!", 220, 350);
        context.font = "bold 30px Monospace";
        context.fillText("Points: " + points, 280, 400);
    }
}