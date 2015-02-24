//Window
var win = Ti.UI.createWindow({backgroundColor: "orange", layout: "vertical"});

//Views for Buttons x 2
var button1 = Ti.UI.createView({backgroundColor: "red", width: 100, height: 100, id: 0, title: "Button 1",});
var button2 = Ti.UI.createView({backgroundColor: "yellow", width: 100, height: 100, id: 1, title: "Button 2",});
//ID

//Views for Show x 2
var view1 = Ti.UI.createView({
	backgroundColor: "red"
});

var view2 = Ti.UI.createView({
	backgroundColor: "yellow"
});

//Scrollable
var viewCollection = [view1, view2];
var swipe = Ti.UI.createScrollableView({
	views: viewCollection,
	showPagingControl: true,
});

//Event Listener
//Set Current Page
button1.addEventListener("click", function(e){
	console.log(e.source.title);
});
button2.addEventListener("click", function(e){
	console.log(e.source);
});


//Add
//win.add(swipe);
win.add(button1, button2);
//Open
win.open();
