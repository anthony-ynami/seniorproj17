var field;
var button1;
var button2;
var lexicon;
function setup() {
  createCanvas(400, 300);
  lexicon = new RiLexicon();
  field = createInput();
  button1 = createButton("Rhymes!");
  button1.mousePressed(getRhymes);
  button2 = createButton("Similar!");
  button2.mousePressed(getSimilar);
  background(50);
  textSize(24);
  fill(255);
  noStroke();
}
function draw() {
}
function getRhymes() {
  background(50);
  // getPosTags returns an array of tags
  var rhymes = lexicon.rhymes(field.value());
  var rhymesStr = rhymes.join(" ");
  text(rhymesStr, 10, 10, width-20, height-20);
}
function getSimilar() {
  background(50);
  // getPosTags returns an array of tags
  var similar = lexicon.similarBySound(field.value());
  var similarStr = similar.join(" ");
  text(similarStr, 10, 10, width-20, height-20);
}