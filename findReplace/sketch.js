var textField;
var phrase = '"But I like to be here. Oh, I like it a lot!" Said the Cat in the Hat To the fish in the pot. "I will NOT go away. I do NOT wish to go! And so," said the Cat in the Hat,';
var find = "Cat";
var r= "Dog";


// function preLoad() {
//     catinhat = loadStrings('catinthehat.txt');
// }

function setup() {

    createCanvas(windowWidth, windowHeight);
    textField = processRita(phrase,find,r);

}

function draw(){

	background(255);
	fill(0);
	text(textField, 10, 10);

}

function processRita(phrase,target,replacement) {
    var rs = new RiString(phrase);
    var words = rs.words();

    var output = '';
    for (var i = 0; i < words.length;i++){
        if(words[i]==target) {
        	output += replacement;

        } else{
            output += words[i];
        }

        output += ' ';
    }
      return output;
}