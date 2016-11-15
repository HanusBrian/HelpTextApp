import { Component } from '@angular/core';

@Component({
    selector: "file-drop",
    template: `
    <div
      (dragover)="false"
      (dragend)="false"
      (drop)="handleDrop($event)"
      style="height: 300px; border: 5px dotted #ccc;">
      <p style="margin: 10px; text-align: center">
        <strong>Drop Your Helptext Excel Here</strong>
      </p>
    </div>
    <div style="margin-top:10px;padding:10px;color:black;background-color:cyan;display:inline-block;border-radius:3px;border: 1px solid grey;"
        (click)="handleDownload()">
        Download Template</div>
    `
})

export class FileDropComponent {

    constructor() {}

    handleDrop(e) {
        var files: File = e.dataTransfer.files;
        Object.keys(files).forEach((key) => {
            console.log(files[key]);
        });
        return false;
    }

    handleDownload(){
        console.log("You pressed the download button!!!");
    }
}