//JavaScript
	
$(document).ready(function(e){	
	document.addEventListener("deviceready",function(){
    $('#beep').tap(function(){
		navigator.notification.beep(1);
	});//Tap del beep
    $('#vibrar').tap(function(){
		navigator.notification.vibrate(1000);
	});//Tap del vibrador
		
	
	},false); //deviceready
});//ready