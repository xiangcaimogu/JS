// JavaScript Document

window.onload=function(){
	(function(){
		var unsel=document.getElementById("unsel");
		unselArr=unsel.innerHTML.replace(/^\s*<option>/,"")
								.replace(/<\/option>\s*$/,"")
								.split(/<\/option>\s*<option>/)
		})()
		console.log(unselArr)
};
var unselArr=[];
var selArr=[];		
function move(btn){//后台的数组来回切换
	switch(btn.innerHTML)
 {
 		case "&gt;&gt;":
  		selArr=selArr.concat(unselArr);
  		unselArr=[];//concat没有改变元素组，所以这边手动清空
 		break;
 		case "&lt;&lt;":
  		unselArr=unselArr.concat(selArr);
  		selArr=[];
		break;	
		case "&gt;":
		//如果遍历中的操作会减少数组的元素个数，就会影响后边的下标位置
		var opts=document.querySelectorAll("#unsel>option")
		for(var i=opts.length-1;i>=0;i--){
			if(opts[i].selected){//每点一次"&gt"，都会遍历一次，当遍历的opts[i].selected=true,也就是说遍历到你选的那一个就会是true
				selArr.push(unselArr.splice(i,1)[0]);
				}
			}
		break;
		case "&lt;":
		var opts=document.querySelectorAll("#sel>option")
		for(var i=opts.length-1;i>=0;i--){
			if(opts[i].selected){
				unselArr.push(selArr.splice(i,1)[0]);
				}
			}
		break;
			
 }
 unselArr.sort();
 selArr.sort()
 show();
 console.log(opts) 
	}
function show(){//后台的数组显示到html里(用innerHTML)
	var unsel=document.getElementById("unsel")
	var unselhtml="<option>"+unselArr.join("</option><option>")+"</option>"
	unsel.innerHTML=unselhtml
	var sel=document.getElementById("sel")
	var selhtml="<option>"+selArr.join("</option><option>")+"</option>"
	sel.innerHTML=selhtml
	}	


	