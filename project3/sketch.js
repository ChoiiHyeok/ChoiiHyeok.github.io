function setup() {
  createCanvas(300, 300);
  background(0);
}
 function draw() {
  background(0);
  rectMode(CENTER);
  for (let i = 250; i >= 50; i -= 50) 
  {
   rect(width/2, height/2, i, i);
  }
  mousePressed()
 }

function mousePressed() {
  if(mouseIsPressed)
  {
    push()
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 10, 10);
    pop()
  }
}


