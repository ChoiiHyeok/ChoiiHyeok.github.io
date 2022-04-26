let x = 0, y = 0, x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0;
function setup() {
  createCanvas(400, 400);
  background(0); 
  x=width/2;
  y=height-40;
}

function draw() {
    background(0);
    if (keyIsDown(LEFT_ARROW)) 
    {
      x -= 5;
    } 
    if (keyIsDown(RIGHT_ARROW)) 
    {
     x += 5;
    } 
    if (keyIsDown(UP_ARROW)) 
    {
      y -= 5;
    } 
    if (keyIsDown(DOWN_ARROW))
    {
      y += 5;
    }

     ellipse(x, y, 50, 50);
     y1 -= 5;

     x2 -= 5;
     y2 -= 5;

     x3 += 5;
     y3 -= 5;
     
     push()
     fill(255, 255, 0);
     ellipse(x1, y1, 10);

     fill(255, 255, 0);
     ellipse(x2, y2, 10);

     fill(255, 255, 0);
     ellipse(x3, y3, 10);
     pop();
  }
  
  function keyPressed()
{
  if( key == 'z')
  {   
    x1 = x;              
    y1 = y;              
  }
  if( key == 'x')
  {   
    x1 = x;              
    y1 = y;   
    
    x2 = x;
    y2 = y;

    x3 = x;
    y3 = y;
  }
}