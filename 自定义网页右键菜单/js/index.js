var menu = document.getElementById('menu');
document.oncontextmenu = function(e){
	var event = e || window.event; //做一下兼容
	menu.style.display = 'block';
	//定义菜单显示在边缘的位置
	var maxDistanceX = document.documentElement.clientWidth - menu.offsetWidth,
		maxDistanceY = document.documentElement.clientHeight - menu.offsetHeight;
	//判断鼠标坐标是否大于窗口宽度
	var menuX = (event.clientX > maxDistanceX) ? maxDistanceX : event.clientX,
		menuY= (event.clientY > maxDistanceY) ? maxDistanceY : event.clientY;
	//定位菜单位置
	menu.style.left	= menuX + 'px',
	menu.style.top = menuY + 'px';

	return false;//阻止浏览器默认行为

}

document.onclick = function() {
	menu.style.display = "none";
}

var li = document.getElementsByTagName('li');
for(var i=0;i<li.length;i++){
	li[i].onclick=function(){
		alert(this.childNodes[1].innerText);
	}
}