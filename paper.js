class Ball {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
      }
     
      this.body = Bodies.circle(x,y,radius,options);
      this.image = loadImage("paper.png")
      World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,35,35)
  }
};