//Create a window
var win = Ti.UI.createWindow({
	backgroundColor: "#C27C42",
	title: "Groceries App",
});

//Data arrays
//var groceryList = ["Bacon", "Eggs", "Frosted Flakes", "Milk", "Orange Juice" ];
var breakfastItems = [
	{title: "Bacon"},
	{title: "Eggs"},
	{title: "Frosted Flakes"},
	{title: "Milk"},
	{title: "Orange Juice"},
	];
	
var lunchItems = [
	{title: "Bread"},
	{title: "Cheese"},
	{title: "Bologna"},
	{title: "Chips"},
	{title: "Soda"},
	];
	
var dinnerItems = [
	{title: "Steak"},
	{title: "Potatos"},
	{title: "Mixed Veggies"},
	{title: "Sweet Tea"},
	{title: "Pie"},
];

//TableView
//var table = Ti.UI.createTableView({
	//style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	//data: breakfastItems,
	//data: [breakfastSection, lunchSection],
	//backgroundColor: "#263673",
	//separatorColor: "#132139",
	//headerTitle: "Groceries App",
	//top: 20,
//});

var breakfastHeader = Ti.UI.createView({
	background: "#C24B42"
});

var breakfastLabel = Ti.UI.createLabel({
	color: "#C24B42",
	text: "Breakfast",
});

breakfastHeader.add(breakfastLabel);

var lunchHeader = Ti.UI.createView({
	
});

var breakfastSection = Ti.UI.createTableViewSection({
	//headerTitle: "Breakfast",
	headerView: breakfastHeader,
	footerTitle: "8:00AM - 10:30AM"
});

var lunchSection = Ti.UI.createTableViewSection({
	//headerTitle: "Lunch"
	headerTitle: "Lunch",
	footerTitle: "11:30AM - 1:00PM"
});

var dinnerSection = Ti.UI.createTableViewSection({
	headerTitle: "Dinner",
	footerTitle: "6:00PM - 8:00PM"
});

for(i = 0; i < breakfastItems.length; i++){
	var row = Ti.UI.createTableViewRow({
		title: breakfastItems[i].title
	});
}


win.add(row);
//TODO: Add tableView sections totable

var table = Ti.UI.createTableView({
	//style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	//data: breakfastItems,
	data: [breakfastSection, lunchSection, dinnerSection],
	//backgroundColor: "#263673",
	separatorColor: "#132139",
	headerTitle: "Groceries",
	top: 20,
});


//Device Detection
var osName = Ti.Platform.name;
console.log(osName);
if(osName === "iPhone OS"){
	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

//Open
win.add(table);
win.open();
