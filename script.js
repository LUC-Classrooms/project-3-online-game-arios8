/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name:
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash";
var Player1;

function setup() {

  createCanvas(600, 400);
  Player1 = new Player(width/2, height * 4/5);
  console.log(Player1);

}

function draw() {
  background(200);
  /* un-comment each line to see it work */
  //splash(); // call the splash screen function (below)
  //play(); // call the play screen function (below)
  //gameOver(); // call the gameOver screen function (below)
  switch (gameState)  { //looks at value of gameState, shecks following cases
    case "splash" :
      splash(); // go to the "splash" screen
      break; 
    case "play" :
      play(); // go to the "play" screen
      break;
    case "gameOver" :
      gameOver(); // go to the "game over" screen
      break;
    default :
      console.log("no match found - check your mousePressed() function!");
  
  }
}

function splash() {
  // this is what you would see when the game starts
  background(200);
  textAlign(CENTER);
  textSize(16);
  text("Let's Play a Game!", width / 2, height / 2);
  textSize(12);
  text("(click the mouse to continue)", width / 2, height / 2 + 30);
}

function play() {
  // this is what you see when the game is running 
  background(0, 200, 0);
  fill(0, 0, 200)
  textAlign(CENTER);
  textSize(16);
  //text("This is where the Game happens", width / 2, height / 2);
 // Player1.x = mouseX; //controls movement where it follows the mouse 
  Player1.display();
}

function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
}

function mousePressed() {

  console.log("click!");
  if(gameState == "splash"){
    gameState = "play";
    } else if(gameState == "play"){
      //gameState = "gameOver"; when mouse is pressed wont go to gameOver screen 
    } else if(gameState == "gameOver"){
      gameState = "splash";
    }
    console.log(gameState);
  
}

function keyPressed() {
  switch(keyCode) {
    case UP_ARROW :
      console.log("up");
      Player1.y -= 30 // move up 30px
    Player1.angle = 0; // no rotation
    if(Player1.y < 0) {
      Player1.y = height;
    } // wrap to bottom
      break;
    case DOWN_ARROW :
      console.log("down");
      Player1.y += 30 // move down 30px
    Player1.angle = PI ; // point down (rotate 180 deg.)
    if(Player1.y > height) {
      Player1.y = 0; // wrap to top
    }
      break;
    case LEFT_ARROW :
      console.log("left");
      Player1.x -=30;
      Player1.angle = PI + HALF_PI;
      if(Player1.x < 0){
        Player1.x = width;
      }
      break;
    case RIGHT_ARROW :
      console.log("right");
      Player1.x += 30;
      Player1.angle = HALF_PI;
      if(Player1.x > width){
        Player1.x = 0;
      }
      break;
    default : // do this if the key doesn't match the list ...
      console.log("press the arrow keys to move player1");
  }
}