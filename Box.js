class Box {
  constructor(x, y, width, height){
  var options = {
    restitution : 0.8,
    density : 1,
    friction : 0.04,

  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height; 
 
  World.add(world, this.body);
  }

  display()
  {
    var pos = this.body.position;
    var ang = this.body.angle;

    push()
    translate(pos.x, pos.y);
    rotate(ang);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(225);
    rect(0,0,this.width, this,height);
    pop()
  }
};
