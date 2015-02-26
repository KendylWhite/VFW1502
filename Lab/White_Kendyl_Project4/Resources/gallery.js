//Platform width
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
console.log(deviceWidth);

//Window
var winGal = Ti.UI.createWindow({
	backgroundColor: "#686868",
	title: "Pictures",
});

//Create Button
var labelFg = Ti.UI.createLabel({
	color: "#C10000",
	font: { fontSize:24 },
	text: 'Pictures',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: 150, 
	height: 50,
	top: 75,
});

var fGbutton = Ti.UI.createView({
	backgroundColor: "#75686868",
	width: 150,
	height: 50,
	top: 75,
});

//Add Button
winFF.add(fGbutton);
winFF.add(labelFg);

fGbutton.addEventListener('click', function(){
    winFF.openWindow(winGal, {animated:true});
});

var fast = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "fastPics");
var fastList = fast.getDirectoryListing();
console.log(fastList);

var fastImage = Ti.UI.createImageView({
	image: "fastPics/" + fastList,
	width: deviceWidth,
});

winGal.add(fastImage);