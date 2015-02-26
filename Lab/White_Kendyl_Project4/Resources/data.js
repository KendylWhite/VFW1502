var labelFd = Ti.UI.createLabel({
	color: "#C10000",
	font: { fontSize:24 },
	text: 'Movies',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	width: 150, 
	height: 50,
	top: 135,
});

var fDbutton = Ti.UI.createView({
	backgroundColor: "#99B4B4B4",
	width: 150,
	height: 50,
	top: 135,
});

winFF.add(fDbutton);
winFF.add(labelFd);