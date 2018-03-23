var balls=[];
var NOB = 13;

function setup() {
  createCanvas(600,600);
  for(var i=0; i<NOB; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(0);
  for(var i=0; i<NOB; i++) {
    balls[i].move();
    balls[i].disp();
    for(var j=0; j<NOB; j++) {
      if(i!=j){
        balls[i].connect(balls[j]);
      }
    }
  }
}

function Ball() {
  this.d=20;
  this.xPos= random(this.d,width-this.d/2);
  this.yPos= random(this.d,height-this.d/2);
  this.xPosf=random(0.1,3);
  this.yPosf=random(0.1,3);
  this.disp=function() {
    fill(255);
    noStroke();
    ellipse(this.xPos,this.yPos,this.d,this.d);
  }
  this.move=function() {
    this.xPos+=this.xPosf;
    this.yPos+=this.yPosf;
    if(this.xPos>width-this.d/2 || this.xPos<this.d/2){this.xPosf=this.xPosf*-1;}
    if(this.yPos>height-this.d/2 || this.yPos<this.d/2){this.yPosf=this.yPosf*-1;}
  }
  this.connect = function(other) {
    if (dist(this.xPos,this.yPos,other.xPos,other.yPos)<100) {
      stroke(255,0,0);
      line(this.xPos,this.yPos,other.xPos,other.yPos);
    }
  }
}