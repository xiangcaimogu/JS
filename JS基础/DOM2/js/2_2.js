var unselCts=[];//保存所有未选中的国家
var selCts=[];//保存已选中的国家
//当前页面加载后
window.onload=function(){
  //将id为unsel的元素的内容去开头和结尾的空格后，掐头去尾，再切割，保存到unselCts
  unselCts=unsel.innerHTML
                .trim()
                .slice(8,-9)
                .split(/<\/option>\s*<option>/);
  console.log(String(unselCts));
}
function move(btn){
  switch(btn.innerHTML){//判断btn的内容
    case "&gt;&gt;"://如果是>>
      //将unselCts拼接到selCts上，再默认排序，再保存回selCts
      selCts=selCts.concat(unselCts).sort()
      unselCts.length=0;//清空unselCts
      break;
	  
    case "&lt;&lt;"://如果是<<
      //将selCts拼接到unselCts上，再默认排序，再保存回unselCts
      unselCts=unselCts.concat(selCts).sort()
      selCts.length=0;//清空selCts
      break;
    case "&gt;"://如果是>
      //获得id为unsel下的所有option，保存在opts
      var opts=
        unsel.getElementsByTagName(
          "option"
        );
      //从后向前遍历opts中每个option
      for(var i=opts.length-1;i>=0;i--){
        //如果当前opt是选中的
        if(opts[i].selected){
          //删除unselCts中相同位置的一个元素，再将删除的元素拼接到selCts中，再默认排序，再保存回selCts中
          selCts=unselCts.splice(i,1)
                         .concat(selCts)
                         .sort();
        }
      }
      break;
    case "&lt;"://如果是<
      //获得id为sel下的所有option，保存在opts
      var opts=
        sel.getElementsByTagName(
          "option"
        );
      //从后向前遍历opts中每个option
      for(var i=opts.length-1;i>=0;i--){
        //如果当前opt是选中的
        if(opts[i].selected){
          //删除selCts中相同位置的一个元素，再将删除的元素拼接到unselCts中，再默认排序，再保存回unselCts中
          unselCts=selCts.splice(i,1)
                         .concat(unselCts)
                         .sort();
        }
      }
      break;
  }
//如果遍历时，可能删除数组元素，都要从后向前遍历
  updateView(unsel,unselCts);
  updateView(sel,selCts);
}
function updateView(sel,cts){
  //如果cts的length是0，就清空sel的内容
  //否则，将cts按option标签拼接为字符串，再前加头，后加位，将结果保存到sel的内容中
  sel.innerHTML=cts.length==0?"":
    "<option>"+
    cts.join("</option><option>")
    +"</option>";  
}