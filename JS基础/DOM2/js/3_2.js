// JavaScript Document
function getFocus(txt){
	txt.setAttribute("class","txt_focus")
	var get=txt.parentNode.parentNode.querySelector("div");
	    get.removeAttribute("class")
	}
function valiName(txtName){
	txtName.removeAttribute("class")
	var div=txtName.parentNode.parentNode.querySelector("div");
	if(/^\w{1,10}$/.test(txtName.value)){
		div.setAttribute("class","vali_success")
		}else{
			div.setAttribute("class","vali_fail")
			}
	}
function valiPwd(txtPwd){
	txtPwd.removeAttribute("class")
	var div=txtPwd.parentNode.parentNode.querySelector("div")
	if(/^\d{6}$/.test(txtPwd.value)){
		div.setAttribute("class","vali_success")
		}else{
		div.setAttribute("class","vali_fail")
			
		}
	}