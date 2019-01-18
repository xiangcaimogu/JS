// JavaScript Document
var game={
	data:null,
	RN:4,
	CN:4,
	start:function(){//游戏启动时调用
		this.data=[
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
		];
		/*for(var r=0;r<this.RN;r++){
			this.data[r]=[];
			for(var c=0;c<this.CN;c++){
				this.data[r][c]=0;
				}
			}*/
		this.randomNum();//随机生成一个2或4
		this.randomNum();
		this.updataView();
		//console.log(this.data.join("\n"));
		},
	randomNum:function(){//随机挑选一个位置，生成2或4
		if(!this.isFull()){
			while(true){//反复执行
			var r=parseInt(Math.random()*(this.RN));//随机生成一个行下标，保存在r中
			var c=parseInt(Math.random()*(this.CN));//随机生成一个列下标，保存在c	
		   if(this.data[r][c]==0){//如果data中r行C列位置的值==0
			   this.data[r][c]=Math.random()<0.5?2:4;//   随机生成2或4，放入r行c列的元素中,如果这个随机数小于0.5就放入2，否则放入4
			   break;
			   }//   退出循环
			   }
		}
	},
	isFull:function(){//判断数组是否已满
			for(var r=0;r<this.data.length;r++){
				for(var c=0;c<this.data[r].length;c++){
					if(this.data[r][c]==0){
						return false
						}
					}
				}return true
	},
	updataView:function(){
			for(var r=0;r<this.data.length;r++){
				for(var c=0;c<this.data[r].length;c++){
					var div=document.getElementById("c"+r+c);//找到页面中当前元素对应的位置的div
					if(this.data[r][c]!=0){
					div.innerHTML=this.data[r][c];//将当前元素的值放入div
					div.className="cell n"+this.data[r][c]
					}else{//否则，重置div的样式为cell，清空内容
						div.className="cell";
						div.innerHTML="";
						}
					}
		}		
	}
	
}
window.onload=function(){//事件，页面加载完，触发事件onload
game.start();
}

