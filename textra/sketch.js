var input;
var button;
var lexicon;

function setup() {
    noCanvas();
    lexicon = new RiLexicon();
        
    input = createInput("He lazily walked down the dirty sidewalk");
    button = createButton('submit');
    input.changed(processRita);
    input.size(200);
    button.mousePressed(processRita);

    // changeTextSimple('talk', input);

    // changeTextSimple('press', button);
}

function processRita() {
    var s = input.value();
    var rs = new RiString(s);
    var words = rs.words();
    var pos = rs.pos();
    console.log(words);
    console.log(pos);
    
    var output = '';
    for (var i = 0; i < words.length;i++){
        if(/jj.*/.test(pos[i])) {
            output += lexicon.randomWord('jj')
        } else if (/rb.*/.test(pos[i])) {
            output += lexicon.randomWord('rb')
        }
        else{
            output += words[i];
        }
        
        output += ' ';
    }
     createP(output)

     // changeTextSimple('chat',output);

}

// function generate()
// {
//     changeTextSimple('definition', result);
// }

// function changeTextSimple(idElement, result){
//     document.getElementById(idElement).innerHTML = result;
// }
