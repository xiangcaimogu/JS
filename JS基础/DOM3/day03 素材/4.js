// JavaScript Document
window.onload=function(){
	var form=document.forms[0];
	var txtName=form.elements["userName"]
	txtName.onfocus=function(){
		var reg=/^(\s*|请输入您的姓名)$/;
		if(reg.test(txtName.value)){
			txtName.value="";//this.attributes["value"]
			txtName.className="";
		}
	}
	txtName.onblur=function(){
		var reg=/^(\s*|请输入您的姓名)$/;
		if(reg.test(txtName.value)){
			txtName.value="请输入您的姓名";
			txtName.className="hintText";
		}
	}
	var texta=form.elements["content"];
	texta.onfocus=function(){
		var reg=/^(\s*|请输入留言内容)$/;
		if(reg.test(texta.value)){
			texta.value="";
			texta.className="";
			}
		}
	texta.onblur=function(){
		var reg=/^(\s*|请输入留言内容)$/;
		if(reg.test(texta.value)){
			texta.value="请输入留言内容";
			texta.className="hintText";
			}
		}
			
	var chb=form.querySelector('input[type="checkbox"]');
	var btnSubmit=form.querySelector('input[type="button"]');
	chb.onclick=function(){
		btnSubmit.disabled=!chb.checked;//这边需要等于false，才不禁用input，可以提交
		console.log(btnSubmit.disabled)//提交按钮disable属性值等于disable时，输出是true，禁用input
		console.log(chb.checked)//check预选为true
		}

	btnSubmit.onclick=function(){
		if(/^(\s*|请输入您的姓名)$/.test(txtName.value)){
			txtName.onfocus()
			}else if(/^(\s*|请输入留言内容)$/.test(texta.value)){
				texta.onfocus()
				}else{
					form.submit()
					}
		}
}