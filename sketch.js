function setup() {
  createCanvas(400, 400);
  background("orange");
}

function draw() {
  
  
  stroke("blue")
  fill("grey")
  
  //console.log(mouseIsPressed);
  
  if (mouseIsPressed) {
  rect (mouseX, mouseY, 150, 150)
 } 
}
