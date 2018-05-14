var balls=[];
var num = 101;
var fft;
var osc;
 
function setup() {
  createCanvas(800,600);
  for(var i=0; i<num; i++) {
    balls.push(new ball(i));
  }

  osc = new p5.TriOsc();
  reverb = new p5.Reverb();
  osc.setType('sine');
  osc.amp(.25);
  fft = new p5.FFT();
  osc.start();
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

  var freq = map(mouseX, 0, width, 200, 300);
  osc.freq(freq);
}

function ball(i) {
  this.d=1;
  newR = random(i/2, i);
  this.xPos=random(this.d+newR,width-this.d);
  this.yPos=random(this.d+newR,height-this.d/2.15);
  this.xPosf=random(0.1,.25);
  this.yPosf=random(0.1,(newR*.01));
  this.disp=function() {
    fill(255);
    stroke(0,255,0);
    ellipse(this.xPos,this.yPos,this.d,this.d);
  }
  this.move=function(num) {
    r = num / 6;
    constant = random(.75,2);
    if (isOdd(num)) {
      this.xPos+=this.xPosf*constant;
      this.yPos-=this.yPosf*constant;
    } else {
      this.xPos-=this.xPosf*constant;
      this.yPos+=this.yPosf*constant;
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