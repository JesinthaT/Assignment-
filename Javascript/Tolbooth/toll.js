var ct = new Date().getTime();



var TollBooths = {
    "T121": {
        id: "T121",
        pairBooth: "T122",
        passingVehicles: {
            // "TN0021": { time: ct - (40 * 1000 * 60 * 60) },
            "TN0022": { time: ct - (40 * 1000 * 60 * 60) },
            // "TN0023": { time: ct - (10 * 1000 * 60 * 60) }
        },
        amount: {
            car: 50,
            bus: 80,
            lorry: 100,
            minilorry: 40
        }

    },
    "T122": {
        id: "T122",
        pairBooth: "T121",
        passingVehicles: {
            // "TN0021": { time: ct - (10 * 1000 * 60 * 60) },
            // "TN0022": { time: ct - (10 * 1000 * 60 * 60) },
            "TN0023": { time: ct - (14 * 1000 * 60 * 60) }
        },
        amount: {
            car: 50,
            bus: 80,
            lorry: 100,
            minilorry: 40
        }
    }
}
console.log
function Billing(TollBooth, id, vtype, amount) {
    var vid = id;
    var veh_type = vtype;
    var currentTime = new Date().getTime();
    if (TollBooths[TollBooth].passingVehicles[vid] != null) {
        var billingTime = TollBooths[TollBooth].passingVehicles[vid].time;
        var ch = Math.abs(Math.round((currentTime - billingTime) / (1000 * 60 * 60)));
        if (ch < 24) {
            return 0;
        }
        else {
            var pairbooth = TollBooths[TollBooth].pairBooth;
            if (TollBooths[pairbooth].passingVehicles[vid] != null) {
                var billingTime1 = TollBooths[pairbooth].passingVehicles[vid].time;
                var ch = Math.abs(Math.round((currentTime - billingTime1) / (1000 * 60 * 60)));
                var c = amount;
                if (ch < 24) {
                    if (c == 0) {
                        return 0;
                    } else {
                        return 30;
                    }
                }
                else {
                    TollBooths[TollBooth].passingVehicles[vid] = { time: new Date().getTime() };
                    console.log(TollBooths[TollBooth].passingVehicles);
                    return TollBooths[pairbooth].amount[veh_type];
                }
            }
            else {
                TollBooths[TollBooth].passingVehicles[vid] = { time: new Date().getTime() };
                console.log(TollBooths[TollBooth].passingVehicles);
                return TollBooths[TollBooth].amount[veh_type];
            }
        }
    }
    else {
        var pairbooth = TollBooths[TollBooth].pairBooth;
        if (TollBooths[pairbooth].passingVehicles[vid] != null) {
            var billingTime1 = TollBooths[pairbooth].passingVehicles[id].time;
            var ch = Math.abs(Math.round((currentTime - billingTime1) / (1000 * 60 * 60)));
            var c = amount;
            if (ch < 24) {
                if (c == 0) {
                    return 0;
                } else {
                    return 30;
                }
            }
            else {
                TollBooths[TollBooth].passingVehicles[vid] = { time: new Date().getTime() };
                console.log(TollBooths[TollBooth].passingVehicles);
                return TollBooths[pairbooth].amount[veh_type];
            }
        }
        else {
            TollBooths[TollBooth].passingVehicles[vid] = { time: new Date().getTime() };
            console.log(TollBooths[TollBooth].passingVehicles);
            return TollBooths[TollBooth].amount[veh_type];
        }
    }

}

var array = ["TN0021", "TN0022", "TN0023"];
var array1 = ["TN0024", "TN0025", "TN0026"]
function create() {
    for (i = 0; i < array.length; i++) {
        var z = document.createElement("div");
        z.className = "vehicle";
        z.setAttribute("no", array[i]);
        z.setAttribute("boothno", "T121");
        z.setAttribute("type", "car");
        z.setAttribute("id", array[i]);
        z.addEventListener("click", waiting);
        // z.setAttribute("onclick","waiting(this");
        document.querySelector("#first").appendChild(z);
    }
    for (j = 0; j < array1.length; j++) {
        var z = document.createElement("div");
        z.className = "vehicle";
        z.setAttribute("no", array1[j]);
        z.setAttribute("boothno", "T121");
        z.setAttribute("type", "car");
        z.setAttribute("id", "0");
        z.addEventListener("click", waiting1);
        document.querySelector("#last").appendChild(z);
    }
}

function waiting(e) {
    var x = e.target;
    // console.log(x);
    var d = x.getAttribute("no");
    x.innerHTML = d;
    var e = x.getAttribute("boothno");
    var f = x.getAttribute("type");
    document.querySelector("#froad").appendChild(x);
    x.removeEventListener("click", waiting);
    setTimeout(Move, 2000);


    function Move() {
        x.classList.add("newDIV");
        setTimeout(() => {
            var a = x.innerHTML;
            x.classList.remove("newDIV");
            x.classList.add("new1DIV");
            x.innerHTML = Billing(e, d, f, a);
        }, 3000);
        setTimeout(() => {
            x.classList.remove("new1DIV");
           
            // x.classList.add("new2DIV");
            document.querySelector("#last").appendChild(x);

            x.addEventListener("click", Move3);

        }, 8000);
    }

    function Move3() {
        x.classList.add("new2DIV");
        document.querySelector("#sroad").appendChild(x);
        
        x.removeEventListener("click", Move3);
        setTimeout(() => {
            x.classList.remove("new2DIV");
            x.classList.add("new3DIV");
        }, 1000);
        setTimeout(() => {
            x.classList.remove("new3DIV");
            x.classList.add("new4DIV");
            var a = x.innerHTML;
            var p = TollBooths[e].pairBooth;
            x.innerHTML = Billing(p, d, f, a);

        }, 5000);
        setTimeout(() => {
            x.classList.remove("new4DIV");
            document.querySelector('#first').appendChild(x);
            
            x.addEventListener("click", waiting);
        }, 9000);
    }
}


function waiting1(e) {
    var x = e.target;
    var d = x.getAttribute("no");
    x.innerHTML = d;
    var e = x.getAttribute("boothno");
    var f = x.getAttribute("type");
    document.querySelector("#sroad").appendChild(x);
    x.removeEventListener("click", waiting1);
    x.classList.add("new0DIV");
    setTimeout(() => {
        x.classList.remove("new0DIV");
        x.classList.add("new11DIV");
    }, 2000);
    setTimeout(() => {
        var a = x.innerHTML;
        x.innerHTML = Billing(e, d, f, a);
        x.classList.remove("new11DIV");
        x.classList.add("new12DIV");
        x.addEventListener("transitionend", Move11)
    }, 6000);

    function Move11() {
        document.querySelector("#first").appendChild(x);
        x.removeEventListener("transitionend", Move11);

        x.addEventListener("click", Move12);
    }
    function Move12() {
        document.querySelector("#froad").appendChild(x);
        x.removeEventListener("click", Move12);
        setTimeout(() => {
            x.classList.remove("new12DIV");
            x.classList.add("new13DIV");
        }, 2000);

        setTimeout(() => {
            var a = x.innerHTML;
            var p = TollBooths[e].pairBooth;
            x.innerHTML = Billing(p, d, f, a);
            x.classList.remove("new13DIV");
            x.classList.add("new14DIV");
            x.addEventListener("transitionend", Move13);
        }, 6000);
        function Move13() {
            x.classList.remove("new14DIV");
            x.style.left = "0px";
            document.querySelector("#last").appendChild(x);
            x.removeEventListener("transitionend", Move13);
            x.addEventListener("click", waiting1);
        }

    }
}




