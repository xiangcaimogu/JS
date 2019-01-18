// JavaScript Document
var game={
	width:50,
	height:50,
	task:30,
	maxleft:null,
	maxtop:null,
	pop:null,
	start:function(){
		this.maxleft=screen.width-this.width;
		this.maxtop=screen.height-this.height-this.task;
		console.log(this.maxtop)
		var Wtop=parseInt(Math.random()*(this.maxtop+1));
		var Wleft=parseInt(Math.random()*(this.maxleft+1));
		var config="top="+Wtop+",left="+Wleft+",height="+this.height+",width="+this.width+",resizable=yes|no,location=no";
		this.pop=open("about:blank","pop",config)
		var img=new Image();
        img.src="xiaoxin.gif";
        img.style.width="80px";
    	img.onclick=function(){ alert("约么?"); }
		this.pop.document.body.appendChild(img)
		this.pop.onmouseover=function(){
			var e=window.event||arguments[0]
			var x=e.screenX;
			var y=e.screenY;
			while(true){
				var nextX=parseInt(Math.random()*(game.maxleft+1));
				var nextY=parseInt(Math.random()*(game.maxtop+1));
				console.log(nextX)
		   		if(!((x>=nextX&&x<=nextX+game.width)
				&&(y>=nextY&&y<=nextY+game.height))){
				this.moveTo(nextX,nextY);
				break;
					}
				}
		}	
		}
	}