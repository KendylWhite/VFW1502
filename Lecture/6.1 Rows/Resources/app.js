var win = Ti.UI.createWindow({backgroundColor: "#ffffff"});
var deatil = Ti.UI.createWindow({backgroundColor: "blue"});

var table = Ti.UI.createTableView();
var sectionsCollection = [];
var section = Ti.UI.createTableViewSection();

var data = [
{title: "Sample Item 1", type: "todo"},
{title: "Sample Item 2", type: "parent"},
{title: "Sample Item 3", type: "detail"},
];

for(var i = 0; i < data.length; i++){
	var row = Ti.UI.createTableViewRow({
		title: data[i].title,
	});
	if(data[i].type === "todo"){
		row.hasCheck = true;
	}else if(data[i].type === "deatil"){
		row.hasDetail = true;
	}else if(data[i].type === "parent"){
		row.hasChild = true;
	}
}

row.addEventListener('click', function(){

});

section.add(row);


var rowCheck = Ti.UI.createTableViewRow({
	title: "Sample Item",
	hasCheck: true,
});

var rowChild = Ti.UI.createTableViewRow({
	title: "Sample Item",
	hasChild: true,
});

var rowDetail = Ti.UI.createTableViewRow({
	title: "Sample Item",
	hasDetail: true,
});

//row.addEventListener('click', function(){
	//console.log("I've been clicked!");
	//detail.open();
//});
//detail.addEventListener('click', function(){
	//this.close();
//});

//section.add(rowCheck);
//section.add(rowChild);
//section.add(rowDetail);
sectionsCollection.push(section);
table.setData(sectionsCollection);

win.add(table);
win.open();
