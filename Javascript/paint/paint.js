function drawing(e){
   var x= document.querySelector(".circle");
   var y=x.cloneNode(true);
   y.removeAttribute("id");
   var z=document.querySelector(".plain");
   var a=e.x;
   var b=e.y;
   var color=document.querySelector(".color").value;
   var size=document.querySelector(".size").value;
   z.appendChild(y);
   y.style.backgroundColor=color;
   y.style.width=size+"px";
   y.style.height=size+"px";
   y.style.top=b+"px";
   y.style.left=a+"px"; 
}
function clearDrawing(){
   var z=document.querySelector(".plain");
   z.innerHTML=" ";
}