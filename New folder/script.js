var el = document.querySelector("#square");
var con = document.querySelector(".content");
var lef = 0;
var updown = 0;

document.body.addEventListener("keyup", function (ev) {
if(lef<=0){
    lef=440
}

if(lef>=440){
    lef=0
}
if(updown<=0){
    updown=440
}

if(updown>=440){
    updown=0
}



    if (ev.which == 37) {
        lef -= 20;
    }

    if (ev.which == 38) {
        updown -= 20;
    }

    if (ev.which == 39) {
        lef += 20;
    }
    if (ev.which == 40) {
        updown += 20;
    }

  
    el.style.left = lef + "px";
    el.style.top = updown + "px";
   
   
})
