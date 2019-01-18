// JavaScript Document
/*function getChildren(){
	var tbody=table.childNodes[3];
	for(var i=0,r=1;i<tbody.childNodes.length;i++){
		if(tbody.childNode[i].nodeType="TR"){
			if(r++%2==0){
				tbody.childNode[i].className="blue";
				}
				
			}
		}
	}*/

/*function getChildren(curr){
	console.log(
	curr.nodeType!=1&&curr.nodeType!=9&&curr.nodeType!=10?
	                        curr.nodeValue:
							curr.nodeName
	);
	var children=curr.childNodes;
	if(children){
		for(var i=0,len=children.length;i<len;i++){
			getChildren(children[i])
			}
		}
	}
window.onload=function(){
	getChildren(document)
	}*/
//遍历节点树	
// window.onload=function(){
// var tabs=["|-"];
// (function(curr){
// 	console.log(tabs.join("")+
// 	(curr.nodeType!=1&&curr.nodeType!=9&&curr.nodeType!=10?
// 	            curr.nodeValue:
// 				curr.nodeName)
// 	);
// 	var children=curr.childNodes;
// 	if(children){
// 		tabs.unshift("\t")
// 		for(var i=0,len=children.length;i<len;i++){
// 			arguments.callee(children[i]);
// 			}
// 			tabs.shift();
// 		}
// 	})(document);
// }
//遍历元素树
window.onload=function(){	
var tabs=["|-"];
(function(curr){
	console.log(tabs.join("")+curr.nodeName
	);
	var children=curr.children;
	if(children){
		tabs.unshift("\t")
		for(var i=0,len=children.length;i<len;i++){
			arguments.callee(children[i]);
			}
			tabs.shift();
		}
	})(document);	
}