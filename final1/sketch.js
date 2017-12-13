var input;
var button;
var lexicon;
var regex = new RegExp("how are you", "gi");

function setup() {
    // noCanvas();
    // lexicon = new RiLexicon();
        
    // input = createInput("How are you?");
    // chatbutt = createButton("Send");
    // button = createButton("I don't know what to say");
    // input.changed(processRita);
    // input.size(200);
    // chatbutt.mousePressed(processRita);
    // button.mousePressed(rephrase);

    // changeTextSimple('talk', input);

    // changeTextSimple('press', button);
}


function rephrase(){


    // gr.addrule(<start>: '<template>'
    // <template>: 'What is the meaning of life?'
    // }


$.getJSON("grammar.txt", function(str){
    gr = new RiGrammar(str);
    generate();
    }); 
}


function generate()
{
    result = gr.expand();
    changeTextSimple('chat', result);
}

function changeTextSimple(idElement, result){
    document.getElementById(idElement).innerHTML += result + '</br>';
}





function processRita() {
    var s = input.value();
    var rs = new RiString(s);
    var words = rs.words();
    var pos = rs.pos();
    console.log(words);
    console.log(pos);
    
    var result = '';



    for (var i = 0; i < words.length;i++){
        if(/jj.*/.test(pos[i])) {
            result += lexicon.randomWord('jj')
        } else if (/rb.*/.test(pos[i])) {
            result += lexicon.randomWord('rb')
        }
        else{
            result += words[i];
        }
        
        result += ' ';
    }

        changeTextSimple('chat', result);


}