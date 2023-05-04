[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/TMOxyln0)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10680811&assignment_repo_type=AssignmentRepo)
## 2023 MDDN342 Assignment 2: Randomised Collections
**This is where you talk about your project!**

My project is to make random sunny face.
Now Linked everthing to the editors. Added colour changes and make the code more readable.

//Random parameters

colour = int(random(0,3)); // Control cheek colour.
Outercolour= int(random(0,3)); // Control outershine colour.
eyecolour= int(random(0,2)); // Control eye colour.
outerpoints = int(random(6,12));// Control the number of the outerpoints.
innerpoints = int(random(4,16));// Control the number of the innerpoints.
Innercolour = int(random(0,3));// Control innershine colour.
mouth_a = int(random(10,90));// Control mouth point a.
mouth_b = int(random(91,180));// Control mouth point b.
eye_left = random(1, 2);// Control left eye size.
eye_right = random(1,2);// Control right eye size.
face_colour = int(random(0,3));// Control sunface colour.

// Use 'if' to make the random sun colour match to my designed colour, like pink outer colour show along with yellow sun face.

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