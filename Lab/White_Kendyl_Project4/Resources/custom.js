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

//Trailer One
var winTrailer = Ti.UI.createWindow({
	backgroundColor: "#686868",
	title: "Trailers",
});

//Button
var labelFT1 = Ti.UI.createLabel({
	color: "#C10000",
	font: { fontSize:18 },
	text: 'The Fast and the Furious',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: deviceWidth, 
	height: 50,
	top: 10,
});

var fT1button = Ti.UI.createView({
	backgroundColor: "#75FFFFFF",
	width: deviceWidth,
	height: 50,
	top: 10,
});

winCust.add(fT1button);
winCust.add(labelFT1);

fT1button.addEventListener('click', function(){
    winFF.openWindow(winTrailer, {animated:true});
});

//Video
var viewF1 = Ti.UI.createImageView();
var fastVideo1 = Titanium.Media.createVideoPlayer({
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo1.url = "fastVids/fast1vid.mp4";
viewF1.add(fastVideo1);
winTrailer.add(viewF1);


//Trailer Two
//Button
var labelFT2 = Ti.UI.createLabel({
	color: "#C10000",
	font: { fontSize:18 },
	text: '2 Fast 2 Furious',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: deviceWidth, 
	height: 50,
	top: 70,
});

var fT2button = Ti.UI.createView({
	backgroundColor: "#75FFFFFF",
	width: deviceWidth,
	height: 50,
	top: 70,
});

winCust.add(fT2button);
winCust.add(labelFT2);

fT2button.addEventListener('click', function(){
    winFF.openWindow(winTrailer, {animated:true});
});

//Video
var viewF2 = Ti.UI.createImageView();
var fastVideo2 = Titanium.Media.createVideoPlayer({
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo2.url = "fastVids/fast2vid.mp4";
viewF2.add(fastVideo2);
winTrailer.add(viewF2);

//Trailer Three
//Button
var labelFT3 = Ti.UI.createLabel({
	color: "#C10000",
	font: { fontSize:18 },
	text: 'The Fast and the Furious: Tokyo Drift',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: deviceWidth, 
	height: 50,
	top: 130,
});

var fT3button = Ti.UI.createView({
	backgroundColor: "#75FFFFFF",
	width: deviceWidth,
	height: 50,
	top: 130,
});

winCust.add(fT3button);
winCust.add(labelFT3);

fT3button.addEventListener('click', function(){
    winFF.openWindow(winTrailer, {animated:true});
});

//Video
var viewF3 = Ti.UI.createImageView();
var fastVideo3 = Titanium.Media.createVideoPlayer({
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo3.url = "fastVids/fast3vid.mp4";
viewF3.add(fastVideo3);
winTrailer.add(viewF3);

//Trailer Four
//Button
var labelFT4 = Ti.UI.createLabel({
	color: "#C10000",
	font: { fontSize:18 },
	text: 'Fast & Furious',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: deviceWidth, 
	height: 50,
	top: 190,
});

var fT4button = Ti.UI.createView({
	backgroundColor: "#75FFFFFF",
	width: deviceWidth,
	height: 50,
	top: 190,
});

winCust.add(fT4button);
winCust.add(labelFT4);

fT4button.addEventListener('click', function(){
    winFF.openWindow(winTrailer, {animated:true});
});

//Video
var viewF4 = Ti.UI.createImageView();
var fastVideo4 = Titanium.Media.createVideoPlayer({
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo4.url = "fastVids/fast4vid.mp4";
viewF4.add(fastVideo4);
winTrailer.add(viewF4);
