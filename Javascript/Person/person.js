var personDetails=[
    {
        name:"sinthiya",
        age:20
    },
    {
        name:"amos",
        age:10
    },
    {
        name:"divya",
        age:80
    },
    {
        name:"ganesh",
        age:100
    },
    {
        name:"sakthi",
        age:120
    }
];
// console.log(personDetails[0].name);
function create(){
    var person=document.querySelector(".subcon");
   
    var personCopy=person.cloneNode("true");
    person.removeAttribute("id");
    var x=document.querySelector(".container");
    x.appendChild(personCopy);

    personAdd(personCopy);
}

function personAdd(pdetail){
    var math=Math.round(Math.random()*4);
    // console.log(math);
        var y=pdetail;
        // console.log(y);
      var pName=  y.querySelector(".name");
      var pAge=  y.querySelector(".age");
// console.log(pName,pAge);
    pName.innerText=personDetails[math].name;
    pAge.innerText=personDetails[math].age;
}