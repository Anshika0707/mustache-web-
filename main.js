noseX = 0;
noseY = 0;
function preload(){
mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses);
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x+40);
        console.log("nose y = " + results[0].pose.nose.y );

    }
}


function modelLoaded() {
console.log('PoseNet Is Initialized');
}

function draw(){
image(video, 0, 0, 300, 300);
image(mustache, noseX, noseY, 80, 35);
}

function takeSnapshot(){
    save('myFilterImage.png');
}