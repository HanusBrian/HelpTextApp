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
var XLS = require('xlsjs');

app.on('ready', () => {
    var mainWindow = new BrowerWindow({
        width: 900,
        height: 700,
        // webPreferences: {
        //      nodeIntegration: false,
        //     preload: __dirname + '/preload.js'
        // }
        // resizable: false
    })

    mainWindow.loadURL('file://' + __dirname + '/src/index.html');

    // running paint from cmd to test 
    ipcMain.on('file-drop', (event, path)=>{
        if(path){
            console.log("File info: " + path);
            parseFile(path, event);
        }else{
            console.log("no files found");
        }
        // console.log("running paint off file drop!!!");
        // exec('"C:/Windows/System32/mspaint.exe"');
    });

    function parseFile(file, event) {
        var workbook = XLS.readFile(file, {type: "binary"});
        
        var dataArr = XLS.utils.sheet_to_row_object_array(workbook.Sheets['Sheet1']);

        for(var i = 0; i < dataArr.length; i++) {
            console.log(dataArr[i]);
        }
        fs.writeFile('src/app/helptextData.ts', 
            'export const HelptextData =\n' + JSON.stringify(dataArr, null, 4), 
            'utf-8', 
            (err) => {
                if(err) console.log(err.message);
                else {
                    console.log('File successfully written');
                    event.sender.send('file-done');
                }
            }
        );
    }
});