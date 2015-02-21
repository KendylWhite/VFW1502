//Platform width
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
var numOfItems = 100;
var itemsInRow = 4;
var space = 5;
var spaceUsed = 4 * 2 * 5;
var itemSize = (deviceWidth - spaceUsed) / 4;
console.log(deviceWidth);
console.log(itemSize);
console.log(spaceUsed);
//Window
var win = Ti.UI.createWindow({backgroundColor: "#cccccc"});
//ScrollView
var scrollWin = Ti.UI.createScrollView({
	//Set layout
	layout: "horizontal",
	//Set contentWidth
	contentWidth: deviceWidth,
	top: 20,
});
//Loop
for(i = 0; i < numOfItems; i++){
	//Views
	var view = Ti.UI.createView({
		backgroundColor: "red",
		borderColor: "white",
		width: itemSize,
		height: itemSize,
		left: space,
		right: space,
		bottom: space,
	});
	var label = Ti.UI.createLabel({
		color: "white",
		text: "Sqaure" + i,
	});
	view.add(label);
	scrollWin.add(view);
	//Position 4UP with padding
}


//Add
win.add(scrollWin);
//Open
win.open();
