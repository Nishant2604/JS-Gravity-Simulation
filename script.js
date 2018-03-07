var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context = canvas.getContext('2d');

addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    update();
});


function update(x, y){
    context.beginPath();
    context.arc(x, y, 50, Math.PI / 180 * 0, Math.PI / 180 * 360, false);
    context.fillStyle ='#e83f6f';
    context.fill();
}

var y = 0;
var dy = 0;
var dy2 = 1;
var force = false;

addEventListener('click', function () {
    force = true;
});

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    update(window.innerWidth / 2, y);

    if(y + 100 <= window.innerHeight){
        y += dy;
        dy += dy2;
    }else{
        console.log(force);
        if (force == true) {
            console.log(force);
            y = window.innerHeight - 110;
            dy = -30;
            force = false;
        }
    }
    
}

animate();

