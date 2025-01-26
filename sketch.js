let Backgrounds = [];
let b1, b2, b3, b4

let a1, a2, a3;
let selection1;

let o1, o2;
let selection2;

let Stars;

let signature;
let sign;
let words;
let userSignature = [];

function preload(){
  // Backgrounds
  b1 = loadImage("images/Aquarium.jpeg");
  b2 = loadImage("images/Stove.jpg");
  b3 = loadImage("images/Sky.jpg");
  b4 = loadImage("images/Night forest.jpeg");

  // animal selection
  a1 = loadImage("images/Rabbit.jpeg");
  a2 = loadImage("images/Chihuahua.jpg");
  a3 = loadImage("images/Octopus.jpeg");
  a4 = loadImage("images/Shark.jpeg");
  a5 = loadImage("images/Eagle.jpg");

  // object selection
  o1 = loadImage("images/Mushroom.jpeg");
  o2 = loadImage("images/Flowers.jpg");
  o3 = loadImage("images/Hot balloon.jpg");
  o4 = loadImage("images/Sashimi.jpeg");
  o5 = loadImage("images/Books.jpg");

  // details
  Stars = loadImage("images/Star.png");
}

function setup() {
  createCanvas(800, 600);

  // Backgrounds
  Backgrounds.push(b1);
  Backgrounds.push(b2);
  Backgrounds.push(b3);
  Backgrounds.push(b4);
  let button = createButton('click to get & choose backgrounds');
  button.position(0, 600)
  button.mousePressed(()=>{
    let r = random(Backgrounds);
    image(r, width/2, height/2);
  })

  imageMode(CENTER);
  b1.resize(800, 0);
  b2.resize(800, 0);
  b3.resize(800, 0);
  b4.resize(800, 0);

  // animal selection
  selection1 = createSelect();
  selection1.position(-150, 650);

  selection1.option('(1)');
  selection1.option('Rabbit');
  selection1.option('Chihuahua');
  selection1.option('Octopus');
  selection1.option('Shark');
  selection1.option('Eagle');

  imageMode(CENTER);
  a1.resize(180, 0);
  a2.resize(180, 0);
  a3.resize(180, 0);
  a4.resize(180, 0);
  a5.resize(180, 0);

  // object selection
  selection2 = createSelect();
  selection2.position(-150, 650);

  selection2.option('(2)');
  selection2.option('Mushroom');
  selection2.option('Flowers');
  selection2.option('Hot balloon');
  selection2.option('Sashimi');
  selection2.option('Books');


  o1.resize(180, 0);
  o2.resize(180, 0);
  o3.resize(180, 0);
  o4.resize(180, 0);
  o5.resize(180, 0);

  // Details
  Stars.resize(90, 0);

  // signature
  signature = createInput();
  signature.position(-200, 630);
  sign = createButton('sign');
  sign.position(signature.x + signature.width, signature.y);
  sign.mousePressed(getWords);

  // setTimeout
  setTimeout(selectBox1, 5000);
  setTimeout(selectBox2, 5000);
  setTimeout(textButton, 14000);
  setTimeout(inputBox, 20000);
}

function draw() {
  // setTimeout
  setTimeout(Texts, 5000);

  // animal selection
  let x = selection1.selected();
  if (x === 'Rabbit'){
    image(a1, 170, 400);
  } else if (x === 'Chihuahua'){
    image(a2, 170, 400);
  } else if (x === 'Octopus'){
    image(a3, 170, 400);
  } else if (x === 'Shark'){
    image(a4, 170, 400);
  } else if (x === 'Eagle'){
    image(a5, 170, 400);
  } else if (x === '(1)'){}

  // object selection
  let y = selection2.selected();
  if (y === 'Mushroom'){
    image(o1, 500, 250);
  } else if (y === 'Flowers'){
    image(o2, 500, 250);
  } else if (y === 'Hot balloon'){
    image(o3, 500, 250);
  } else if (y === 'Sashimi'){
    image(o4, 500, 250);
  } else if (y === 'Books'){
    image(o5, 500, 250);
  } else if (y === '(2)'){}

  // signature
  for(z = 0; z < userSignature.length; z++){
    text(userSignature[z], 600, 550 + z * 30);
  }
}

// selection1
function selectBox1(){
  selection1 = createSelect();
  selection1.position(0, 625);

  selection1.option('(1)');
  selection1.option('Rabbit');
  selection1.option('Chihuahua');
  selection1.option('Octopus');
  selection1.option('Shark');
  selection1.option('Eagle');
}

// selection2
function selectBox2(){
  selection2 = createSelect();
  selection2.position(100, 625);

  selection2.option('(2)');
  selection2.option('Mushroom');
  selection2.option('Flowers');
  selection2.option('Hot balloon');
  selection2.option('Sashimi');
  selection2.option('Books');
}

// Texts
function Texts(){
  textSize(25);
  strokeWeight(2);
  stroke(0);
  fill(225);
  text('(1)', 170, 400);

  textSize(25);
  // strokeWeight(3);
  // stroke(0);
  // fill(225);
  text('(2)', 500, 250);
}

// Details
function doubleClicked(){
  image(Stars, mouseX, mouseY);
}

// textButton
function textButton(){
    let textButton = createButton('(double click on the canvas to add highlight)');
    textButton.position(0, 650);
    textButton.mousePressed(()=>{});
}

function inputBox(){
  signature = createInput();
  signature.position(0, 675);
  sign = createButton('Give the collage a signature (click this button)');
  sign.position(signature.x + signature.width, signature.y);
  sign.mousePressed(getWords);

  for(z = 0; z < userSignature.length; z++){
    text(userSignature[z], 400, 550 + z * 30);
  }
}

function getWords(){
  words = signature.value();
  signature.value('');
  userSignature.push(words);
}