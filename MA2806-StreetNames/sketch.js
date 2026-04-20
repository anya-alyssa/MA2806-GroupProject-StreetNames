let streetNameSign;

function preload() {
  streetNameSign = loadImage('assets/streetNameSign.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  image(streetNameSign, 0, 0, windowWidth);
}

// A consistent menu for each page
function addMenu(){
    let menu = document.getElementById("menu");
    menu.innerHTML = `
    <a href="index.html">Home</a> /
    <a href="description.html">Description</a>
    `;
}