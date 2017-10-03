import { Component } from '@angular/core';

import { Task } from './model/task';

@Component  ({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})

export class AppComponent { 
private tasks: Task[] = [];
/* ovako je izgledalo

  private tasks = [ 
     new Task(
        "Buy a monkey",
        false
     ),
     new Task (
         "Walk the turtle",
         false 
     )
  ] */
  private currentTask = new Task(null, false);

  //new function method

  addTask() {
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        //to clear field when is populated already
        this.currentTask.content = null;
  }
}
