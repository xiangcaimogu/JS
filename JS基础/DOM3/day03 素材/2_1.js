// JavaScript Document
window.onload=function(){
	var table=document.createElement("table")
	var thead=table.createTHead();
	var tr=thead.insertRow();
	for(var key in data[0]){
		var th=document.createElement("th");
		th.innerHTML=key;
		tr.appendChild(th)
		}
	var th=document.createElement("th");
	th.innerHTML="operate";
	tr.appendChild(th);
	
	var tbody=document.createElement("tbody");//
	table.appendChild(tbody);//tbody是变量，在这里不用双引号
	for(var i=0;i<data.length;i++){
		var tr=tbody.insertRow();
		for(var key in data[i]){
			var td=tr.insertCell()
			td.innerHTML=data[i][key]//如果写成data[i].key等效于data[i]["key"],key这里是变量，
					 				//加上双引号就是字符串了，没有key这个属性，它不是"id"或者"name"属性
			}
		var td=tr.insertCell();
		
		var btn=document.createElement("button")
		btn.innerHTML="删除"
		td.appendChild(btn);
		btn.onclick=function(){//这个事件函数是一个闭包函数，table是外面函数的局部变量
			var tr=this.parentNode.parentNode;//获得tr
			console.log(tr)
			var id=tr.cells[0].innerHTML;//获得tr的id
			if(confirm("是否删除"+id+"?")){
				table.deleteRow(tr.rowIndex);
				}
			}
		}
	document.getElementById("data").appendChild(table);
	}