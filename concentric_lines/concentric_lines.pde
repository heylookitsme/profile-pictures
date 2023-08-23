void setup() {
  size(640, 360); 
  stroke(153);
  strokeWeight(2); 
  noFill();
}

void draw() {
  background(51); 
  //print(mouseX, mouseY);
  
  // triangles (broken) 
  //for (int i = 0; i < 300; i += 10) {
  //  triangle(120 - i, 300 - i, 140, 270 + i, 160 + i, 300 + i);
    
  //}
  
  // triangles (not broken) 
  for (int i = 0; i < 300; i += 10) {
  triangle(120 - i, 300 - i, 140, 270 + i, 160 + i, 300 - i);
  
  }
  
  // circles
  for (int i = 0; i < 300; i += 10) {
  circle(100, 100, 10 + i);
  }
  
  // rectangles 
  for (int i = 0; i < 300; i += 10) {
    rect(300 -i , 300 + i, 220 + i, 220 - i);
  }
  
  // curve 
  curve(20, 104, 20, 104, 292, 96, 292, 244);
}
