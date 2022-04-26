
let value = 255;
let weight = 2;
function setup() {
  createCanvas(300, 300);
  background(200);
  
}

function draw() {
  if (mouseIsPressed === true) 
  {
    stroke(value);
    strokeWeight(weight);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyTyped() 
{
  if(key === 'r' || key === 'R')
  {
    value = 'red'
  }
  if (key === 'g' || key === 'G')
  {
    value = 'green'
  }
  if (key === 'b' || key === 'B')
  {
    value = 'blue'
  }
  if(key === 'a' || key === 'A')
  {
    value = 'black'
  }
  if(key === 'd' || key === 'D')
  {
    background(200)
  }
  keyP()
}

function keyP() {
  if (keyIsPressed) 
  {
    if ((key >= '1') && (key <= '9')) 
    {
      weight = map(key, '1', '9', 2, 18);
    }
  }
}

