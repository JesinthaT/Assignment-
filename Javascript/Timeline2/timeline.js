




var marked_places = [];
var color=[];
var c=1;
var ch= 0;
var dtime=0;

function linemove() {
    
    var Totalmins=document.querySelector(".startingtime").value;
    ch=Totalmins/600;
    var x = document.querySelector(".line");
    var y=document.querySelector(".text");
  
    // console.log(c);
    if(c<=600){
    x.style.left = c + "px";
        y.style.left=300+c+"px";
        y.style.display="block";
    c++;
     }
   dtime+=ch;
    document.querySelector(".text").innerText=dtime.toFixed(2);
    
     for (i = 0; i < marked_places.length; i++) {
        var check=marked_places[i];
        
        if (check == c+300) {
            color[i].style.backgroundColor="red";
            color[i].style.color="black";
        }
    }
    document.querySelector(".stime").innerText="Start : "+dtime.toFixed(2);
    document.querySelector(".etime").innerText="Ends : "+(Totalmins-dtime.toFixed(2)).toFixed(2);
    
}
function move(){
    var Totalmins=document.querySelector(".startingtime").value;
    ch=Totalmins/600;
setInterval(() => {
   if(c<=600){
       linemove();
   }
},ch*1000); 
}


var text = 1;

function createline(e) {
    var left = e.x;
    var linecopy = document.querySelector(".line");
    var newline = linecopy.cloneNode(true);
    var a = document.querySelector(".body");
    a.appendChild(newline);
    newline.style.width = "1px";
    newline.style.backgroundColor = "red";
    newline.style.left = left + "px";
    newline.style.top = "45%";
    // document.querySelector(".text").innerText = left;
    




    var taskcopy = document.querySelector(".taskbox");
    var newtaskbox = taskcopy.cloneNode(true);
    newtaskbox.removeAttribute("id");
    var b = document.querySelector(".container");
    b.appendChild(newtaskbox);
    newtaskbox.style.left = left + "px";
    newtaskbox.style.top= "60%";
    newtaskbox.style.marginLeft="-25px";
    marked_places.push(left);
    color.push(newtaskbox);
    newtaskbox.innerText="Task"+text;
    text += 1;
   

    var displaytime=0
    var timebox=document.querySelector(".text");
    var newtimebox=timebox.cloneNode(true);
    newtimebox.removeAttribute("id");
    var c=document.querySelector('.container');
    c.appendChild(newtimebox);
    newtimebox.style.left = left + "px";
    newtimebox.style.top= "54%";
    newtimebox.style.marginLeft="-25px";
    newtimebox.style.display="block";
    newtimebox.style.position="absolute";


    var Totalmins=document.querySelector(".startingtime").value;
    var check=(Totalmins/600)*(left-300);
    displaytime+=check;
    newtimebox.innerText=check.toFixed(2);
}

