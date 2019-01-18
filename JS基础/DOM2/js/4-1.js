// JavaScript Document
function show(id) {
    var old = document.querySelector(".foreground");
    old.className=" ";
    var div=document.getElementById(id);
    div.className="foreground";
}