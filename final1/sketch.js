var input;
var button;
var lexicon;
var regex = new RegExp("how are you", "i");

function setup() {
    noCanvas();
    lexicon = new RiLexicon();
        
    input = createInput("How are you?");
    button = createButton('submit');
    input.changed(processRita);
    input.size(200);
    button.mousePressed(processRita);

    // changeTextSimple('talk', input);

    // changeTextSimple('press', button);
}


function rephrase(){
    rg = new RiGrammar();

    rg.addrule('<start>', '<template>');
    rg.addrule('<template>', 'What is the meaning of life?');

    var result = gr.expand();

}




function processRita() {
    var s = input.value();
    var rs = new RiString(s);
    var words = rs.words();
    var pos = rs.pos();
    console.log(words);
    console.log(pos);
    
    var output = '';

    output = 


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
