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
	backgroundColor: "#99686868",
	borderColor: "#C10000",
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

//Trailers
var winTrailer = Ti.UI.createWindow({
	backgroundColor: "#686868",
	title: "Trailers",
});

//Trailer One
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
var fastVideo1 = Titanium.Media.createVideoPlayer({
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo1.url = "fastVids/fast1vid.mp4";
winTrailer.add(fastVideo1);

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
var fastVideo2 = Titanium.Media.createVideoPlayer({
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo2.url = "fastVids/fast2vid.mp4";
winTrailer.add(fastVideo2);

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
var fastVideo3 = Titanium.Media.createVideoPlayer({
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo3.url = "fastVids/fast3vid.mp4";
winTrailer.add(fastVideo3);

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
var fastVideo4 = Titanium.Media.createVideoPlayer({
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo4.url = "fastVids/fast4vid.mp4";
winTrailer.add(fastVideo4);

//Trailer Five
//Button
var labelFT5 = Ti.UI.createLabel({
	color: "#C10000",
	font: { fontSize:18 },
	text: 'Fast Five',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: deviceWidth, 
	height: 50,
	top: 250,
});
var fT5button = Ti.UI.createView({
	backgroundColor: "#75FFFFFF",
	width: deviceWidth,
	height: 50,
	top: 250,
});
winCust.add(fT5button);
winCust.add(labelFT5);
fT5button.addEventListener('click', function(){
    winFF.openWindow(winTrailer, {animated:true});
});
//Video
var fastVideo5 = Titanium.Media.createVideoPlayer({
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo5.url = "fastVids/fast5vid.mp4";
//viewF5.add(fastVideo5);
winTrailer.add(fastVideo5);

//Trailer Six
//Button
var labelFT6 = Ti.UI.createLabel({
	color: "#C10000",
	font: { fontSize:18 },
	text: 'Fast & Furious 6',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: deviceWidth, 
	height: 50,
	top: 310,
});
var fT6button = Ti.UI.createView({
	backgroundColor: "#75FFFFFF",
	width: deviceWidth,
	height: 50,
	top: 310,
});
winCust.add(fT6button);
winCust.add(labelFT6);
fT6button.addEventListener('click', function(){
    winFF.openWindow(winTrailer, {animated:true});
});
//Video
var fastVideo6 = Titanium.Media.createVideoPlayer({
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo6.url = "fastVids/fast6vid.mp4";
winTrailer.add(fastVideo6);

//Trailer Seven
//Button
var labelFT7 = Ti.UI.createLabel({
	color: "#C10000",
	font: { fontSize:18 },
	text: 'Furious 7',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: deviceWidth, 
	height: 50,
	top: 370,
});
var fT7button = Ti.UI.createView({
	backgroundColor: "#75FFFFFF",
	width: deviceWidth,
	height: 50,
	top: 370,
});
winCust.add(fT7button);
winCust.add(labelFT7);
fT7button.addEventListener('click', function(){
    winFF.openWindow(winTrailer, {animated:true});
});
//Video
var fastVideo7 = Titanium.Media.createVideoPlayer({
    autoplay : false,
    backgroundColor : '#75000000',
    width : deviceWidth,
    height : deviceHeight / 3,
    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,
    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT
});
fastVideo7.url = "fastVids/fast7vid.mp4";
winTrailer.add(fastVideo7);
