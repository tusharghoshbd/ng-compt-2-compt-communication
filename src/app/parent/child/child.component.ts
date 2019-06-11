import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

    @Input() nameFromParent = ''; 
    @Output('editEvent') nameEdit: EventEmitter<string> =   new EventEmitter();

    constructor() { }

    ngOnInit() {}

    onEditClick(){
        this.nameEdit.emit(this.nameFromParent);
    }

}
