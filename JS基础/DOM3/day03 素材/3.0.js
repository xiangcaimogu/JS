// JavaScript Document
function createSelect(arr){
	var sel=document.createElement("select");
	var opt=new Option("-请选择-",-1);
	sel.add(opt);
	for(var i=0;i<arr.length;i++){
		var opt=new Option(arr[i].name,arr[i].id)
		sel.add(opt)
		}
	console.log(sel)
	sel.onchange=function(){//动态绑定onchange事件，this指的就是触发事件的当前对象
	while(this!=this.parentNode.lastChild){//循环从最后一个select开始删，只要当前选中
		this.parentNode.removeChild(		//的不等于最后一个就循环一个一个的删除
		this.parentNode.lastChild);
		}	
	var i=this.selectedIndex;//下标是1开始
	console.log(i);
	var cate=arr[i-1];
	if(cate.children){
		createSelect(cate.children)
		}
	}
	
	document.getElementById("category").appendChild(sel)
	}
window.onload=function(){
	createSelect(categories)
	}