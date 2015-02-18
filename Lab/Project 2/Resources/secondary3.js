var winMList = Ti.UI.createWindow({
	backgroundColor: "#f1e904"
});
var list = Ti.UI.createListView({
	backgroundColor: "#f1e904",
	top: 25,
});

var listSections = [];
var  actionList = Ti.UI.createListSection({
	headerTitle: "Action",
});
var comedyList = Ti.UI.createListSection({
	headerTitle: "Comedy",
});
var fictionList = Ti.UI.createListSection({
	headerTitle: "Fiction",
});


//Create Items
actionListData= [
	{properties: {title: "Fast & Furious 6", image: "fast6.jpg"}},
	{properties: {title: "G.I. Joe: Retaliation", image: "joe.jpg"}},
	{properties: {title: "The Equalizer", image: "equal.jpg"}},
	{properties: {title: "Dracula Untold", image: "dracula.jpg"}},
	{properties: {title: "American Sniper", image: "sniper.jpg"}},
];
actionList.setItems(actionListData);

var getDetail = function(item){
var winFun = Ti.UI.createWindow({
	backgroundColor: "#f1e904",
});
var item = Ti.UI.createWindow({
	text: "Movies",
	backgroundImage: listSections[i],
});
winFun.add(item);
winM.openWindow(winFun);
};


list.addEventListener('itemclick', function(event){
	console.log(event.section.getItemAt(event.itemIndex));
	getDetail(event.section.getItemAt(event.itemIndex));
});


comedyListData= [
	{properties: {title: "22 Jump Street", image: "22.jpg"}},
	{properties: {title: "Let's Be Cops", image: "cops.jpg"}},
	{properties: {title: "Ted", image: "ted.jpg"}},
	{properties: {title: "Dumb & Dumber", image: "dumb.jpg"}},
	{properties: {title: "Anchorman", image: "anchor.jpg"}},
];
comedyList.setItems(comedyListData);

fictionListData= [
	{properties: {title: "Toy Story", image: "toy.jpg"}},
	{properties: {title: "The Avengers", image: "avengers.jpg"}},
	{properties: {title: "Planet of the Apes", image: "apes.jpg"}},
	{properties: {title: "Transformers", image: "transform.jpg"}},
	{properties: {title: "Gravity", image: "gravity.jpg"}},
];
fictionList.setItems(fictionListData);

//Set Data
listSections.push(actionList, comedyList, fictionList);
list.sections = listSections;

var buttonML = Titanium.UI.createButton({
    title: 'Movie List',
    top: 215,
});

buttonML.addEventListener('click', function(){
    winM.openWindow(winMList, {animated:true});
});

winMovies.add(buttonML);

winMList.add(list);
winM.open();
