var trex,trexAnimation;
var edges;


function preload(){
trexAnimation = loadAnimation("trex1.png","trex3.png","trex4.png")

}



function setup(){
  createCanvas(600,200)
  
 trex=createSprite(25,180,20,50)
 trex. addAnimation("moving",trexAnimation);
 trex.scale = 0.5

 edges= createEdgeSprites();
 //edges=[leftEdge,rightEdge,topEdge,bottomEdge]

}

function draw(){
  background("black")
  console.log(trex.y)

  if(keyDown("space")){
    trex.velocityY = -10
  }

  trex.velocityY=trex.velocityY+0.8
  

trex.collide(edges[3] )
  drawSprites();
}
