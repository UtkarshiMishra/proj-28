class ma{
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            'restitution':0.8,
            'friction':1.0 
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("sprites/mango.png");
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
      }

      display(){

        var MaPos = this.body.position;
        push();
        translate(MaPos.x, MaPos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}