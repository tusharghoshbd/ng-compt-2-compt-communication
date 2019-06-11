import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';


@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

    name:string ='';
    constructor(
        public appService: AppService
    ) { }

    
    ngOnInit() {}

    onClick(){
        this.appService.setNameSubject(this.name);
    }


}
