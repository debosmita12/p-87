canvas = document.getElementById("myCanvas");
color="red";

ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.LineWidth=4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.LineWidth=5;
    ctx.arc(200 , 210 ,40 , 0, 2*Math.PI );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.LineWidth=5;
    ctx.arc(300 , 210 ,40 , 0, 2*Math.PI );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="pink";
    ctx.LineWidth=5;
    ctx.arc(400 , 210 ,40 , 0, 2*Math.PI );
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.LineWidth=5;
    ctx.arc(500 , 210 ,40 , 0, 2*Math.PI );
    ctx.stroke();


    canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    color=document.getElementById("color").value;
    console.log(color);

    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

    console.log("X="+mouse_x+" ,Y= " +mouse_y);
    circle(mouse_x ,mouse_y);
}

function circle(mouse_x,mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.LineWidth=2;
    ctx.arc( mouse_x, mouse_y, 40 , 0 , 2*Math.PI );
    ctx.stroke();
}




