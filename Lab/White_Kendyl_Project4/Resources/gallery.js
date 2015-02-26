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

winFF.add(fGbutton);
winFF.add(labelFg);