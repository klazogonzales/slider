var redSlider;
var greenSlider;
var blueSlider;

function setup(){
    createCanvas(600,400);
    background(0);
    
    //createSlider(min,max,default);
    redSlider = createSlider(0,255,100);
    //.position(x,y)
    redSlider.position(20,20);
    
    greenSlider = createSlider(0,255,100);
    greenSlider.position(20,50);
    
    blueSlider = createSlider(0,255,100);
    blueSlider.position(20,80);
}


function draw(){
    redValue = redSlider.value();
    greenValue = greenSlider.value();
    blueValue = blueSlider.value();
    
    background(redValue, greenValue, blueValue);
}