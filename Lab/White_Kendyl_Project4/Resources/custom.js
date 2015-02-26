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
	top: 195,
});

var fCbutton = Ti.UI.createView({
	backgroundColor: "#75FFFFFF",
	width: 150,
	height: 50,
	top: 195,
});

//Add Button
winFF.add(fCbutton);
winFF.add(labelFc);

fCbutton.addEventListener('click', function(){
    winFF.openWindow(winCust, {animated:true});
});