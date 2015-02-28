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

var videoPlayer = Titanium.Media.createVideoPlayer({
    top : 3,
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : 200,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});

videoPlayer.url = "fastVids/fast1vid.mp4";
winCust.add(videoPlayer);