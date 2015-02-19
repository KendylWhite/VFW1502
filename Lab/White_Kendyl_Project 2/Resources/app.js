//Window
var win = Ti.UI.createWindow({
	backgroundColor: "#f1e904"
});

//Windows
var winMovies = Titanium.UI.createWindow({
    backgroundColor: '#f1e904',
    title: 'Movies'
});

var winM = Titanium.UI.iOS.createNavigationWindow({
   window: winMovies
});

var winAction = Titanium.UI.createWindow({
    backgroundColor: '#A13E36',
    title: 'Action'
});

var winComedy = Titanium.UI.createWindow({
    backgroundColor: '#AC7539',
    title: 'Comedy'
});

var winFiction = Titanium.UI.createWindow({
    backgroundColor: '#3EBBB3',
    title: 'Fiction'
});

//Buttons
var buttonA = Titanium.UI.createButton({
    title: 'Action Table',
    top: 250,
});
var buttonC = Titanium.UI.createButton({
    title: 'Comedy Table'
});
var buttonF = Titanium.UI.createButton({
    title: 'Fiction Table',
    bottom: 250,
});

buttonA.addEventListener('click', function(){
    winM.openWindow(winAction, {animated:true});
});

buttonC.addEventListener('click', function(){
    winM.openWindow(winComedy, {animated:true});
});

buttonF.addEventListener('click', function(){
    winM.openWindow(winFiction, {animated:true});
});

winMovies.add(buttonA);
var buttonAc = Titanium.UI.createButton({
    title: 'Close Action'
});

winMovies.add(buttonC);
var buttonCo = Titanium.UI.createButton({
    title: 'Close Comedy'
});

winMovies.add(buttonF);
var buttonFi = Titanium.UI.createButton({
    title: 'Close Fiction'
});

buttonAc.addEventListener('click', function(){
    winM.closeWindow(buttonAction, {animated:false});
});

buttonCo.addEventListener('click', function(){
    winM.closeWindow(winComedy, {animated:false});
});

buttonFi.addEventListener('click', function(){
    winM.closeWindow(winFiction, {animated:false});
});

winAction.add(buttonAc);
winComedy.add(buttonCo);
winFiction.add(buttonFi);
winM.open();

//Place on screen
require("secondary2");
require("secondary3");
winM.open();