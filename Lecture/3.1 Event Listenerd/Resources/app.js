//Window
var win = Ti.UI.createWindow({
	//Custom Color
	backgroundColor: "#C3A34B"
});

//View
var view = Ti.UI.createView({
	//Custom Color
	backgroundColor: "90000000",
	width: 200,
	height: 200,
	borderWidth: 3,
  	borderColor: '#95ffffff',
  	borderRadius: 3
});

//Add Event Listener
view.addEventListener('click', function(event){
	alert("I've been clicked!");
	console.log(event);
});
//Add View to Window
win.add(view);
//Open Window
win.open();
