class Box {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution: 0.3
      }
      this.body = Bodies.rectangle(x,y,30,40,options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      stroke("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };