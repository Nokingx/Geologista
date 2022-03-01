class Iron{
    constructor (x,y,w,h){
        var options={
            restitution:0.8,
            friction:3,
            density:30
        }
        this.body=Bodies.rectangle(x,y,50,50, options);
        this.w = 50;
        this.h = 50;
        World.add(world,this.body);
    }
    display(){
        var p= this.body.position;
        var angle= this.body.angle;
        push();
        translate(p.x,p.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}