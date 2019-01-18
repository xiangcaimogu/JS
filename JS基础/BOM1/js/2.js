var game={
  PSIZE:100,//定义弹出窗口的文档显示区大小
  OFFSET:0,//保存窗口大小和文档显示区大小的差
  pop:null,//获取弹出的小窗口
  MAXTOP:0,//保存弹出窗口可用最大top值
  MAXLEFT:0,//保存弹出窗口可用最大left值
  init:function(){
    //计算OFFSET: 当前窗口总高度-文档显示区高度
    this.OFFSET=outerHeight-innerHeight;
    //计算MAXLEFT: 为屏幕可用宽度-PSIZE
    this.MAXLEFT=screen.availWidth-this.PSIZE;
    //计算MAXTOP: 为屏幕可用高度-PSIZE-OFFSET
    this.MAXTOP=
      screen.availHeight-this.PSIZE-this.OFFSET;
  },
  start:function(){
    this.init();//初始化游戏属性
    //在0~MAXLEFT之间生成一个随机数l
    var l=
      parseInt(Math.random()*(this.MAXLEFT+1));
    //在0~MAXTOP之间生成一个随机数t
    var t=
      parseInt(Math.random()*(this.MAXTOP+1));
    //定义配置字符串config:
    var config="top="+t+",left="+l+
                ",width="+this.PSIZE+
                ",height="+this.PSIZE;
    //打开新窗口，地址为about:blank，配置为config，将返回的新窗口保存到pop中
    this.pop=
      open("about:blank","_blank",config);
    //创建img
    var img=new Image();
    img.src="xiaoxin.gif";
    img.style.width="80px";
    img.onclick=function(){ alert("约么?"); }
    //将img添加到pop的文档内容中
    this.pop.document.body.appendChild(img);
    //留住this:闭包
    var me=this;//game
    //为pop添加鼠标进入事件:
    this.pop.onmouseover=function(){//this->pop
      //在0~MAXLEFT之间生成一个随机数l
      var l=
        parseInt(Math.random()*(me.MAXLEFT+1));
                              //game
      //在0~MAXTOP之间生成一个随机数t
      var t=
        parseInt(Math.random()*(me.MAXTOP+1));
                              //game
      this.moveTo(l,t);//移动窗口到l,t
      //pop
    };
  }
}
game.start();