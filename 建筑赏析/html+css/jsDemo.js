
var cChild = document.getElementById("cChild");
var list = document.getElementById("getBig").getElementsByTagName("li");
var name = document.getElementById("name1");
var password = document.getElementById("password1");
var sub = document.getElementById("sub");
var turn = document.getElementsByClassName("change");
var array = ["../images/2-1.jpg","../images/2-2.jpg","../images/2-3.jpg","../images/2-4.jpg"];
var index = 0 ;
//轮播图的效果

var play = setInterval(function(){
    if(index<3){
    index++;
    cChild.src = array[index];
    
    }else{
        index = 0;
        cChild.src = array[index];
    }
},3000);
for(var j = 0;j<turn.length;j++){
    turn[j].onmouseout = function(){
        this.src = "../images/圆圈.png";
        cChild.src = array[index];
        runner();
    }
}
turn[0].onmouseover = function(){
    this.src = "../images/实心.png";
    cChild.src = array[0];
    index = 1;
}
turn[1].onmouseover = function(){
    this.src = "../images/实心.png";
    cChild.src = array[1];
    index = 2;
}
turn[2].onmouseover = function(){
    this.src = "../images/实心.png";
    cChild.src = array[2];
    index = 3;
}
turn[3].onmouseover = function(){
    this.src = "../images/实心.png";
    cChild.src = array[3];
    index = 0;
}
for(var i = 0;i<list.length;i++){
    list[i].onmouseover = function(){
        this.style.fontSize = "18px";
    }
    list[i].onmouseout = function(){
        this.style.fontSize = "16px";
    }
}
sub.onclick = function(){
    if(name.value != "" && password.value!= ""){
        alert("登陆成功！");
    }else{
        alert("请输入用户名和密码！");
    }
}
var speed=10;//数字越大越慢
var demo=document.getElementById("demo")
var demo1=document.getElementById("demo1")
var demo2=document.getElementById("demo2")
demo2.innerHTML=demo1.innerHTML;
function marquee(){
    if(demo.scrollLeft>=demo1.offsetWidth){
        demo.scrollLeft=0;
    }else{
        demo.scrollLeft++;
    }
}
setInterval(marquee,speed)




