canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(143, 230, 450, 250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(250, 320, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(330, 320, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(415, 320, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(290, 380, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(370, 380, 50, 0, 2 * Math.PI);
ctx.stroke();