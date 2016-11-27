import { Component } from '@angular/core';
// var electron = require('electron');
// import { electron } from 'electron';

@Component({
    selector: "file-drop",
    template: `
    <div
      (dragover)="false"
      (dragend)="false"
      (drop)="handleDrop($event)"
      style="height: 500px; border: 5px dotted #ccc;border-radius:10px">
      <p style="margin: 10px; text-align: center">
        <strong>Drop Your Helptext Excel Here</strong>
      </p>
    </div>
    `
})

export class FileDropComponent {

    constructor() { }

    handleDrop(e) {
        // console.log("handleDrop component function");
        var files: File = e.dataTransfer.files;
        Object.keys(files).forEach((key) => {
            console.log(files[key].name);
        });
        return false;
    }
}