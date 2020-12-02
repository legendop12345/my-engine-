class Ground {

    //initialize an object
    constructor(x, y, width, height) {
        var option = {

            isStatic: true

        }

        this.ground = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
        World.add(world, this.ground);

    }
    display() {
        var pos = this.ground.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);

    }




}