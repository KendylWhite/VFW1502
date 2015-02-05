//Object
var win = Ti.UI.createWindow({
	//Background Color
	backgroundColor: "#C3A34B",
});

//Array
var wildAnimals = ['Lion', 'Tiger', 'Leopard', 'Bear', 'Gorilla'];

//Create a label
//Variable
var label1 = Ti.UI.createLabel({
	//Property
  color: "#000",
  font: { fontSize:18 },
  text: 'Wild Animals',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 0,
  width: 200, height: 100
});

var label2 = Ti.UI.createLabel({
	color: "#000",
	font: { fontSize:36 },
	text: wildAnimals[0],
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 100,
	width: 200, height: 100
});

var label3 = Ti.UI.createLabel({
	color: "#000",
	font: { fontSize:12 },
	text: 'Previous',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	top: 0,
	left: 10,
	width: 200, height: 100
});

var label4 = Ti.UI.createLabel({
	color: "#000",
	font: { fontSize:12 },
	text: 'Next',
	textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
	top: 0,
	right: 10,
	width: 200, height: 100
});

//Create a view
var view1 = Ti.UI.createView({
	backgroundImage: "lion7.jpg",
	width: 300,
	height: 200,
});

var view2 = Ti.UI.createView({
	backgroundImage: "tigers.jpg",
	width: 300,
	height: 200,
});

//add is a method
win.add(label1);
win.add(label2);
win.add(label3);
win.add(label4);
win.add(view1);
win.open();
//

