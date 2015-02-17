//Layout
var win = Ti.UI.createWindow({backgroundColor: "red"});
var list = Ti.UI.createListView({
	backgroundColor: "orange",
	top: 25,
});

var listSections = [];
var produce = Ti.UI.createListSection({
	headerTitle: "Produce",
});
var dairy = Ti.UI.createListSection({
	headerTitle: "Dairy",
});

//Create Items
produceData= [
	{properties: {title: "Celery", image: "celery.jpg", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, backgroundColor: "green", canEdit: true}},
	{properties: {title: "Carrots", image: "carrots.jpg", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK, backgroundColor: "yellow"}},
	{properties: {title: "Apples", image: "apple.png", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, backgroundColor: "red"}},
	{properties: {title: "Oranges", image: "orange.png", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK, backgroundColor: "orange" }},
	{properties: {title: "Grapes", image: "grapes.jpeg", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, backgroundColor: "purple"}},
];
produce.setItems(produceData);

dairyData = [
	{properties: {title: "Milk", image: "milk.png", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, backgroundColor: "blue"}},
	{properties: {title: "Cheese", image: "cheese.jpeg", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, backgroundColor: "yellow"}},
	{properties: {title: "Ice Cream", image: "ice_cream_256.png", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, backgroundColor: "#50431B"}},
	{properties: {title: "Yogurt", image: "yogurt.png", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_DETAIL, backgroundColor:"pink"}},
	{properties: {title: "Creamer", image: "cream.jpg", accessoryType: Titanium.UI.LIST_ACCESSORY_TYPE_CHECKMARK, backgroundColor: "#DDDE9C"}},
];
dairy.setItems(dairyData);

//Set Data
listSections.push(produce, dairy);
list.sections = listSections;

win.add(list);
win.open();
