function getFocus(txt){
	txt.className="txt_focus";
	txt.parentNode //td
		.parentNode //tr
		.querySelector("div")
			.className="";
}
function valiName(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\w{1,10}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}
function valiPwd(txt){
	txt.className="";
	var div=txt.parentNode //td
				.parentNode //tr
				.querySelector("div");
	if(/^\d{6}$/.test(txt.value)){
		div.className="vali_success";
		return true;
	}else{//否则
		div.className="vali_fail";
		return false;
	}
}

//取消事件，取消提交
function valiAll(e){
	var rname=valiName(document.forms[0].elements["name"])//动态绑定事件，按下提交按钮时，执行函数onblur="valiName(this)
	var rpwd=valiPwd(document.forms[0].elements["pwd"]);//这边的this就是要传入的对象。
	if(!(rname&&rpwd)){
		if(e.preventDefault){
			e.preventDefault()//DOM
			}else{
				e.returnValue=false//IE
}
		}
	}