function myArrange(){
	 var x = document.createElement("div");
	 x.className="node";    
     document.getElementById("box-1").appendChild(x);
     x.innerHTML= Math.round(Math.random()*100);     
     x.addEventListener("click", function() {
   
        myOrder(x);

	
});

};

function myOrder(x){
	
var y =x.innerHTML;
var z ;
var m=x;
if(y % 2 == 0){
	
 	z= document.querySelector("#black");
}
else{

	z=document.querySelector("#white");

}z.appendChild(m);
 
}