var phoneSize;

//Window
var win = Ti.UI.createWindow({
	backgroundColor: "orange",
	orientationModes: [
	Titanium.UI.PORTRAIT,
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
	Titanium.UI.UPSIDE_PORTRAIT
	],
});
//View
var box = Ti.UI.createView({
	backgroundColor: "red",
	borderColor: "yellow",
	width: 100,
	height: 100,
});

//Change Function
var changeSize = function(){
	phoneSize = Ti.Platform.displayCaps.platformWidth;
	box.width = phoneSize / 2;
	box.backgroundColor = 'ornage',
	console.log(phoneSize);
};

//Event Listener
Ti.Gesture.addEventListener('orientationchange',function(event){
	console.log(event);
	changeSize(event.orientation);
});

//Add
win.add(box);
//Open
win.open();
