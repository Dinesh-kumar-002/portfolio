var back=document.getElementById("web-design");
var get_on=document.getElementById("on");
var get_off=document.getElementById("off");
var get_bulb=document.getElementById("bulboff");
var get_menu=document.getElementById("menu");

function on(){
    get_bulb.src="image/bulbon.png";
    get_bulb.style.transition="2s";
    back.style.backgroundColor="yellow";
    back.style.transition="2s";
}
function off(){
    get_bulb.src="image/bulboff.png";
    back.style.backgroundColor="rgb(31, 22, 54)";
}
function show_menu_bar(){
    get_menu.style.transform="scale(1.2,1.2)";
    get_menu.style.transition="1s";
 
}
    
    