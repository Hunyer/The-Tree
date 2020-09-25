//variables A B
// axiom: A
// rules: (A -> AB), (B -> A)

var angle;
var sentence = "X";
var len = 200;
var rules = [];


rules[0] = {
    a: "X",
    b: "F+[[X]-X]-F[-FX]+X"
}

rules[1] = {
    a: "F",
    b: "FF"
}

function generate() { 
    var nextSentence = "";
    len *= 0.51;
    
    for(var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var found = false;
        
        for(var j = 0; j < rules.length; j++) {
            if(current == rules[j].a) {
                found = true;
                nextSentence += rules[j].b;
                break;
            }
        }
        
        if(!found){
            nextSentence += current;
        }
        
    }
    
    sentence = nextSentence;
    createP(sentence);
    mover();
}

function mover() {    
    background(0);
    resetMatrix();
    translate(width / 2, height);
    stroke(255);    
        
    for(var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        
        if(current == "F"){
            line(0, 0, 0, -len);
            translate(0, -len);
        }
        else if(current == "+") {
            rotate(angle);
        }
        else if(current == "-") {
            rotate(-angle);
        }
        else if(current == "[") {
            push();
        }
        else if(current == "]") {
            pop();
        }
    }
}

function setup() {
    createCanvas(600,600);
    angle = radians(25);
    background(0);
    createP(sentence);
    mover();
    var button = createButton("Generate Sentence");
    button.mousePressed(generate);
}

function draw() {  
    
}