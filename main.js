canvas=document.getElementById("mycanvas")
color="red";
ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI)
ctx.arc(250,210,40,0,2*Math.PI)
ctx.stroke()

canvas.addEventListener("mousedown",my_mouse_down)
function my_mouse_down(e){
   color = document.getElementById("color").value;
    console.log(color);
mouse_X=e.clientX-canvas.offsetLeft
mouse_Y=e.clientY-canvas.offsetTop
console.log(mouse_Y)
console.log(mouse_X)
circle(mouse_X,mouse_Y)

}

function circle(mouse_X,mouse_Y){
   ctx.beginPath()
   ctx.strokeStyle=color
   ctx.lineWidth=2
   ctx.arc(mouse_X,mouse_Y,40,0,2*Math.PI)
   ctx.stroke()    
}

function clearArea() { 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    }