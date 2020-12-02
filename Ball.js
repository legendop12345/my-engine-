class Ball {

    //initialize an object
    constructor(x, y, width, height) {
        var option = {

            isStatic: false,
            restitution: 0.8,
            friction: 0.4,
            density: 0.3

        }

        this.ball = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.ball);


    }
    display() {
        var pos = this.ball.position;
        var angle = this.ball.angle;
        push();
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
    }




}