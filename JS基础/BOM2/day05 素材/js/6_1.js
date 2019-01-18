// JavaScript Document
var game={
	maxT:0,
	maxL:0,
	div:null,
	height:0,
	width:0,
	init:function(){
		var self=this;
		var outer=document.getElementById("outer");
		self.div=document.getElementById("pop");
		self.height=parseFloat(getComputedStyle(self.div).height);
		self.width=parseFloat(getComputedStyle(self.div).width);
		var outerH=parseFloat(getComputedStyle(outer).height);
		var outerW=parseFloat(getComputedStyle(outer).width)
		self.maxT=outerH-self.height;
		self.maxL=outerW-self.width;
		self.div.onmouseover=function(){
			var e=window.event||argument[0];
			var x=parseFloat(e.offsetX);
			var y=parseFloat(e.offsetY);
			while(true){
			var nextX=parseInt(Math.random()*(game.maxT+1));
			var nextY=parseInt(Math.random()*(game.maxL+1));
			if(!((x>=nextX&&x<=nextX+game.width)
				&&(y>=nextY&&y<=nextY+game.height))){
				self.div.style.left=nextX+"px";
				self.div.style.top=nextY+"px";
				}
				break;}
			}
		}
	}
window.onload=function(){
	game.init()
	console.log(game)
	}	