//canvas dimensions 600x400
canvas = document.getElementById('canvas');
canvas_height = 400;
canvas_width = 600

context = canvas.getContext('2d');


//initial ball state
var xpos = 10;    //initial x-coordiante
var ypos = 200;    //initial y-coordiante
var xd = 1;    
var yd = 1;
var speed = 5; //how fast the ball moves across the screen
var radius = 5;    //radius of ball in pixels


//function that produces the frames that show the ball
//at different positions
function move(){
    context.clearRect(0,0, canvas_width, canvas_height);  //clears current frame

    //update ball coordinates 
    xpos += xd*speed;  
    ypos += yd*speed;

    //if ball "collides" with wall change its direction
    if (xpos >= canvas_width-radius || xpos <= radius){
        xd *= -1;
    }
    if (ypos >= canvas_height-radius || ypos <= radius){
        yd *= -1;
    }

    context.beginPath();    //set instance of ball to be drawn
    context.arc(xpos, ypos, radius, 0, 2*Math.PI);    //draw ball on canvas
    context.fillStyle = 'red';    //set ball color
    context.fill();    //fill in ball with color

    window.requestAnimationFrame(move);    //show ball on canvas
}

move(); 