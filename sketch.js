var canvas;
var block1,block2,block3,block4,block5,block6,block7,block8;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "red"

    block4 = createSprite(705,580,160,30);
    block4.shapeColor="yellow"

    block5 = createSprite(0,20,360,30);
    block5.shapeColor = "black";

    block6 = createSprite(295,20,200,30);
    block6.shapeColor = "pink";

    
    block7 = createSprite(510,20,200,30);
    block7.shapeColor = "green"

    block8 = createSprite(705,20,160,30);
    block8.shapeColor="purple"
    

   

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=10;
    ball.velocityY=10;
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityY=0;
        ball.velocityX=0;

        //write code to stop music
        music.stop();

    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }

    //write code to bounce off ball from the block4

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
        music.play();
    }

    if(block5.isTouching(ball) && ball.bounceOff(block5)){
        ball.shapeColor = "black";
        music.play();
    }

    if(block6.isTouching(ball) && ball.bounceOff(block6)){
        ball.shapeColor = "pink";
        music.play();
    }

    if(block7.isTouching(ball) && ball.bounceOff(block7)){
        ball.shapeColor = "green";
        music.play();
    }

    if(block6.isTouching(ball) && ball.bounceOff(block6)){
        ball.shapeColor = "purple";
        music.play();
    }

    drawSprites();
}
