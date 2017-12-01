var textField;
var catinhat;

function preLoad() {
    catinhat = loadStrings('catinthehat.txt');
}

function setup() {

    noCanvas();
    textAlign(LEFT);

    var lexicon = new RiLexicon();
    console.log('lexicon');

    var rs = new RiString(catinhat);
    var words = rs.words();
    console.log('words');

    output = '';

    for (var i = 0; i < words.length; i++) {
        output += words[i];
        output += " ";
    }

    createP(output);
    console.log("paragraph made");


}

function init() {

}

// function processRita() {


//     var output = '';
//     for (var i = 0; i < words.length;i++){
//         if(words[i]=="cat") {
//             output += lexicon.rhymes('cat');
//         } else{
//             output += words[i];
//         }

//         output += ' ';
//     }
//       createP(output);
// }