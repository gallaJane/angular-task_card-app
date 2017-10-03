import { Component, Input } from '@angular/core';

import { Task } from '../model/task';

//Meta data
@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl:'card.component.html',
    styleUrls: [ 'card.component.css' ]
})

export class CardComponent { 
    @Input() task: Task;

    // new method, little trick to toggle something

    statusToggle(){
        this.task.completed = !this.task.completed;
    }// nakon ovog moramo pozvati metodu, a to radimo u card.component.html
}