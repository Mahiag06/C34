class Box{
  constructor(x,y,w,h){
    var options = {
      restitution: 1,
      friction:1.0,
      density:0.04
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    this.width = w;
    this.height = h;
  }
  display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    strokeWeight(4)
    stroke("green")
    fill(255);
    rect(0,0,this.width,this.height);
    pop();
  }
}