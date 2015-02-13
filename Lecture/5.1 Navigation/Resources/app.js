var win1 = Titanium.UI.createWindow({
    backgroundColor: '#C27C42',
    title: 'Groceries'
});

var win2 = Titanium.UI.iOS.createNavigationWindow({
   window: win1
});

var win3 = Titanium.UI.createWindow({
    backgroundColor: '#C27C42',
    title: 'Breakfast'
});

var button = Titanium.UI.createButton({
    title: 'Open Breakfast Window'
});
button.addEventListener('click', function(){
    win2.openWindow(win3, {animated:true});
});

win1.add(button);
var button2 = Titanium.UI.createButton({
    title: 'Close Breakfast Window'
});
button2.addEventListener('click', function(){
    win2.closeWindow(win3, {animated:false}); //win3.close() will also work!!
});

win3.add(button2);
win2.open();