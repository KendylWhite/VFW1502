//Resubmit
//Window
var winJordan = Ti.UI.createWindow({
	backgroundColor: "red",
	layout: "horizontal",
	title: "Jordans",
});

var winJs = Titanium.UI.iOS.createNavigationWindow({
   window: winJordan
});

//Open
require("second");
winJs.open();