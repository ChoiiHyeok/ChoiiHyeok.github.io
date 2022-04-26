function setup() {
  createCanvas(400, 400);
  background(0);
  for(let i = 10; i <= 50; i ++)
  {
    x = random(255);
    y = random(255);
   strokeWeight(i);
   stroke(random(255), random(255), random(255));
   ellipse(x, y, random(i))
  }
}

