class Box {

    //'this' refer to the object created using this class.
    //constructor() function is invoked whenever a new object is made using the Box class.

    constructor(x,y,width,height){
        
        var options = {
            restitution: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

    }

    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width, this.height);
    }
}