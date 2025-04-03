let speed;
let diam;
let padX, padY;
let dirX, dirY;
let Xpos, Ypos;
let distanceX, distanceY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);
  Xpos = width/2;
  Ypos = height/2;
  speed = 20;
  diam = 50;
  dirX = speed;
  dirY = speed;
  padX = 200;
  padY = 50;
}

function draw() {
  background(0);
  ellipse(Xpos, Ypos, diam, diam);
  rectMode(CENTER);
  rect(mouseX, height-100, padX, padY);
  distanceX = abs(Xpos - mouseX);
  distanceY = abs(Ypos - height + 100);
  
  
  Xpos += dirX;
  Ypos += dirY;
  if(Xpos - diam/2 < 0 || Xpos + diam/2 > width ) {
    dirX *= -1;
    
  }
  else if(Ypos - diam/2 < 0 || Ypos + diam/2 > height) {
    
    dirY *= -1;
  }
  
  if (distanceX < (diam/2 + padX/2) && distanceY < diam/2 + padY/2 && Ypos > height - 125 )
  {
    dirY *= -1;
  }
  
  if(Ypos + diam/2 === height)
  {
    
  }
  
  
}
