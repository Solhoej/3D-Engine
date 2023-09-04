p1 = [-20, 20, -100];
p2 = [20, 20, -100];
p3 = [-20, -18, -100];
p4 = [20, -18, -100];
p5p = [-20, 20, -105];
p6 = [20, 20, -105];
p7 = [-20, -18, -105];
p8 = [20, -18, -105];

fart = 1;

function setup() {
  createCanvas(400, 400);

  xflyt = width/2;
  yflyt = height/2;
}

function draw() {
  background(220);
  p1[2] += fart; 
  p2[2] += fart; 
  p3[2] += fart; 
  p4[2] += fart; 
  p5p[2] += fart; 
  p6[2] += fart; 
  p7[2] += fart; 
  p8[2] += fart; 

  ys1 = (p1[1]*-50)/p1[2];
  xs1 = (p1[0]*-50)/p1[2];

  ys2 = (p2[1]*-50)/p2[2];
  xs2 = (p2[0]*-50)/p2[2];

  ys3 = (p3[1]*-50)/p3[2];
  xs3 = (p3[0]*-50)/p3[2];

  ys4 = (p4[1]*-50)/p4[2];
  xs4 = (p4[0]*-50)/p4[2];

  ys5 = (p5p[1]*-50)/p5p[2];
  xs5 = (p5p[0]*-50)/p5p[2];

  ys6 = (p6[1]*-50)/p6[2];
  xs6 = (p6[0]*-50)/p6[2];

  ys7 = (p7[1]*-50)/p7[2];
  xs7 = (p7[0]*-50)/p7[2];

  ys8 = (p8[1]*-50)/p8[2];
  xs8 = (p8[0]*-50)/p8[2];



  stroke(2);
  line(xs1+xflyt,ys1+yflyt,xs2+xflyt,ys2+yflyt);
  line(xs2+xflyt,ys2+yflyt,xs4+xflyt,ys4+yflyt);
  line(xs3+xflyt,ys3+yflyt,xs1+xflyt,ys1+yflyt);
  line(xs3+xflyt,ys3+yflyt,xs4+xflyt,ys4+yflyt);
  line(xs5+xflyt,ys5+yflyt,xs6+xflyt,ys6+yflyt);
  line(xs6+xflyt,ys6+yflyt,xs8+xflyt,ys8+yflyt);
  line(xs7+xflyt,ys7+yflyt,xs5+xflyt,ys5+yflyt);
  line(xs7+xflyt,ys7+yflyt,xs8+xflyt,ys8+yflyt);
  line(xs1+xflyt,ys1+yflyt,xs5+xflyt,ys5+yflyt);
  line(xs2+xflyt,ys2+yflyt,xs6+xflyt,ys6+yflyt);
  line(xs3+xflyt,ys3+yflyt,xs7+xflyt,ys7+yflyt);
  line(xs4+xflyt,ys4+yflyt,xs8+xflyt,ys8+yflyt);

  text("P1",xs1+xflyt,ys1+yflyt);
  text("P2",xs2+xflyt,ys2+yflyt);
  text("P3",xs3+xflyt,ys3+yflyt);
  text("P4",xs4+xflyt,ys4+yflyt);
  text("P5",xs5+xflyt,ys5+yflyt);
  text("P6",xs6+xflyt,ys6+yflyt);
  text("P7",xs7+xflyt,ys7+yflyt);
  text("P8",xs8+xflyt,ys8+yflyt);
}

function mousePressed()
{
  p1[2] = -100;
  p2[2] = -100;
  p3[2] = -100;
  p4[2] = -100;
  p5p[2] = -105;
  p6[2] = -105;
  p7[2] = -105;
  p8[2] = -105;
}