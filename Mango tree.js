class mangotree{
  constructor(x, y) {
      
      this.x = x;
      this.y = y;
      //this.r = r;
      this.dustbinWidth = 250;
      this.dustbinHeight = 600;
      this.wallThickness = 30;

      this.image = loadImage("sprites/mango tree.png");
      //this.body = Bodies.circle(this.x,this.y,this.r,options);
      this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.dustbinHeight, this.wallThickness, {isStatic: true})
      this.leftWallBody = Bodies.rectangle(0, this.y-this.dustbinWidth/2, this.wallThickness, this.dustbinWeight, {isStatic: true})
      this.rightWallBody = Bodies.rectangle(this.x + this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, {isStatic: false})

      World.add(world, this.bottomBody);
      World.add(world, this.leftWallBody);
      World.add(world, this.rightWallBody);
    }

    display(){

      var posBottom = this.bottomBody.position;
      push();
      translate(posBottom.x, posBottom.y + 10);
      imageMode(CENTER);
      rectMode(CENTER);
      image(this.image, 0, +this.dustbinHeight/2, this.dustbinWidth, this.dustbinWeight);
      pop();
    }
}