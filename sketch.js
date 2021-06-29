const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var bogy1,bogy2,bogy3,bogy4,bogy5,bogy6;
var chain1,chan2,chain3,chain4,chain5;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  rock=new Rock(110,200,100,100);
  bogy1=new Bogy(50,170,50,50);
  bogy2 = new Bogy(150,170,50,50);
  bogy3=new Bogy(250,170,50,50);
  bogy4 = new Bogy(350,170,50,50);
  bogy5=new Bogy(450,170,50,50);
  bogy6 = new Bogy(550,170,50,50);
  chain1=new Chain(bogy1.body,bogy2.body);
  chain2=new Chain(bogy2.body,bogy3.body);
  chain3=new Chain(bogy3.body,bogy4.body);
  chain4=new Chain(bogy4.body,bogy5.body);
  chain5=new Chain(bogy5.body,bogy6.body);


}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  

  ground.display();
  bogy1.display();
  bogy2.display();
  bogy3.display();
  bogy4.display();
  bogy5.display();
  bogy6.display(); 
  rock.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  }

  function keyPressed(){
    if(keyCode === RIGHT_ARROW){
      Matter.body.apllyForce
    }



  }
