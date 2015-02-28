//Kendyl White - Project 4

//Platform width & height
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
console.log(deviceWidth);

var deviceHeight = Ti.Platform.displayCaps.platformHeight;
console.log(deviceHeight);

//Window
var winFast = Ti.UI.createWindow({
	backgroundImage: "challenger.jpg",
	backgroundColor: "#686868",
	title: "The Fast and the Furious",
});

//Nav Window
var winFF = Titanium.UI.iOS.createNavigationWindow({
	window: winFast,
});

//Require
require("gallery");
require("data");
require("custom");

//Open
winFF.open();