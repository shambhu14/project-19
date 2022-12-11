var car,car1,car2,car3,car4,road;
var carImg,car1Img,car2Img,car3Img,car4Img,roadImg;
var OVERTAKES = 0;
var car1Group,car2Group,car3Group,car4Group;
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
  carImg = loadImage("car.png");
  car1Img = loadImage("car 1.png");
  car2Img = loadImage("car 2.png");
  car3Img = loadImage("car3.png");
  car4Img = loadImage("car 4.png");
  roadImg = loadImage("Road.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    road = createSprite(width/2,200);
    road.addImage(roadImg);
    road.velocityY = 4;

    car = createSprite(width/2,height-60,20,20);
    car.addImage("car_running",carImg);
    car.scale = 0.08;

   car1Group = new Group();
   car2Group = new Group();
   car3Group = new Group();
   car4Group = new Group();

}

function draw(){
   
    if(gameState===PLAY){
        background(0);
        edges = createEdgeSprites();
        textSize(40);
        fill(red);
        text("press SPACE to start the game ",width/2,height/2);

        if(keyDown("Space")){

        car.x = World.mouseX;
        car.collide(edges);

        }
       
        if(road.Y > height){
            road.Y = height/2;

        }

        Car1();
        Car2();
        Car3();
        Car4();

        if(car1.isTouching(car)){
            gameState=END;
          carsGroup.destroyEach();
           carsGroup.setVelocityEach(0);

        }

        if(car2.isTouching(car)){
         gameState=END;
           carsGroup.destroyEach();
           carsGroup.setVelocityEach(0);

        }

        if(car3.isTouching(car)){
            gameState=END;
            carsGroup.destroyEach();
           carsGroup.setVelocityEach(0);

        }

        if(car4.isTouching(car)){
           gameState=END;
           carsGroup.destroyEach();
           carsGroup.setVelocityEach(0);

        }

    }


    drawSprites();
    textSize(20);
    fill(20);
    text("OVERTAKES:"+OVERTAKES,width-150,30);

    if(gameState===END){
        textSize(40);
        fill(blue);
        text("GAMEOVER",width/2,height/2);
        carsGroup.destroyEach();
        road.velocityY = 0;
        OVERTAKES = 0;

        textSize(20);
        fill(red);
        text("press enter to restart",width/2,height-150);
        
        if(keyDown("Enter")){
           reset();
        }

    }
    


}


function reset(){
    gameState = PLAY;

}

function car1(){
 if(frameCount % 200 == 0){
    var car1 = createSprite(Math.round(random(50,width-50),height-40,10,10));
    car1.addImage(car1Img);
    car1.scale = 0.08;
    car1.velocityY = -4;
    car1.lifetime = 200;
    carsGroup.add(car1);

 }
}

function Car2(){
    if(frameCount % 200 == 0){
       var car2 = createSprite(Math.round(random(50,width-50),height-40,10,10));
       car2.addImage(car1Img);
       car2.scale = 0.08;
       car2.velocityY = -4;
       car2.lifetime = 200;
       carsGroup.add(car1);
   
    }
   }
   

   function Car3(){
    if(frameCount % 200 == 0){
       var car3 = createSprite(Math.round(random(50,width-50),40,10,10));
       car3.addImage(car3Img);
       car3.scale = 0.08;
       car3.velocityY = 4;
       car3.lifetime = 200;
       carsGroup.add(car3);
   
    }
   }

   function car4(){
    if(frameCount % 200 == 0){
       var car4 = createSprite(Math.round(random(50,width-50),40,10,10));
       car4.addImage(car4Img);
       car4.scale = 0.08;
       car4.velocityY = 4;
       car4.lifetime = 200;
       carsGroup.add(car4);
   
    }
   }
   