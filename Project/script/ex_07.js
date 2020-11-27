let canvasElement = document.querySelector("#canva");
let context = canvasElement.getContext("2d");

// the triangle
context.beginPath();
context.moveTo(6, 6);
context.lineTo(14, 10);
context.lineTo(6, 14);
context.closePath();

// the outline
context.lineWidth = 1;
context.strokeStyle = 'white';
context.stroke();

/*
context.fillStyle = "white";
context.fill();
*/

let audio = new Audio('triangle.ogg');
$('#canva').click(function() {
    audio.play();
});

$('#pause').click(function() {
    audio.pause();
});

$('#stop').click(function() {
    audio.pause();
    audio.currentTime = 0;
});

$('#mute').click(function() {
    if(audio.muted == false){
        audio.muted = true;
    } else {
        audio.muted = false;
    }
});



