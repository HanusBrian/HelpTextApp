var app = require('app');
var BrowerWindow = require('browser-window');

app.on('ready', ()=>{
    var mainWindow = new BrowerWindow({
        width: 900,
        height: 700
    })
    mainWindow.loadURL('file://' + __dirname + '/src/index.html');
});