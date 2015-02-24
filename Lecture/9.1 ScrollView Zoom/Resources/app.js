//Measure
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
var deviceHeight = Ti.Platform.displayCaps.platformHeight;

//Window
var win = Ti.UI.createWindow({backgroundColor: "yellow"});

//ImageView
var view1 = Ti.UI.createImageView({
	image: "img/DanceMan.gif",
	width: deviceWidth,
});
var view2 = Ti.UI.createImageView({
	image: "img/ice_cream.png",
	width: deviceHeight,
});

//ScrollView
var zoom1 = Ti.UI.createScrollView({
	maxZoomScale: 2.0,
});
var zoom2 = Ti.UI.createScrollView({
	maxZoomScale: 2.0,
});

//Add
zoom1.add(view1);
zoom2.add(view2);
win.add(zoom2);

var viewsContainer = [zoom1, zoom2];

var swipe = Ti.UI.createScrollableView({
	views: viewsContainer,
	showPagingControl: true,
});
//swipe.currentPage = 1;
swipe.setCurrentPage(1);

win.add(swipe);

//Open
win.open();