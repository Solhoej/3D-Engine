p1 = [-20, 20, -100];
p2 = [20, 20, -100];
p3 = [-20, -18, -100];
p4 = [20, -18, -100];
p5p = [-20, 20, -105];
p6 = [20, 20, -105];
p7 = [-20, -18, -105];
p8 = [20, -18, -105];

xflyt = 200;
yflyt = 200;

function setup() {
  createCanvas(400, 400);
  xModifier = createSlider(-400,400,0);
  xModifier.position(20,400);

  yModifier = createSlider(-400,400,0);
  yModifier.position(160,400);
}

function draw() {
  background(220);
  p1[0] = xModifier.value();
  p2[0] = xModifier.value()+40;
  p3[0] = xModifier.value();
  p4[0] = xModifier.value()+40;
  p5p[0] = xModifier.value();
  p6[0] = xModifier.value()+40;
  p7[0] = xModifier.value();
  p8[0] = xModifier.value()+40;

  p1[1] = yModifier.value()+40;
  p2[1] = yModifier.value()+40;
  p3[1] = yModifier.value();
  p4[1] = yModifier.value();
  p5p[1] = yModifier.value()+40;
  p6[1] = yModifier.value()+40;
  p7[1] = yModifier.value();
  p8[1] = yModifier.value();

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
}

// function mousePressed()
// {
//   p1[2] = -100;
//   p2[2] = -100;
//   p3[2] = -100;
//   p4[2] = -100;
//   p5p[2] = -105;
//   p6[2] = -105;
//   p7[2] = -105;
//   p8[2] = -105;
// }