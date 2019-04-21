let snake;
let food;
let scl = 20;

function setup(){
  createCanvas(600, 600);
  frameRate(10)
  snake = new Snake();
  food = new Food();
}

function draw(){
  background(50);
  snake.update();
  snake.draw();
  food.draw();
  if(snake.eat(food)) food = new Food();
  textAlign(CENTER);
  fill(200);
  text("SCORE: " + snake.score, 300, 575);
  text("HIGH: " + snake.high, 300, 590);
}

function keyPressed(){
  if(keyCode === UP_ARROW) snake.dir(0, -1);
  else if(keyCode === DOWN_ARROW) snake.dir(0, 1);
  else if(keyCode === LEFT_ARROW) snake.dir(-1, 0);
  else if(keyCode === RIGHT_ARROW) snake.dir(1, 0);
}