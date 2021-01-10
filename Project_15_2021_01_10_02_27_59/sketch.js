var alien1, alien2, fruit_1, fruit_2, fruit_3, fruit_4, gameOver1, gameOver, knifeSound, knife, sword, fruitGroup, EnemyGroup, fruit, f1, monster, m1, score=0, fruit1, Fruit, FruitGroup;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
alien_1 = loadImage("alien1.png") 
alien_2 = loadImage("alien2.png")
  
fruit_1 = loadImage("fruit1.png")
fruit_2 = loadImage("fruit2.png")
fruit_3 = loadImage("fruit3.png")
fruit_4 = loadImage("fruit4.png")

gameOver1 = loadSound("gameover.mp3")
gameOver = loadImage("gameover.png")
  
knifeSound = loadSound("knifeSwooshSound.mp3")
knife = loadImage("sword.png")
 
}

function setup(){
createCanvas(400, 400);

background = createSprite(0, 0, 400, 400);
background.scale = 3;
background.shapeColor = "pink";

 fruitGroup = createGroup();  
 EnemyGroup = createGroup();
    
sword = createSprite (50, 50, 10, 10);
sword.addImage(knife);
sword.scale = 0.5;

  
}

function draw(){
background.velocityX = -3;
if(background.x<0){
background.x = 400;
}


  
if(gameState===PLAY){
sword.x = mouseX;
sword.y = mouseY;
Fruit(); 
fruits();
Enemy();
if(EnemyGroup.isTouching(sword)){
  gameState = END;
  EnemyGroup.destroyEach();
  gameOver1.play();
  }
 if(fruitGroup.isTouching(sword)){
 fruitGroup.destroyEach();
score=score+2;
knifeSound.play();
    }
   }
else if(gameState===END){
  sword.addImage(gameOver);
  sword.scale = 1.5;
  sword.x = 200;
  sword.y = 200;

 }  
drawSprites();
text("Score:"+score,340,20);
}

function fruits (){
 if (frameCount%80==0){
  fruit = createSprite(400, 200, 20, 20);
  fruit.scale = 0.2;
   
   f1= Math.round(random(1,4));
   if (f1 == 1){
      fruit.addImage(fruit_1);  
   }
  else if (f1 == 2){
      fruit.addImage(fruit_2);  
   }
  else if (f1 == 3){
      fruit.addImage(fruit_3);  
   }
  else {
      fruit.addImage(fruit_4);  
   }
 fruit.y = Math.round(random(50,340));
   
 fruit.velocityX = -(7+score/10)
 fruit.setLifetime =100;
 fruitGroup.add(fruit);   
     }
}
function Fruit(){
if (frameCount%60==0){
  fruit1 = createSprite(0, 200, 20, 20);
  fruit1.scale = 0.2;
   
   f1= Math.round(random(1,4));
   if (f1 == 1){
      fruit1.addImage(fruit_1);  
   }
  else if (f1 == 2){
      fruit1.addImage(fruit_2);  
   }
  else if (f1 == 3){
      fruit1.addImage(fruit_3);  
   }
  else {
      fruit1.addImage(fruit_4);  
   }
 fruit1.y = Math.round(random(50,340));
   
 fruit1.velocityX = (7+score/10)
 fruit1.setLifetime =100;
 fruitGroup.add(fruit1);   
     
}
}


 

function Enemy(){
if(frameCount%200==0){
 monster = createSprite(400, 200, 20, 20); 

  monster.addImage(alien_1);  
     
  
 monster.y = Math.round(random(100, 300));
 monster.velocityX = -(8+score/20);
monster.setLifetime =50;
EnemyGroup.add(monster);
  

  
    } 

     
}



