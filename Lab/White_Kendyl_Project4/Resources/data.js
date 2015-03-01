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
	backgroundColor: "#99686868",
	borderColor: "#C10000",
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

//List
var list = Ti.UI.createListView({
	backgroundColor: "#686868",
	separatorColor: "#90C10000",
});

var listSections = [];
var fast = Ti.UI.createListSection({
	headerTitle: "The Fast and the Furious Series",
});

//Create Items
fastData= [
	{properties: {title: "The Fast and the Furious", image: "fastPics/fast1.jpg", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, backgroundColor: "#99C10000"}},
	{properties: {title: "2 Fast 2 Furious", image: "fastPics/fast2.jpg", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL,}},
	{properties: {title: "The Fast and the Furious: Tokyo Drift", image: "fastPics/fast3.jpg", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, backgroundColor: "#99C10000"}},
	{properties: {title: "Fast & Furious", image: "fastPics/fast4.jpeg", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, }},
	{properties: {title: "Fast Five", image: "fastPics/fast5.jpg", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, backgroundColor: "#99C10000"}},
	{properties: {title: "Fast & Furious 6", image: "fastPics/fast6.jpg", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL,}},
	{properties: {title: "Furious 7", image: "fastPics/fast7.jpg", url: "http://www.furious7.com/", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, backgroundColor: "#99C10000"}},
];
fast.setItems(fastData);

var getDetail = function(item){
var winFun = Ti.UI.createWindow({
	//backgroundColor: "#686868",
	backgroundImage: "fastPics/fast7.jpg",
	width: deviceWidth,
});
var item = Ti.UI.createWindow({
	//backgroundImage: listSections[i],
});
winFun.add(item);
winFF.openWindow(winFun);

};

list.addEventListener('itemclick', function(event){
	console.log(event.section.getItemAt(event.itemIndex));
	getDetail(event.section.getItemAt(event.itemIndex));
});

//Set Data
listSections.push(fast);
list.sections = listSections;

winData.add(list);
winFF.open();
