var app = require('app');
var BrowerWindow = require('browser-window');
var fs = require('fs');
var http = require('http');
var path = require('path');
var electron = require('electron');
var ipcMain = electron.ipcMain;
var remote = electron.remote;
var dialog = electron.dialog;

app.on('ready', () => {
    var mainWindow = new BrowerWindow({
        width: 900,
        height: 700,
        resizable: false
    })
    mainWindow.loadURL('file://' + __dirname + '/src/index.html');

    ipcMain.on('downloadTemplate',
        function () {
            dialog.showSaveDialog(
                {
                    'title': 'Save HelpText Template As',
                    'defaultPath': 'helpTextTemplate.xls'
                },
                function (filename) {
                    if (filename != '' && filename != undefined && filename != null) {
                        fs.writeFile(filename, 'test.txt', function (err) {
                            if (err) {
                                console.log('An error has occured creating the file ' + err.message);
                            }
                            console.log('The file has been sucessfully saved!');
                        });
                    }

                });
        });
});