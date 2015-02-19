var deviceWidth = Ti.Platform.displayCaps.platformWidth;
console.log(deviceWidth);

var deviceHeight = Ti.Platform.displayCaps.platformHeight;
console.log(deviceHeight);

var viewJordan = Ti.UI.createScrollView({
	layout: "horizontal",
});

var shoes = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "shoes");
var shoesList = shoes.getDirectoryListing();
console.log(shoesList);

//Loop
for(var i = 0; i < shoesList.length; i++){
//Image View
var jShoes = Ti.UI.createImageView({
	image: "shoes/" + shoesList[i],
	width: deviceWidth,
	//height: deviceHeight,
	borderColor: "black",
});

//Open Window
viewJordan.add(jShoes);
}
winJordan.add(viewJordan);