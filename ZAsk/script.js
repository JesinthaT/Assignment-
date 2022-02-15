function newdrop(){
    // var left=e.target.x;
    var newDrop=document.querySelector(".new-drop");
    newDrop.style.display="block";
    // newDrop.style.left=left+"px"
}
function hide(){
    var c=document.querySelector(".users");
    c.style.display="none";
    document.querySelector(".first").style.width="29.5%";
}


function hideremove(){
    var c=document.querySelector(".users");
    c.style.display="block";
    document.querySelector(".first").style.width="38%";
}

function removenewdrop(){
var newDrop=document.querySelector(".new-drop");
    newDrop.style.display="none";
}
function arrowdrop(){
    var arrowdrop=document.querySelector(".arrow-drop");
    arrowdrop.style.display="block";
}
function removearrowdrop(){
var newDrop=document.querySelector(".arrow-drop");
    newDrop.style.display="none";
}
function filterdrop(){
    var a=document.querySelector(".filter-drop");
    a.style.display="block";
    a.style.left="0px";
    document.querySelector(".whole-content").style.backgroundColor="#d2d6d3";
    document.querySelector(".follow-tag").style.backgroundColor="#b6bab7";
    document.querySelector(".ignore-tag").style.backgroundColor="#b6bab7";
    var c=document.querySelectorAll(".box");
    for(i=0;i<c.length;i++){
        c[i].style.backgroundColor="#b6bab7";
    }


}
function removefilter(){
    var a=document.querySelector(".filter-drop");
    a.style.display="none";
    document.querySelector(".whole-content").style.backgroundColor="#f8f8f8";
    document.querySelector(".follow-tag").style.backgroundColor="white";
    document.querySelector(".ignore-tag").style.backgroundColor="white";
    var c=document.querySelectorAll(".box");
    for(i=0;i<c.length;i++){
        c[i].style.backgroundColor="white";
    }
   
}


function view(){
    setTimeout(lightnone,1000);
   setTimeout(viewcontainer,2000);
}
function viewcontainer(){
    // document.querySelector(".container").style.display='block';
    document.querySelector(".transition-effect").style.display="none";
    document.querySelector(".header").style.top="0px";
}
function lightnone(){
    document.querySelector(".overall-sub").style.display='grid';
    document.querySelector(".animation-light").style.display='none';
}



function menudrop(){
    var d=document.querySelector(".menu-drop");
    d.style.display='block';
}
function removemenu(){
    var d=document.querySelector(".menu-drop");
    d.style.display='none';
}