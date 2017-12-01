var rg

function setup() {

    lexicon = new RiLexicon();
  	rg = new RiGrammar();



  	

 	rg.addrule('<start>','the <N> meows',1);
 	rg.addrule('<N>','cat | unicorn',5);
 	rg.addrule('<N>','dog');\
 	for (var i =0; i < 100; i++) {
 		var result = rg.expand();
 		console.log(result);
 	}
 	
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
        if(/nn.*/.test(pos[i])) {
            output += lexicon.randomWord('nn')
        } else{
            output += words[i];
        }
        
        output += ' ';
    }
      createP("output");
}