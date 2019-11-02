var lines;
var counts;
var words = [];
function preload() {
  lines = loadStrings('sketches/austen.txt');
}
function setup() {
  createCanvas(400, 400);
  var params = {
    ignoreStopWords: true,
    ignoreCase: true,
    ignorePunctuation: true
  };
  counts = RiTa.concordance(lines.join(" "),
    params); 
  total = totalValues(counts);

    // set drawing parameters
  background(50);
  textAlign(CENTER, CENTER);
  textSize(24);
  noStroke();
  fill(255);
  noLoop();

  for (var k in counts) {
    if (counts.hasOwnProperty(k)) {
      var tags = RiTa.getPosTags(k);
      if (tags[0] == 'nn') || (tags[0] == 'jj')||(tags[0] == 'vb'){
        words.push(k);
        if (counts[k]/total > 0.001) {
          fill(random(255));
          textSize((counts[k]/total) * 10000);
          text(k, random(width), random(height));
      } 
      }
    }
  }
  noLoop();

}
function draw() {

}
function totalValues(obj) {
  var total = 0;
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      total += obj[k];
    }
  }
  return total;
}