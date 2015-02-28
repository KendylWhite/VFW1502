//Window
var winCust = Ti.UI.createWindow({
	backgroundColor: "#686868",
	title: "Trailers",
});

// Create Button
var labelFc = Ti.UI.createLabel({
	color: "#C10000",
	font: { fontSize:24 },
	text: 'Trailers',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: 150, 
	height: 50,
	top: 130,
});

var fCbutton = Ti.UI.createView({
	backgroundColor: "#75FFFFFF",
	width: 150,
	height: 50,
	top: 130,
});

//Add Button
winFast.add(fCbutton);
winFast.add(labelFc);

fCbutton.addEventListener('click', function(){
    winFF.openWindow(winCust, {animated:true});
});

var winTrailer1 = Ti.UI.createWindow({
	backgroundColor: "#686868",
	title: "Trailers",
});

// Create Button
var labelFT1 = Ti.UI.createLabel({
	color: "#C10000",
	font: { fontSize:24 },
	text: 'The Fast and the Furious',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: deviceWidth, 
	height: 50,
	top: 50,
});

var fT1button = Ti.UI.createView({
	backgroundColor: "#75FFFFFF",
	width: deviceWidth,
	height: 50,
	top: 50,
});

winCust.add(fT1button);
winCust.add(labelFT1);

fT1button.addEventListener('click', function(){
    winFF.openWindow(winTrailer1, {animated:true});
});

//Video
var viewF = Ti.UI.createImageView();
var fastVideo = Titanium.Media.createVideoPlayer({
    top : 3,
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo.url = "fastVids/fast1vid.mp4";
viewF.add(fastVideo);
winTrailer1.add(viewF);