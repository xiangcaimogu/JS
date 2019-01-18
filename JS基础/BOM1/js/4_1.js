// JavaScript Document
function calc(){
	var now=new Date();
	console.log(now)
	var target=new Date(now.toLocaleDateString()+" 18:00:00");
	console.log(target.toLocaleString())
		var ms=target-now;
	console.log(ms)
		var s=ms/1000;
		var h=Math.floor(s/3600);
		var m=Math.floor(s%3600/60);
		s=Math.floor(s%3600%60);
		document.getElementById("time").innerHTML=h+":"+m+":"+s;	
	//timer=setTimeout(calc,1000)
	}
	var timer=null
window.onload=function(){
	calc();//上来就调用一次，
	//timer=setTimeout(calc,1000)
	timer=setInterval(calc,1000)
	}
function stop(btn){
	if(timer){
	clearInterval(timer);
	timer=null;
	btn.innerHTML="启动倒计时"
	}else{
	calc();
	timer=setInterval(calc,1000);
	btn.innerHTML="停止倒计时"
		}
	}	