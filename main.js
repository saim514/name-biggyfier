difference = 0;
left_wrist_x = 0;
right_wrist_x = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,550);
    canvas.position(550,160);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Very good website for blind people! *No offense*")
}

function gotPoses(results)
{
 if(results.length > 0)
 {
   console.log(results);

   left_wrist_x = results[0].pose.leftWrist.x;
   right_wrist_x = results[0].pose.rightWrist.x;
   difference = floor(left_wrist_x - right_wrist_x);
 }   
}

function draw()
{
    background('#90A4AE');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference + " px";
    textSize(difference);
    fill('#84FFFF');
    text("Saim", 50, 400);
}