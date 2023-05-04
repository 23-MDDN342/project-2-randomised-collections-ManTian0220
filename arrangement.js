/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [0];
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<4; j++) {
      let y = h/2 + h*i*1*1.5;
      let x = w/2 + w*j*2;
      let number = int(random(w/20, w/8));
     
        // center face
        // let eye_value = int(random(2,4));
        // let tilt_value = random(-45, 45);
        // let mouth_value = random(3,4);
        // let is_cyclops = random(0, 100);
         let colour = int(random(0,3));
        let Outercolour= int(random(0,3));
       let eyecolour= int(random(0,2));
     let outerpoints = int(random(6,12));
     let innerpoints = int(random(4,16));
     let Innercolour = int(random(0,3));
     let mouth_a = int(random(10,90));
     let mouth_b = int(random(91,180));
     let eye_left = random(1, 2);
     let eye_right = random(1,2);
     let face_colour = int(random(0,3));
    
        // if(is_cyclops < 10) {
          // eye_value = 1;
          // tilt_value = random(-5, 5);
          // mouth_value = random(0, 1.7);
          
        // }

        push();
        translate(x, y);
        scale(number);
        sun(eyecolour,outerpoints,Outercolour,innerpoints,Innercolour,colour,mouth_a, mouth_b,eye_left,eye_right,face_colour);
        pop();

        let sunvalue = random(0,100);
        if(sunvalue <= 40){
          Outercolour= int(random(0));
          face_colour = int(random(0));
          Innercolour = int(random(0));
        }else{
          Outercolour= int(random(1));
          face_colour = int(random(1));
          Innercolour = int(random(1));
        }
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
