var bg, bgImage, marioImg, mario, mario_dead, jump_sound, brickImage, brickGroup, coinImage, coinGroup;
var mushImg, turImg;
var restartImg, restart;
var jump_sound, die_sound, coin_sound;
var coin_score = 0;
var playstate = "play";
function preload() {
    bgImage = loadImage("./images/bgnew.jpg");
    marioImg = loadAnimation("./images/mar1.png", "./images/mar2.png", "./images/mar3.png", "./images/mar4.png", "./images/mar5.png", "./images/mar6.png", "./images/mar7.png");
    brickImage = loadImage("./images/brick.png");
    coinImage = loadAnimation("./images/con1.png", "./images/con2.png", "./images/con3.png", "./images/con4.png", "./images/con5.png", "./images/con6.png",);
    mario_dead = loadAnimation("./images/dead.png");
    mushImg = loadAnimation("./images/mush1.png", "./images/mush2.png", "./images/mush3.png", "./images/mush4.png", "./images/mush5.png", "./images/mush6.png");
    turImg = loadAnimation("./images/tur1.png", "./images/tur2.png", "./images/tur3.png", "./images/tur4.png", "./images/tur5.png")
    restartImg = loadImage("./images/restart.png");

    jump_sound = loadSound("sounds/jump.mp3");
  coin_sound = loadSound("sounds/coinSound.mp3");
  die_sound = loadSound("sounds/dieSound.mp3");
}

function setup() {
    createCanvas(1000, 600);
    bg = createSprite(600, 300);
    bg.addImage(bgImage);
    bg.scale = 0.5;

    mario = createSprite(200, 520, 20, 50);
    mario.scale = 0.2
    mario.addAnimation("running", marioImg);
    mario.addAnimation("collided",mario_dead);
    ground = createSprite(200, 580, 400, 10);

    brickGroup = new Group();
    coinGroup = new Group();
    obstaclesGroup = new Group();

    restart = createSprite(500, 300);
    restart.addImage(restartImg);
    restart.visible = false;
}

function draw() {
    drawSprites();
    bg.velocityX = -5;
    if (playstate === "play") {
        if (bg.x < 100) {
            bg.x = bg.width / 4;
        }
        if (keyDown("space")||mouseDown()) {
            mario.velocityY = -10;
            jump_sound.play();
        }
        mario.velocityY = mario.velocityY + 0.5;

        mario.collide(ground);
        ground.visible = false;

        generateBricks();
        for (let i = 0; i < brickGroup.length; i++) {
            var tmp = brickGroup.get(i);
            if (tmp.isTouching(mario)) {
                mario.collide(tmp);
            }
        }
        if (mario.y < 50) {
            mario.y = 50;
        }
        if (mario.x < 200) {
            mario.x = 200;
        }

        generateCoins();
        for (let i = 0; i < coinGroup.length; i++) {
            var tmp = coinGroup.get(i);
            if (tmp.isTouching(mario)) {
                coin_sound.play();
                tmp.destroy();
                coin_score++;
            }
        }

        generateObstacles();

        // mario will die when touch the obstacle
        if (obstaclesGroup.isTouching(mario)) {
            die_sound.play();
            playstate = "END";
        }
    } // end of if statement
    else if (playstate == "END") {

        // what happened when mario die
        bg.velocityX = 0;
        mario.velocityX = 0;
        mario.velocityY = 0;

        mario.changeAnimation("collided", mario_dead);
        mario.y = 570;


        brickGroup.setVelocityXEach(0);
        coinGroup.setVelocityXEach(0);
        obstaclesGroup.setVelocityXEach(0);

        brickGroup.setLifetimeEach(-1);
        coinGroup.setLifetimeEach(-1);
        obstaclesGroup.setLifetimeEach(-1);

        restart.visible = true;
        // code to restart the Game Again
        if(mousePressedOver(restart)) {
            restartGame();
        }
    }
    textSize(20);
        fill("brown");
        text("Coins Collected: " + coin_score, 450, 50);
}

function generateBricks() {
    if (frameCount % 70 === 0) {
        var brick = createSprite(1200, 120, 40, 10);
        brick.y = random(100, 450);
        brick.addImage(brickImage);
        brick.scale = 0.5;
        brick.velocityX = -5;
        brick.lifetime = 250;
        brickGroup.add(brick);
    }
}

function generateCoins() {
    if (frameCount % 40 == 0) {
        var coin = createSprite(1200, 120, 40, 10);
        coin.y = random(100, 450);
        coin.addAnimation("running", coinImage);
        coin.scale = 0.1;
        coin.velocityX = -5;
        coin.lifetime = 250;
        coinGroup.add(coin);
    }
}

function generateObstacles() {
    if (frameCount % 90 === 0) {
        var obstacle = createSprite(1200, 555, 40, 10);
        obstacle.scale = 0.1;
        obstacle.velocityX = -5;

        var rand = Math.round(random(1, 2));
        switch (rand) {
            case 1:
                obstacle.addAnimation("mush", mushImg);
                break;
            case 2:
                obstacle.addAnimation("turtle", turImg);
                break;
            default:
                break;
        }
        obstacle.lifetime = 250;
        obstaclesGroup.add(obstacle);
    }
}

function restartGame() {
    playstate = "play";
    mario.changeAnimation("running", marioImg);

    brickGroup.destroyEach();
    coinGroup.destroyEach();
    obstaclesGroup.destroyEach();

    coin_score = 0;
    restart.visible = false;
}
