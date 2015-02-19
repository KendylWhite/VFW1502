//Window
var winJordan = Ti.UI.createWindow({
	backgroundColor: "red",
	layout: "horizontal",
	top: 20,
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT
});

//Open
require("second");
winJordan.open();