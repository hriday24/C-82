var canvas,color,ctx,lastx,lasty,newx,newy,mouseevent;
mouseevent = "";
/**************************************************************/
canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
color = "turquoise";
/**************************************************************/
canvas.addEventListener("mousedown",MouseDown);
canvas.addEventListener("mouseup",MouseUp);
canvas.addEventListener("mouseleave",MouseLeave);
canvas.addEventListener("mousemove",MouseMove);
/**************************************************************/
function MouseDown(e){
    color = document.getElementById("input").value;
    mouseevent = "mousedown";
}
/**************************************************************/
function MouseUp(e){
    color = document.getElementById("input").value;
    mouseevent = "mouseup";
}
/**************************************************************/
function MouseLeave(e){
    color = document.getElementById("input").value;
    mouseevent = "mouseleave";
}
/**************************************************************/
function MouseMove(e){
    newx = e.clientX - canvas.offsetLeft;
    newy = e.clientY - canvas.offsetTop;
    if(mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        console.log("Last X = " + lastx + "& Last Y = " + lasty);
        ctx.moveTo(lastx,lasty);
        console.log("New X = " + newx + "& New Y = " + newy);
        ctx.lineTo(newx,newy);
        ctx.stroke();
    }
    lastx = newx;
    lasty = newy;
}