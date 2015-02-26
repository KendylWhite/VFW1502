win=Ti.UI.createWindow({
	backgroundColor:"#ABE3CA",
});


var view=Ti.UI.createView({
	height:100,
	width: 100,
});

//imageView
var photo=Ti.UI.createImageView({
	image:"smokey/smokey.jpeg",
	width: 40,
	height: 200,
});


view.add(photo);

win.open();
