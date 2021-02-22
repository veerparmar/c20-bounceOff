var fixedRec, movingRec;

function setup() {
  createCanvas(1200,800);
  fixedRec = createSprite(200,200,50,80);
  fixedRec.shapeColor = "green";
  movingRec = createSprite(400,200,30,50);
  movingRec.shapeColor = "green"; 

  fixedRec.velocityX = 5
  movingRec.velocityX = -5
}

function draw() {
  background(0,0,0);  

  if(movingRec.x - fixedRec.x < movingRec.width/2 +  fixedRec.width/2
    && fixedRec.x - movingRec.x < movingRec.width/2 +  fixedRec.width/2
    ){
      fixedRec.velocityX = fixedRec.velocityX * (-1)
      movingRec.velocityX = movingRec.velocityX * (-1)
  }
  if (  movingRec.y - fixedRec.y < movingRec.height/2 + fixedRec.height/2
    && fixedRec.y - movingRec.y < movingRec.height/2 + fixedRec.height/2){
      fixedRec.velocityY = fixedRec.velocityY * (-1)
      movingRec.velocityY = movingRec.velocityY * (-1)
  }
  drawSprites();
}