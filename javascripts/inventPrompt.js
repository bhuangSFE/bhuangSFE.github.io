promptsfile = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQeCVqaGBwY6Y-x6scrLq9iy0UnnmeM0rWJl9F0FRkHGHaZFJp-OClyESWNJ6mvkEBhg4bryVo6yAy/pub?gid=965112276&single=true&output=csv';
x = 0;

function preload(){
  table = loadTable(promptsfile, 'csv', 'header');
  bulb = loadImage('noun-invention-3347635.png');
}

function setup() {
  maxRows = table.getRowCount();
  createCanvas(windowWidth, windowHeight);
  
  background(220);
  textSize(10);
  text('Click anywhere to get a new prompt!', 10, 10);
//  button = createButton('Invent me!');
//  button.position(10, 10);
//  button.mousePressed(showPrompt);
}

function mouseClicked(){
  showPrompt();
}

function showPrompt(){
  background(220);
  textSize(10);
  text('Click anywhere to get a new prompt!', 10, 10);
  row = int(random(maxRows));
  prompt = table.getString(row,1);

  
  image(bulb, width/2 - 62, 50, 125, 125);  

  textWrap(WORD);
  textLeading(50);
  textSize(24);
  text("Invention Prompt #: " + str(row + 1), 10, 32);
  textSize(32);
  text(prompt, 20, 200, width-40);
  print(row);  

}

function draw() {
}
