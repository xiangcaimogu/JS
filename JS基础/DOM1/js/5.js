// JavaScript Document
var tabs=["|-"];
function getChildren(curr){//每次执行一次getChildren(children[i])就会console()一次
	
	console.log(tabs.join("")+(
	curr.nodeType!=9&&curr.nodeType!=1&&curr.nodeType!=10?
			             curr.nodeValue:
			             curr.nodeName
						 ))
 	var children=curr.childNodes;//类数组对象
	if(children){
		tabs.unshift("\t")
		for(var i=0,len=children.length;i<len;i++){//深度优先往子集遍历	
				getChildren(children[i])		
			}
		}
		tabs.shift()
	}
window.onload=function(){
	getChildren(document.head)
	
	}
		
window.onload=function(){
	var iterator=document.createTreeWalker(//document.createNodeIterator迭代器是一种有nextnode()推动往下遍历的方法
	document,
	NodeFilter.SHOW_ELEMENT,
	null,false
	);
/*	var node;
	while((node=iterator.nextNode())!=null){//nextNode()返回迭代器的值
		console.log(
		node.nodeType!=1&&node.nodeType!=9&&node.nodeType!=10?
		                  node.nodeValue:
						  node.nodeName
		);
		
		}*/
		var node=(iterator.firstChild());
		    node=(iterator.firstChild())
			node=(iterator.firstChild())
	console.log(node);
	
}

