var mic, fft, song;

function preload() {
  song = loadSound('bensound-relax.mp3');
}

function setup() {
   createCanvas(710,400);
   noFill();
   song.play();
   // mic = new p5.AudioIn();
   // mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(200);

   var spectrum = fft.analyze();

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
}
//////////
// var osc, fft;

// function setup() {
//   createCanvas(720, 256);
// }

// function draw() {
//   background(255);
//   osc = new p5; // set frequency and type
//   osc.amp(.5);

//   fft = new p5.FFT();
//   osc.start();

//   var waveform = fft.waveform();  // analyze the waveform
//   beginShape();
//   strokeWeight(5);
//   for (var i = 0; i < waveform.length; i++){
//     var x = map(i, 0, waveform.length, 0, width);
//     var y = map(waveform[i], -1, 1, height, 0);
//     vertex(x, y);
//   }
//   endShape();

//   // change oscillator frequency based on mouseX
//   var freq = map(mouseX, 0, width, 40, 880);
//   osc.freq(freq);

//   var amp = map(mouseY, 0, height, 1, .01);
//   osc.amp(amp);
// }
///////////////////////////
// var song;

// function setup() {
//   song = loadSound('balls/bensound-relax.mp3');
//   createCanvas(720, 200);
//   background(255,0,0);
// }

// function mousePressed() {
//   if ( song.isPlaying() ) { // .isPlaying() returns a boolean
//     song.stop();
//     background(255,0,0);
//   } else {
//     song.play();
//     background(0,255,0);
//   }
// }