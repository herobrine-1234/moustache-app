noseX=0;
noseY=0;
function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){console.log("pose net has started");}

function preload()
{
    moustache=loadImage('https://i.postimg.cc/y83Dr4Yp/babababababa-blab-la-blka-bla-bla-bla-bla-la.png');
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
noseX=results[0].pose.nose.x-15;
noseY=results[0].pose.nose.y+5;

}
}

function draw()
{
    image(video,0,0,300,300);
image(moustache,noseX,noseY,80,30);
}

function download()
{
save('moustache.png');
}
