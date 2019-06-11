import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

    name:string = '';
    nameSendToChild:string = '';

    constructor() { }

    ngOnInit() {}

    onClick(){
        this.nameSendToChild =  this.name;
        this.name = '';
    }

    onResetClick(){
        this.name = '';
    }

    onNameAssignForEdit(event){
        this.name = event;
    }

}
