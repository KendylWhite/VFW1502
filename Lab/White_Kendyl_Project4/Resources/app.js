//Kendyl White - Project 4

//Window
var winFast = Ti.UI.createWindow({
	backgroundColor: "#686868",
	title: "The Fast and the Furious",
});

var viewF = Titanium.UI.createView({
	backgroundImage: "challenger.jpg",
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
winFast.add(viewF);
winFF.open();