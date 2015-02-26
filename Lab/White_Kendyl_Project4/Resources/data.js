//Window
var winData = Ti.UI.createWindow({
	backgroundColor: "#686868",
	title: "Movies",
});

//Create Button
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

//Add Button
winFF.add(fDbutton);
winFF.add(labelFd);

fDbutton.addEventListener('click', function(){
    winFF.openWindow(winData, {animated:true});
});

//Table
var fast = [
	{title: "The Fast and the Furious"},
	{title: "2 Fast 2 Furious"},
	{title: "The Fast and the Furious: Tokyo Drift"},
	{title: "Fast & Furious"},
	{title: "Fast Five"},
	{title: "Fast & Furious 6"},
	{title: "Furious 7"},
];

var fastSection = Ti.UI.createTableViewSection({
	footerTitle: "Ride Or Die",
});

for(i = 0; i < fast.length; i++){
	var fastRow = Ti.UI.createTableViewRow({
		title: fast[i].title
	});
	fastSection.add(fastRow);
};

var tableF = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	data: [fastSection],
	separatorColor: "#C10000",
	headerTitle: "The Fast and the Furious Series",
});

winData.add(tableF);
