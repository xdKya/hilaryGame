var fundo ;
var kim;
var kimImg;
var cam;
var ron;
var ronImg;
var barril;
var gamestate="start"
var buton
var player1 = true

var paredeE
var paredeD
var paredeC

function preload() {

fundo=loadImage("rua.jpg")
kimImg=loadImage("personagem.png")
ronImg=loadImage("personagem(2).png")

}

function setup() {
  createCanvas(1000, 500);

 


  kim=createSprite(200,350)
  kim.addImage(kimImg)
  kim.scale=1
  
  ron=createSprite(600,350)
  ron.addImage(ronImg)
  ron.scale=1

  paredeC = createSprite(width/2,height/2,30,height)
  paredeC.shapeColor="lightgreen"

   paredeE = createSprite(0,height/2,10,height)
  paredeE.shapeColor="lightgreen"

   paredeD = createSprite(width,height/2,10,height)
  paredeD.shapeColor="lightgreen"

  //barril=createSprite(500,280,30,40)
  
  // buton=createButton("")
  // buton.class("buton")
}

function draw() {
  background("black");
  
  if(gamestate==="start"){
   // imageMode(CENTER)
    //image(fundo,500,350)
   // camera.zoom=1.5
    controles();



console.log(player1)
if(player1){
//  camera.x = kim.x
if(kim.y>=250){
  camera.y = 250
}else{
  camera.y = kim.y
}
 
}
if(!player1){
 // camera.x = ron.x
 if(ron.y>=250){
  camera.y = 250
}else{
  camera.y = ron.y
}
}

fill("white")
text("coordenadas Kim:"+kim.x+","+kim.y,camera.x - 500,camera.y - 100)
text("coordenadas ron:"+ron.x+","+ron.y,camera.x - 300,camera.y - 100)
  }
  else if(gamestate==="end"){




  }

  kim.bounceOff(paredeC)
  kim.bounceOff(paredeD)
  kim.bounceOff(paredeE)
  
  ron.bounceOff(paredeC)
  ron.bounceOff(paredeD)
  ron.bounceOff(paredeE)

  

  drawSprites()
}

function controles(){


  if(keyDown(UP_ARROW)){
    kim.y-=10
    
  }
  if(keyDown(DOWN_ARROW)&& kim.y <=430){
    kim.y+=10
  }
  if(keyDown(RIGHT_ARROW)){
    kim.x+=10
    kim.mirrorX(-1)
  }
  if(keyDown(LEFT_ARROW)){
    kim.x-=10
    kim.mirrorX(1)
  }

  if(keyDown("w")){
    ron.y-=10
  }
  if(keyDown("s")&& ron.y <=430){
    ron.y+=10
  }
  if(keyDown("d")){
    ron.x+=10
    ron.mirrorX(-1)
  }
  if(keyDown("a")){
    ron.x-=10
    ron.mirrorX(1)
  }


}

function keyReleased(){
  if(keyCode ===32){
    if(!player1){
      player1 = true
    }else if(player1){
      player1 = false
    }
  }
}