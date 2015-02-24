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

var viewsContainer = [];

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
	
	var jSwipe = Ti.UI.createImageView({
	image: "shoes/" + shoesList[i],
	width: deviceWidth,
});

var zoom = Ti.UI.createScrollView({
	maxZoomScale: 2.0,
});

zoom.add(jSwipe);
//winJordan.add(zoom);
viewsContainer.push(zoom);

}
var swipe = Ti.UI.createScrollableView({
	views: viewsContainer,
	showPagingControl: true,
});

winJordan.add(swipe);
//winJordan.add(viewJordan);