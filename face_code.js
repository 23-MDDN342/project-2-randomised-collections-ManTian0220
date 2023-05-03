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

function sun(eyecolour,outerpoints,Outercolour, innerpoints,Innercolour, colour,mouth_a,mouth_b,eye_left,eye_right,face_colour){

///////////////////////////// Outershine///////////////////////////////// 
push();
if (Outercolour == 0){
noStroke();
fill(251,123,202);//pink
outer_shine(0, 0, outerpoints, 10, 6)
}
else if(Outercolour == 1){
  noStroke();
fill(254,195,61);// yellow
outer_shine(0, 0, outerpoints, 10, 6)
}
else if(Outercolour == 2){
  noStroke();
fill(254,69,46);//red
outer_shine(0, 0, outerpoints, 10, 6)
}
pop();
///////////////////////////// Outershine end///////////////////////////////// 

///////////////////////////// Innershine///////////////////////////////// 
push();
if (Innercolour == 0){
strokeWeight(0.2);
rotate(45);
stroke(236,116,22);//orange
noFill();
inner_shine(0, 0, innerpoints, 6.5, 6.5)
pop();

push();
strokeWeight(0.2);
rotate(90);
stroke(236,116,22);//orange
noFill();
inner_shine(0, 0, innerpoints, 6, 6)
}
else if(Outercolour == 1){
  strokeWeight(0.2);
  rotate(45);
  stroke(52,53,110);//dark blue
  noFill();
  inner_shine(0, 0, innerpoints, 6.5, 6.5)
  pop();
  
  push();
  strokeWeight(0.2);
  rotate(90);
  stroke(52,53,110);//dark blue
  noFill();
  inner_shine(0, 0, innerpoints, 6, 6)
}
else if(Outercolour == 2){
  strokeWeight(0.2);
  rotate(45);
  stroke(255);//white
  noFill();
  inner_shine(0, 0, innerpoints, 6.5, 6.5)
  pop();
  
  push();
  strokeWeight(0.2);
  rotate(90);
  stroke(255);//white
  noFill();
  inner_shine(0, 0, innerpoints, 6, 6)
}
pop();
///////////////////////////// Innershine end///////////////////////////////// 

///////////////////////////// Face///////////////////////////////// 
push(); // sun 
if (face_colour == 0){
noStroke();
fill(254,195,61);//yellow
ellipse(0,0,10);
}
else if(face_colour  == 1){
  noStroke();
  fill(254,69,46);//red
  ellipse(0,0,10);
}
else if(face_colour  == 2){
  noStroke();
fill(251,123,202);//pink
ellipse(0,0,10);
}
pop();
///////////////////////////// Face end///////////////////////////////// 

///////////////////////////// Cheek///////////////////////////////// 
push(); // cheek
if (colour == 0){
  noStroke();
  fill(254,69,46); // red
  ellipse(-3,0,2);
  ellipse(3,0,2);
}
else if(colour == 1){
  noStroke();
  fill(251,123,202); // pink
  ellipse(-3,0,2);
  ellipse(3,0,2);
}
else if(colour == 2){
  noStroke();
  fill(236,116,22); // orange
  ellipse(-3,0,2);
  ellipse(3,0,2);
}
pop();
///////////////////////////// Cheek end///////////////////////////////// 

///////////////////////////// Eyes///////////////////////////////// 
console.log(eyecolour)
push();// eyes
if(eyecolour == 0){
  push(); 
  noStroke();
  fill(52,53,110);//dark blue
  ellipse(-1,0,eye_left);
  pop();
  
  push(); // eyes
  noStroke();
  fill(52,53,110);//dark blue
  ellipse(1,0,eye_right);
  pop();
}
else if(eyecolour == 1){
  push(); 
  noStroke();
  fill(0);//black
  ellipse(-1,0,eye_left);
  pop();
  
  push(); // eyes
  noStroke();
  fill(0); //black
  ellipse(1,0,eye_right);
  pop();
}
else if(eyecolour == 2){
  push(); 
  noStroke();
  fill(254,195,61);//yellow
  ellipse(-1,0,eye_left);
  pop();
  
  push(); // eyes
  noStroke();
  fill(254,195,61);//yellow
  ellipse(1,0,eye_right);
  pop();
}
pop();
///////////////////////////// Eyes end///////////////////////////////// 

///////////////////////////// Mouth///////////////////////////////// 
push(); // mouth
strokeWeight(0.5);
angleMode(DEGREES);
noFill();
stroke(172,72,37);
arc(0,0, 5, 5, mouth_a, mouth_b);
pop();
///////////////////////////// Mouth end///////////////////////////////// 

}

///////////////////////////// Outerpoints function///////////////////////////////// 
  function outer_shine(x , y ,outerpoints ,outerRadius , innerRadius) {
  angleMode(RADIANS)
  let theta = TAU / outerpoints;
   beginShape();
   
   for(let i = 0; i < outerpoints; i++){
    vertex(x+ cos(i * theta) * outerRadius, y + sin(i*theta) * outerRadius);
    vertex(x+ cos((i + 0.5 ) * theta) * innerRadius, y + sin ((i + 0.5) * theta) * innerRadius);
  }
    endShape(CLOSE);
}
///////////////////////////// Outerpoints function end///////////////////////////////// 

///////////////////////////// Innerpoints function///////////////////////////////// 
function inner_shine(x , y ,innerpoints ,outerRadius , innerRadius) {
  angleMode(RADIANS)
  let theta = TAU / innerpoints;
   beginShape();

   for(let i = 0; i < innerpoints; i++){
    vertex(x+ cos(i * theta) * outerRadius, y + sin(i*theta) * outerRadius);
    vertex(x+ cos((i + 0.5 ) * theta) * innerRadius, y + sin ((i + 0.5) * theta) * innerRadius);
  }
    endShape(CLOSE);
}
///////////////////////////// Innerpoints function end///////////////////////////////// 

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
