function Food(){
  this.x = floor(random(floor(width/scl)))*scl;
  this.y = floor(random(floor(height/scl)))*scl;

  this.draw = function(){
    fill(255, 100, 0);
    rect(this.x, this.y, scl, scl);
  }
}