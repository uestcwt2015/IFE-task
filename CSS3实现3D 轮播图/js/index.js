(function(){
	var box = document.getElementById('box');
	var angel = 0;
	function boxRotate(){
		angel = angel + 60;
		if(angel == 180){
			angel = -180;
		}
		var nowRotate = "rotateY(" + angel + "deg)";
		box.style.transform = nowRotate;
		console.log(nowRotate);
	}
	function play(){
		time = setInterval(function(){
			boxRotate()
		} ,1000);
	}
	play()

})()