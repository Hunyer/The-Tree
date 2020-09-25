//variables A B
// axiom: A
// rules: (A -> AB), (B -> A)


var sentence = "A";

var rule1 = {
    a: "A",
    b: "AB"
}

var rule2 = {
    a: "B",
    b: "A"
}

function generate() { 
    var nextSentence = "";
    for(var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        if (current == rule1.a) {
            nextSentence += rule1.b;
        }
        else if(current == rule2.a) {
            nextSentence += rule2.b;
        }
        else {
            nextSentence += current;
        }
    }
    
    sentence = nextSentence;
    createP(sentence);
}

function setup() {
    noCanvas();
    createP(sentence);
    var button = createButton("Generate Sentence");
    button.mousePressed(generate);
}

function draw() {
  
}