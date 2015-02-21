//Platform width
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
console.log(deviceWidth);

var numOfItems = 24;

var itemsInRow = 4;

var space = 5;

var spaceUsed = 4 * 2 * 5;
console.log(spaceUsed);

var itemSize = (deviceWidth - spaceUsed) / 4;
console.log(itemSize);


//ScrollView
var viewJordan = Ti.UI.createScrollView({
	//Set layout
	layout: "horizontal",
	//Set contentWidth
	contentWidth: deviceWidth,
	top: 20,
});

var shoes = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "shoes");
var shoesList = shoes.getDirectoryListing();
console.log(shoesList);

//ScrollView
var scrollWin = Ti.UI.createScrollView({
	//Set layout
	layout: "horizontal",
	//Set contentWidth
	contentWidth: deviceWidth,
	top: 20,
});

//Loop
for(var i = 0; i < shoesList.length; i++){
//Image View
var jShoes = Ti.UI.createImageView({
	image: "shoes/" + shoesList[i],
		borderColor: "black",
		width: itemSize,
		height: itemSize,
		left: space,
		right: space,
		bottom: space,
});
	var jLabel = Ti.UI.createLabel({
		color: "red",
		text: "Jordan " + (i + 1),
		top: 0,
});
	jShoes.add(jLabel);
	viewJordan.add(jShoes);
}

//Add
winJordan.add(viewJordan);