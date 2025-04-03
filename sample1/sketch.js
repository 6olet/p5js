function setup() {
    createCanvas(500, 500);
}

function draw() {
    
    if (mouseIsPressed === true)
    {
        fill("#dddddd");
        ellipse(mouseX, mouseY, 50, 50);
    }
}