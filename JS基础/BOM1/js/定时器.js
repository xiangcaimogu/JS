// JavaScript Document
var n=0;
function task(){
	if(n<5){
		n++;
		console.log("该起床了")
		}else{
		clearInterval(timer)
		timer=null;	
			}
	}
var timer=null;
timer=setInterval(task,3000)


function task(){
	console.log("该起床了");
	timer=setTimeout(task,300);
	}
var timer=null;
timer=setTimeout(task,300)	