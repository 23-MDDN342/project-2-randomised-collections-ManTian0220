/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */

function sun(){
push(); // circle white
noStroke();
fill(255);
ellipse(0,0,20);
pop();

// shine
push();
noStroke();
fill(243,185,88);
shine(0, 0, 6, 10, 6)
pop();

push();
rotate(45);
stroke(231,85,63);
noFill();
shine(0, 0, 4, 6.5, 6.5)
pop();

push();
rotate(90);
stroke(231,85,63);
noFill();
shine(0, 0, 4, 6, 6)
pop();
//shine end

push(); // sun 
noStroke();
fill(78,107,175);
ellipse(0,0,10);
pop();

push(); // cheek
noStroke();
fill(214,126,66);
ellipse(-3,0,2);
ellipse(3,0,2);
pop();

push(); // eyes
noStroke();
fill(42,33,26);
ellipse(-1,0,1);
// fill(42,33,26);
// ellipse(-1,0,0.8);
pop();

push(); // eyes
noStroke();
fill(42,33,26);
ellipse(1,0,0.5);
// fill(42,33,26);
// ellipse(1,0,0.8);
pop();

push(); // mouth
angleMode(DEGREES);
strokeWeight(0.5);
noFill();
stroke(172,72,37);
arc(0,0, 5, 5, 0, 120);
pop();

}

// shine function  
 function shine(x , y ,n ,outerRadius , innerRadius) {
  angleMode(RADIANS)
  let theta = TAU / n;
   beginShape();

   for(let i = 0; i < n; i++){
    vertex(x+ cos(i * theta) * outerRadius, y + sin(i*theta) * outerRadius);
    vertex(x+ cos((i + 0.5 ) * theta) * innerRadius, y + sin ((i + 0.5) * theta) * innerRadius);
  }
    endShape(CLOSE);
}
// shine function end

function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
