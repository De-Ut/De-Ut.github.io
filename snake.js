function Snake(){
  this.high = 1;
  this.score = 1;
  this.x = 0;
  this.y = 0;
  this.xDir = 1;
  this.yDir = 0;
  this.tail = null;
  this.grow = false;

  this.update = function(){
    if(!this.grow){
      let current = this;
      let x = this.x; let y = this.y;
      while(current.tail != null){
        current = current.tail;
        let k;
        k = current.x; current.x = x; x = k;
        k = current.y; current.y = y; y = k;
      }
    }
    this.x = this.x + this.xDir*scl;
    this.y = this.y + this.yDir*scl;
    if(this.x > width-scl) this.x = 0;
    if(this.x < 0) this.x = width-scl;
    if(this.y > height-scl) this.y = 0;
    if(this.y < 0) this.y = height-scl;
    this.grow = false;
    let current = this; let newscore = 0;
    while(current.tail != null){
      if(current.dead(this)){
        this.score = newscore+1;
        break;
      }
      current = current.tail;
      newscore++;
    }
  }

  this.draw = function(){
    current = this;
    while(current.tail != null){
      current = current.tail;
      fill(255);
      rect(current.x, current.y, scl, scl);
    }
    fill(255);
    rect(this.x, this.y, scl, scl);
  }

  this.dir = function(xDir, yDir){
    if(this.xDir == xDir || this.yDir == yDir) return;
    this.xDir = xDir;
    this.yDir = yDir;
  }

  this.eat = function(food){
    var d = dist(this.x, this.y, food.x, food.y);
    if(d < 1){
      fill(255);
      rect(this.x, this.y, scl, scl);
      this.score++;
      if(this.score > this.high) this.high = this.score;
      this.grow = true;
      var clone = new Snake();
      clone.x = this.x;
      clone.y = this.y;
      clone.tail = this.tail;
      this.tail = clone;
      return true;
    }
    return false;
  }

  this.dead = function(head){
    var d = dist(this.tail.x, this.tail.y, head.x, head.y);
    if(d < 1){
      current = this;
      while(current.tail != null){
        fill(100);
        rect(current.x, current.y, scl, scl);
        current = current.tail;
      }
      this.tail = null;
      return true;
    }
    return false;
  }
}