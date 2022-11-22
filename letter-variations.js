function drawSnake(x, y, numSegments) {
  segmentVariation = 15;
  segmentWidth = 10;
  
  y1 = Math.random()*segmentVariation - segmentVariation/2;
  x1 = x;
  
  lineWeight = Math.random()*20 + 10;
  strokeWeight(lineWeight);
  
  for (i = 0; i < numSegments; i++) {
    yi = (Math.random()*segmentVariation - segmentVariation/2);
    xi = x1 + segmentWidth*Math.random();
    line(x1 + x, y1 + y, x + xi, yi + y);
    
    y1 = yi;
    x1 = xi
  }
  
  theta = Math.random()*Math.PI*2;
  rotate(theta);
}

function setup() {
  createCanvas(420, 420);
  background(200);
  smooth();
  var LEFT_OFFSET = 130;
  var TOP_OFFSET = 50;
  var MAX_DEPTH = 10; 
  var NUMBER_OF_SNAKES = 20; 
  var grayScaleEnabled = false;
  
  var coords = [
    [20, 230],
    [20, 230],
    [40, 60],
    [110, 100], 
    [50, 150],
    [150, 250],
    [150, 250],
    [150, 250],
    ];

  var strokes = [
    "#AEDB95",
    "#E3D8E9",
    "#9A4C95",
    "#003C66",
    "#D9FFF5",
    "#AEDB95",
    "#E3D8E9",
    "#9A4C95",
    "#00243D",
    "#0F1108",
    "#0F1108"
  ]

  
  noFill();
  
  for (i = MAX_DEPTH; i > 0; i = i - 1) {
    strokeWeight(10 + i*i*4);
    if (grayScaleEnabled) {
      stroke(100 + i*10);
    } else {
      stroke(strokes[i]);
    }
    
    beginShape();
    r = random(Math.PI)*2 - 1;
    for (j = 0; j < coords.length; j ++) {
      // Perturb R 
      t_x = LEFT_OFFSET + coords[j][0] + sin(j + r)*50;
      t_y = TOP_OFFSET + coords[j][1] + cos(j + r)*40;
      curveVertex(t_x, t_y);
    }
    endShape();
    
    // draw snakes
    for (k = 0; k < NUMBER_OF_SNAKES; k++ ) {
      x = Math.random() * width - width/4;
      y = Math.random() * height - height/4;
      drawSnake(x,y, Math.random()*8 + 3);
    }
  }
  
}



function draw() {
  
}