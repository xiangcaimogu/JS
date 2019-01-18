// JavaScript Document
window.onload=function(){
	var get=document.getElementById("queue");
	var lis=get.getElementsByTagName("li");
	var len=lis.length;
	var nums=[];
	while(nums.length<len){
		var num=parseInt(Math.random()*len+1)
		if(nums.indexOf(num)==-1){
			nums.push(num)}
		}
		console.log(nums)
	
	for(i=0;i<len;i++){
		lis[i].dataset.i=nums[i]
		}
		
	lis=Array.prototype.slice.call(lis);//类数组转换成数组对象(固定套路)
	lis.sort(function(a,b){
		return a.dataset.i-b.dataset.i
		})
	console.log(lis)
	//遍历lis数组中每个li
	//  将当前元素的li变为字符串<li...></li>
	for(var i=0;i<len;i++){
		lis[i]='<li data-i='+lis[i].dataset.i+'>'
		 +lis[i].innerHTML+'</li>';
		}
	get.innerHTML=lis.join("")
	}
	
	
	