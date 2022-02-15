

function bling(e){
    var x=document.querySelector(".container");
    var y=e;
    var z=document.querySelector(".circle");
    var a=e.x;
    var b=e.y;
    var c=e.x+e.y;
    var color=a%255+","+b%255+","+c%255+","+1;

    // x.style.backgroundColor="rgba("+a%255+","+b%255+","+c%255+","+Math.round(Math.random()*255)+")";
    x.style.backgroundColor="rgb("+color+")";
    // var color="rgba("+a%255+","+b%255+","+c%255+","+Math.round(Math.random()*255)+")";
    // console.log(color);

    z.style.boxShadow="color 0 0 150px";
    // z.backgroundColor="white";
    z.style.left=e.x+"px";
    z.style.top=e.y+"px";

}