//Topic: Movies

//3+ data arrays
var action = [
	{title: "Fast & Furious 6"},
	{title: "G.I. Joe: Retaliation"},
	{title: "The Equalizer"},
	{title: "Dracula Untold"},
	{title: "American Sniper"},
	];
	
var comedy = [
	{title: "22 Jump Street"},
	{title: "Let's Be Cops"},
	{title: "Ted"},
	{title: "Dumb & Dumber"},
	{title: "Anchorman"},
	];
	
var fiction = [
	{title: "Toy Story"},
	{title: "The Avengers"},
	{title: "Planet of the Apes"},
	{title: "Transformers"},
	{title: "Gravity"},
];

//Table, tableSections, tableViewRows
//Action
var actionHeader = Ti.UI.createView({
	backgroundColor: "#A13E36"
});

var actionLabel = Ti.UI.createLabel({
	color: "f1e904",
	text: "Action",
});

actionHeader.add(actionLabel);

//Comedy
var comedyHeader = Ti.UI.createView({
	backgroundColor: "#AC7539"
});

var comedyLabel = Ti.UI.createLabel({
	color: "f1e904",
	text: "Comedy",
});

comedyHeader.add(comedyLabel);

//Fiction
var fictionHeader = Ti.UI.createView({
	backgroundColor: "#3EBBB3"
});

var fictionLabel = Ti.UI.createLabel({
	color: "f1e904",
	text: "Fiction",
});

fictionHeader.add(fictionLabel);

//Sections
var actionSection = Ti.UI.createTableViewSection({
	headerView: actionHeader
});

var comedySection = Ti.UI.createTableViewSection({
	headerView: comedyHeader
});

var fictionSection = Ti.UI.createTableViewSection({
	headerView: fictionHeader
});

//For Loops
for(i = 0; i < action.length; i++){
	var row = Ti.UI.createTableViewRow({
		title: action[i].title
	});
	actionSection.add(row);
};

for(i = 0; i < comedy.length; i++){
	var row = Ti.UI.createTableViewRow({
		title: comedy[i].title
	});
	comedySection.add(row);
};

for(i = 0; i < fiction.length; i++){
	var row = Ti.UI.createTableViewRow({
		title: fiction[i].title
	});
	fictionSection.add(row);
};

//Tables
var tableA = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	data: [actionSection],
	separatorColor: "#132139",
	headerTitle: "Movies",
	top: 20,
});

winAction.add(tableA);

var tableC = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	data: [comedySection],
	separatorColor: "#132139",
	headerTitle: "Movies",
	top: 20,
});

winComedy.add(tableC);

var tableF = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	data: [fictionSection],
	separatorColor: "#132139",
	headerTitle: "Movies",
	top: 20,
});

winFiction.add(tableF);

//Device Detection
var osName = Ti.Platform.name;
console.log(osName);
if(osName === "iPhone OS"){
	tableA.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

