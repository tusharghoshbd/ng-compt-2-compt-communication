import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

    nameComeFromSibling1:string;
    constructor(
      public appService: AppService
    ) { }

    ngOnInit() {
        this.appService.nameSubject.subscribe(data => {
            this.nameComeFromSibling1 = data;
        });
    }

}
