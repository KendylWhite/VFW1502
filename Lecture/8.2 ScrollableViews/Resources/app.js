var win = Ti.UI.createWindow();

var data = [
{color:'#123', name: "Dark"},
{color:'#246', name: "Regular"},
{color:'#48b', name: "Light"},
];

var viewsCollection = [];
for(var i = 0; i < data.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: data[i].color,
		name: data[i].name,
	});
	var label = Ti.UI.createLabel({
		text: data[i].name,
	});
		view.add(label);
		viewsCollection.push(view);
}

// var view1 = Ti.UI.createView({ backgroundColor:'#123', name: "View Dark" });
// var view2 = Ti.UI.createView({ backgroundColor:'#246', name: "View Medium" });
// var view3 = Ti.UI.createView({ backgroundColor:'#48b', name: "View Light" });

var scrollableView = Ti.UI.createScrollableView({
  views: viewsCollection,
  showPagingControl:true,
  pagingControlAlpha: 10,
  pagingControlColor: "50blue",
  pagingControlHeight: 40,
});

scrollableView.addEventListener('scrollend', function(event){
	console.log(event);
	if(event.currentPage === 2){
	alert("You are on the Light View!");
	}
});

win.add(scrollableView);
win.open();


// win = Ti.UI.createWindow({backgroundColor: "grey"});
// 
// var img1 = Ti.UI.createImageView({
    // image:'http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/' +
    // 'Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/' +
    // '402px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
// });
// var img1Wrapper = Ti.UI.createScrollView({
    // maxZoomScale:4.0,
// });
// img1Wrapper.add(img1);
// 
// var img2 = Ti.UI.createImageView({
    // image:'http://www.nasa.gov/images/content/' + 
    // '616903main_rover_comparison1600_1600-1200.jpg'
// });
// var img2Wrapper = Ti.UI.createScrollView({
    // maxZoomScale:4.0,
// });
// img2Wrapper.add(img2);
// var photosView = Ti.UI.createScrollableView({
    // showPagingControl:true,
    // views:[img1Wrapper, img2Wrapper]
// });
// win.add(photosView);
// win.open();
