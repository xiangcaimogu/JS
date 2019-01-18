// JavaScript Document

/*var elem=document.getElementById("id")
  var elems=document.getElementsByClassName("class")
             parent.getElementsByTagName("标签名")
*/
//改变单元行偶数行的颜色
// var table=document.getElementById("data");
// 	var tbody=table.getElementsByTagName("tbody")[0];
// 	var trs=tbody.getElementsByTagName("tr");
// 	for(var i=0,len=trs.length;i<len;i++){
// 		if(i%2!=0){
// 		trs[i].className="blue"
// 		}
// 		}


function calc(btn){//在HTML中绑定的事件处理函数，函数calc想要获得元素(例:button)对象属性，都要在html中显示用this关键字传入；参数btn=this
	var td=btn.parentNode;
	var span=td.getElementsByTagName("span")[0]
	var n=parseInt(span.innerHTML)
	if(btn.innerHTML=="+"){
		n++
		}else if(n!=1){
			n--
			}span.innerHTML=n;

}