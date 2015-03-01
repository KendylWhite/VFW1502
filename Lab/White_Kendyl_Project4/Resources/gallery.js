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
	top: 10,
});

var fGbutton = Ti.UI.createView({
	backgroundColor: "#99686868",
	borderColor: "#C10000",
	width: 150,
	height: 50,
	top: 10,
});

//Add Button
winFast.add(fGbutton);
winFast.add(labelFg);

fGbutton.addEventListener('click', function(){
    winFF.openWindow(winGal, {animated:true});
});

var fast = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "fastPics");
var fastList = fast.getDirectoryListing();

for(i = 0; i < fastList.length; i++){
var fastImage = Ti.UI.createImageView({
	image: "fastPics/" + fastList[i],
	width: deviceWidth,
});
}

winGal.add(fastImage);
