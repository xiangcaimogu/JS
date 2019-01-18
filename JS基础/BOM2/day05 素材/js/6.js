// JavaScript Document
var game={
	maxX:0,//可用的最大X值
	maxY:0,
	div:null,
	WIDTH:0,
	HEIGHT:0,
	init:function(){
		var self=this;
		self.div=document.getElementById("pop");
		var style=null;
		if(getComputedStyle){
			style=getComputedStyle(self.div)
			}else{
				style=self.div.currentStyle;
			}//获取对象宽高属性，if(){}else{}解决兼容性问题
		self.WIDTH=parseFloat(style.width);
		self.HEIGHT=parseFloat(style.height);
		self.maxY=window.innerHeight-self.HEIGHT-30;
		self.maxX=window.innerWidth-self.WIDTH;
		self.div.onmouseover=function(){
			var e=window.event||arguments[0];
			var x=parseFloat(e.clientX||e.x);//给事件类型(鼠标移动)添加事件属性，事件移动时，获得事件本身的位置
			var y=parseFloat(e.clientY||e.y);
			while(true){
				var nextX=parseInt(Math.random()*(game.maxX+1));
				var nextY=parseInt(Math.random()*(game.maxY+1));
				console.log(nextX)
		   		if(!((x>=nextX&&x<=nextX+game.WIDTH)
				&&(y>=nextY&&y<=nextY+game.HEIGHT))){
				self.div.style.left=nextX+"px";
				self.div.style.top=nextY+"px"
				break;
					}
				}
		}
		}
	}
window.onload=function(){
	game.init()
	console.log(game)
	}	