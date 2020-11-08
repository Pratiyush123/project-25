class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.dustbin = loadImage("dustbingreen.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = height;
      this.height = width;
      World.add(world, this.body);
    }
    display(){
      image(this.dustbin,500,327)
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };