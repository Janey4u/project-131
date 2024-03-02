function setup() {
    canvas = createCanvas(640,420);

canvas.center()
}
img ="";
function preload () {
    img= loadImage('bottles.jpg');

}
function draw () {
image(img, 0,0,640,420);
fill("green");
text("bottles", 45,75);
noFill();
stroke("teal");
rect(30,60,450,350);
}