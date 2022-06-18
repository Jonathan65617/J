objects = [];
status = "";
video = "";
function preload(){
    video = createVideo("video.mp4");//load video in webpage
    video.hide();
    
}
function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 350, 350);
if(status == "true"){
    objectDetector.detect(video,getresult);
    r = random(255);
        g = random(255);
        b = random(255);
        for (i = 0; i < objects.length; i++) {
          document.getElementById("status").innerHTML = "Status : Object Detected";
          document.getElementById("numberofobjects").innerHTML = "Number of Object Detected" + objects.length;
          fill(r,g,b);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke(r,g,b);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
function modelLoaded(){
    console.log("model loaded.");
    video.loop();
    video.speed(1);
    video.volume(0);
    status = "true";
}
function getresult(error,results){
    if(error){
console.log(error);
    }
    else{
        console.log(results);
    }
objects =results;

}





