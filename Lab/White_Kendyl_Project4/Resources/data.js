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
	top: 70,
});

var fDbutton = Ti.UI.createView({
	backgroundColor: "#99B4B4B4",
	width: 150,
	height: 50,
	top: 70,
});

//Add Button
winFast.add(fDbutton);
winFast.add(labelFd);

fDbutton.addEventListener('click', function(){
    winFF.openWindow(winData, {animated:true});
});

//Table
var fast = [
	{title: "The Fast and the Furious", image: "fastPics/fast1.jpg"},
	{title: "2 Fast 2 Furious", image: "fastPics/fast2.jpg"},
	{title: "The Fast and the Furious: Tokyo Drift", image: "fastPics/fast3.jpg"},
	{title: "Fast & Furious", image: "fastPics/fast4.jpeg"},
	{title: "Fast Five", image: "fastPics/fast5.jpg"},
	{title: "Fast & Furious 6", image: "fastPics/fast6.jpg"},
	{title: "Furious 7", image: "fastPics/fast7.jpg"},
];

var fastSection = Ti.UI.createTableViewSection({
	footerTitle: "Ride Or Die",
});

for(i = 0; i < fast.length; i++){
	var fastRow = Ti.UI.createTableViewRow({
		title: fast[i].title
	});
	fastSection.add(fastRow);
	
	fastRow.addEventListener('click', function(event){
	var detailWin = Ti.UI.createWindow({ 
        backgroundColor: "#686868",
        title: "Fast",
        views: fast,
    }); 
    detailWin.open();
});
}

var tableF = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	data: [fastSection],
	separatorColor: "#C10000",
	headerTitle: "The Fast and the Furious Series",
	top: 3,
});

winData.add(tableF);



