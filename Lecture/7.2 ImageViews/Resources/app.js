var pWidth = Ti.Platform.displayCaps.platformWidth;
console.log(pWidth);

//Window
var win = Ti.UI.createWindow({
	backgroundColor: "#cccccc",
});

var viewC = Ti.UI.createScrollView({
	layout: "vertical",
});

var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "pictures");
var galleryList = gallery.getDirectoryListing();
console.log(galleryList);

//Loop
for(var i = 0; i< galleryList.length; i++){
//Image View
var theImage = Ti.UI.createImageView({
	image: "pictures/" + galleryList[i],
	//height: 200,
	width: pWidth,
	borderColor: "black",
});
//console.log("pictures/" + galleryList[i]);
//Open Window
viewC.add(theImage);
}
win.add(viewC);
win.open();
