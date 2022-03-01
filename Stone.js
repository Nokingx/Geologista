class Stone{
    constructor (x,y,w,h){
        var options={
            restitution:0.8,
            friction:0.9,
            density:12
        }
        this.body=Bodies.rectangle(x,y,w,h, options);
        this.w = w;
        this.h = h;
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