var balls=[];
var num = 101;

function setup() {
  createCanvas(800,600);
  for(var i=0; i<num; i++) {
    balls.push(new ball());
  }
}

function draw() {
  background(0);
  for(var i=0; i<num; i++) {
    balls[i].move(i);
    balls[i].disp();
    for(var j=0; j<num; j++) {
      if(i!=j){
        balls[i].connect(balls[j]);
      }
    }
  }
}

function ball() {
  this.d=3;
  this.xPos=random(this.d,width-this.d/1.5);
  this.yPos=random(this.d,height-this.d/1.5);
  this.xPosf=random(0.1,1.25);
  this.yPosf=random(0.1,1.25);
  this.disp=function() {
    fill(255);
    noStroke();
    ellipse(this.xPos,this.yPos,this.d,this.d);
  }
  this.move=function(num) {
    if (isOdd(num)) {
      this.xPos+=this.xPosf;
      this.yPos-=this.yPosf;
    } else {
      this.xPos-=this.xPosf;
      this.yPos+=this.yPosf;
    }
    if(this.xPos>width-this.d/2|| this.xPos<this.d/2){this.xPosf=this.xPosf*-1;}
    if(this.yPos>height-this.d/2 || this.yPos<this.d/2){this.yPosf=this.yPosf*-1;}
  }
  this.connect=function(other) {
    if (dist(this.xPos,this.yPos,other.xPos,other.yPos)<50) {
      stroke(0,255,0);
      line(this.xPos,this.yPos,other.xPos,other.yPos);
    }
  }
}

function isOdd(num){return num % 2;}
