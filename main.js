eyeX = 0;

eyeY = 0;

function preload() {

 cool_glasses = loadImage("https://i.postimg.cc/bJtrZB3j/Glassess.png");

}

function setup() {

 canvas = createCanvas(400,400);

 canvas.center();

 video = createCapture(VIDEO);
 
 video.size(400,400);

 video.hide();

 poseNet = ml5.poseNet(video , modelLoaded);

 poseNet.on("pose",gotPoses);

}

function modelLoaded() {

 console.log("Model Loaded");

}

function gotPoses(results) {

if(results.length > 0) {

 console.log(results);

 eyeX =  results[0].pose.nose.x - 65;

 eyeY =  results[0].pose.rightEye.y - 20;
 
 console.log("noseX = " + eyeX);

 console.log("noseY = " + eyeY);

}

}
 
function draw() {

 image(video , 0 , 0 , 400 , 400);

 image(cool_glasses, eyeX , eyeY , 125 , 50);

}

function take_snapshot() {

 save("My_Glasses.png");

}