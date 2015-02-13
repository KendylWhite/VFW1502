//var dataFile = require("JSON");

//Add window
var winGroceries = Titanium.UI.createWindow({
    backgroundColor: '#C27C42',
    title: 'Groceries'
});

var winG = Titanium.UI.iOS.createNavigationWindow({
   window: winGroceries
});

var winBreakfast = Titanium.UI.createWindow({
    backgroundColor: '#C27C42',
    title: 'Breakfast'
});

var winLunch = Titanium.UI.createWindow({
    backgroundColor: '#C27C42',
    title: 'Lunch'
});

var winDinner = Titanium.UI.createWindow({
    backgroundColor: '#C27C42',
    title: 'Dinner'
});


var buttonB = Titanium.UI.createButton({
    title: 'Open Breakfast Window',
    top: 250,
});
var buttonL = Titanium.UI.createButton({
    title: 'Open Lunch Window'
});
var buttonD = Titanium.UI.createButton({
    title: 'Open Dinner Window',
    bottom: 250,
});

buttonB.addEventListener('click', function(){
    winG.openWindow(winBreakfast, {animated:true});
});

buttonL.addEventListener('click', function(){
    winG.openWindow(winLunch, {animated:true});
});

buttonD.addEventListener('click', function(){
    winG.openWindow(winDinner, {animated:true});
});

winGroceries.add(buttonB);
var buttonBr = Titanium.UI.createButton({
    title: 'Close Breakfast Window'
});

winGroceries.add(buttonL);
var buttonLu = Titanium.UI.createButton({
    title: 'Close Lunch Window'
});

winGroceries.add(buttonD);
var buttonDi = Titanium.UI.createButton({
    title: 'Close Dinner Window'
});

buttonBr.addEventListener('click', function(){
    winG.closeWindow(winBreakfast, {animated:false}); //winBreakfast.close() will also work!!
});

buttonLu.addEventListener('click', function(){
    winG.closeWindow(winLunch, {animated:false});
});

buttonDi.addEventListener('click', function(){
    winG.closeWindow(winDinner, {animated:false});
});



winBreakfast.add(buttonBr);
winLunch.add(buttonLu);
winDinner.add(buttonDi);
winG.open();




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

//Breakfast
var breakfastHeader = Ti.UI.createView({
	background: "#C24B42"
});

var breakfastLabel = Ti.UI.createLabel({
	color: "#C24B42",
	text: "Breakfast",
});

var row = Ti.UI.createTableViewRow({
	title: breakfastItems[0].title,
	description: "Bacon is yummy.",
});

var breakfastSection = Ti.UI.createTableViewSection({
	//headerTitle: "Breakfast",
	headerView: breakfastHeader,
	footerTitle: "8:00AM - 10:30AM"
});


breakfastHeader.add(breakfastLabel);

for(i = 0; i < breakfastItems.length; i++){
	var row = Ti.UI.createTableViewRow({
		title: breakfastItems[i].title
	});
	breakfastSection.add(row);
};


row.addEventListener('click', function(event){
	console.log(event.source.title);
	console.log(event.source.description);
});

//Lunch
var lunchHeader = Ti.UI.createView({
	background: "#C24B42"
});

var lunchLabel = Ti.UI.createLabel({
	color: "#C24B42",
	text: "Lunch",
});

var row = Ti.UI.createTableViewRow({
	title: lunchItems[0].title,
	description: "Bread is yummy.",
});

var lunchSection = Ti.UI.createTableViewSection({
	//headerTitle: "Lunch",
	headerView: lunchHeader,
	footerTitle: "11:30AM - 1:00PM"
});

lunchHeader.add(lunchLabel);

for(i = 0; i < lunchItems.length; i++){
	var row = Ti.UI.createTableViewRow({
		title: lunchItems[i].title
	});
	lunchSection.add(row);
};


row.addEventListener('click', function(event){
	console.log(event.source.title);
	console.log(event.source.description);
});

//Dinner
var dinnerHeader = Ti.UI.createView({
	background: "#C24B42"
});

var dinnerLabel = Ti.UI.createLabel({
	color: "#C24B42",
	text: "Dinner",
});

var row = Ti.UI.createTableViewRow({
	title: dinnerItems[0].title,
	description: "Steak is yummy.",
});

var dinnerSection = Ti.UI.createTableViewSection({
	//headerTitle: "Dinner",
	headerView: dinnerHeader,
	footerTitle: "6:00PM - 8:00PM"
});

dinnerHeader.add(dinnerLabel);

for(i = 0; i < dinnerItems.length; i++){
	var row = Ti.UI.createTableViewRow({
		title: dinnerItems[i].title
	});
	dinnerSection.add(row);
};


row.addEventListener('click', function(event){
	console.log(event.source.title);
	console.log(event.source.description);
});


win.add(row);
//TODO: Add tableView sections to table

var tableBreakfast = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	//data: breakfastItems,
	data: [breakfastSection],
	//backgroundColor: "#263673",
	separatorColor: "#132139",
	headerTitle: "Groceries",
	top: 20,
});

winBreakfast.add(tableBreakfast);

var tableLunch = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	//data: breakfastItems,
	data: [lunchSection],
	//backgroundColor: "#263673",
	separatorColor: "#132139",
	headerTitle: "Groceries",
	top: 20,
});

winLunch.add(tableLunch);
	
var tableDinner = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	//data: breakfastItems,
	data: [dinnerSection],
	//backgroundColor: "#263673",
	separatorColor: "#132139",
	headerTitle: "Groceries",
	top: 20,
});

winDinner.add(tableDinner);

//Device Detection
var osName = Ti.Platform.name;
console.log(osName);
if(osName === "iPhone OS"){
	tableBreakfast.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

//Open
//win.add(table);
winG.open();

