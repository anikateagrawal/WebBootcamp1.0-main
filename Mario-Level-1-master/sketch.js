var bg,bgImage,marioImg,mario,jump_sound,brickImage,brickGroup,coinImage,coinGroup;

function preload(){
    bgImage=loadImage("./images/bgnew.jpg");
    marioImg=loadAnimation("./images/mar1.png","./images/mar2.png","./images/mar3.png","./images/mar4.png","./images/mar5.png","./images/mar6.png","./images/mar7.png");
    brickImage=loadImage("./images/brick.png");
    coinImage=loadAnimation("./images/con1.png","./images/con2.png","./images/con3.png","./images/con4.png","./images/con5.png","./images/con6.png",);
}

function setup() {
createCanvas(1000, 600);
bg=createSprite(600,300);
    bg.addImage(bgImage);
    bg.scale=0.5;

mario=createSprite(200,520,20,50);
mario.scale=0.2
mario.addAnimation("running",marioImg);

ground=createSprite(200,580,400,10);

brickGroup=new Group();
coinGroup=new Group();
}

function draw() {
    drawSprites();
    bg.velocityX=-5;

    if(bg.x <100){
        bg.x=bg.width/4;
    }
    if(keyDown("space"))
    {
        mario.velocityY=-10;
    }
    mario.velocityY=mario.velocityY+0.5;

    mario.collide(ground);
    ground.visible=false;

    generateBricks();
    for(let i=0;i<brickGroup.length;i++)
    {
        var tmp=brickGroup.get(i);
        if(tmp.isTouching(mario))
        {
            mario.collide(tmp);
        }
    }
    if(mario.y<50)
    {
        mario.y=50;
    }
    if(mario.x<200)
    {
        mario.x=200;
    }

    generateCoins();
    for(let i=0;i<coinGroup.length;i++)
    {
        var tmp=coinGroup.get(i);
        if(tmp.isTouching(mario))
        {
            tmp.destroy();
        }
    }
}

function generateBricks()
{
    if(frameCount%70===0){
        var brick=createSprite(1200,120,40,10);
        brick.y=random(100,450);
        brick.addImage(brickImage);
        brick.scale=0.5;
        brick.velocityX=-5;
        brick.lifetime=250;
        brickGroup.add(brick);
    }
}

function generateCoins(){
    if(frameCount%40==0){
        var coin=createSprite(1200,120,40,10);
        coin.y=random(100,450);
        coin.addAnimation("running",coinImage);
        coin.scale=0.1;
        coin.velocityX=-5;
        coin.lifetime=250;
        coinGroup.add(coin);
    }
}