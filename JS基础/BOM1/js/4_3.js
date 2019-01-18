// JavaScript Document
var adv={
	duration:3000,
	interval:20,
	div:null,
	height:0,
	init:function(){
		this.div=document.getElementById("msg");
		var getstyle=getComputedStyle(this.div)//拿到所有css样式
		this.height=parseFloat(getstyle.height)
		},
		
	moveUpStep:function(){
		var self=this;
		var style=getComputedStyle(this.div);
		var bottom=parseFloat(style.bottom)
		bottom+=this.height*this.interval/this.duration;
		this.div.style.bottom=bottom+"px";
		if(bottom<=0){
			setTimeout(function(){
				self.moveUpStep()
				},this.interval);	
			}
		},
		
	startMoveUp:function(){
		var self=this;
		setTimeout(function(){
			self.moveUpStep()
			},this.interval)
		},
	moveDownStep:function(){
		var self=this;
		var style=getComputedStyle(this.div);
		var bottom=parseFloat(style.bottom)
		bottom-=this.height*this.interval/this.duration;
		this.div.style.bottom=bottom+"px";
		if(bottom>-this.height){
			setTimeout(function(){
			self.moveDownStep()
			},this.interval);
			}
		},
	startMoveDown:function(){
		var self=this;
		setTimeout(function(){
			self.moveDownStep()
			},this.interval)
		}	
	}
window.onload=function(){
	adv.init();
	adv.startMoveUp();
	document.querySelector("#msg>a").onclick=function(){
		adv.startMoveDown();
		}
	}
		