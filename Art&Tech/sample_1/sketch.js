function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255);
    if (mouthIsPressed === true)
    {
        fill("#dddddd");
        ellipse(mouthX, mouthY, 50, 50);
    }
}