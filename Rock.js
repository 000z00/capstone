class Rock{
    constructor(x,y,width,heigth){
        var options = {
            isStatic:false
        }
        this.image=loadImage("images/rock1.png");
        this.body=Bodies.rectangle(x,y,width,heigth,options);
        World.add(myWorld,this.body);
        this.heigth=heigth;
        this.width=width;

    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.heigth);
}
}