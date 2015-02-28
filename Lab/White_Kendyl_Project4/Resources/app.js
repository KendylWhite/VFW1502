//Kendyl White - Project 4

//Platform width
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
console.log(deviceWidth);

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