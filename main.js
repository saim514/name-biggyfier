function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,550);
    canvas.position(550,160);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('poses', gotPoses);
}

function modelLoaded()
{
    console.log("Very good website for blind people! *No offence*")
}

function gotPoses(results)
{
    
}