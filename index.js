var app = require('app');
var BrowerWindow = require('browser-window');
var fs = require('fs');
var http = require('http');
var path = require('path');
var electron = require('electron');
var ipcMain = electron.ipcMain;
var remote = electron.remote;
var dialog = electron.dialog;
var exec = require('child_process').exec;

app.on('ready', () => {
    var mainWindow = new BrowerWindow({
        width: 900,
        height: 700,
        resizable: false
    })

    mainWindow.loadURL('file://' + __dirname + '/src/index.html');

    // running paint from cmd to test 
    (function(){console.log("running paint");
    exec('"C:/Windows/System32/mspaint.exe"')})()
});