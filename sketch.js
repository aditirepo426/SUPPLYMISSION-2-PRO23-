var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, backImg,back,rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	backImg=loadImage("background.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
		
	backS = createSprite(400,350,2800,700);
	backS.addImage(backImg);
	backS.scale=2;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	groundSprite.visible = false;

	rect1 = createSprite(390,675,100,20);
	rect1.shapeColor = "red";

	rect1 = createSprite(340,635,20,100);
	rect1.shapeColor = "red";

	rect1 = createSprite(440,635,20,100);
	rect1.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic: true});
	World.add(world, packageBody);

	rect2 = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
	rect3 = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(100);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}