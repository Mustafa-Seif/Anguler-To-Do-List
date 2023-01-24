import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Anguler-To-Do-List';
  arrTasks: any = [];
  task?: string;
  isTask?: boolean = true;
  isload?: boolean = false;
  // taskInStorage: any;
  constructor() {}

  ngOnInit() {
    this.arrTasks = JSON.parse(localStorage.getItem('localTasks') || '[]');

    window.onload = function () {
      let isload = true;
    }
  }

  handleAddTsk() {
    if (this.task) {
      this.arrTasks.push(this.task);
      console.log(localStorage.getItem('localTasks'));
      this.task = '';
      this.isTask = true;
    } else {
      this.isTask = false;
    }
    localStorage.setItem('localTasks', JSON.stringify(this.arrTasks));
  }
  deleteTask(el: number) {
    this.arrTasks.splice(el, 1);
    localStorage.setItem('localTasks', JSON.stringify(this.arrTasks));
  }
  handleDeleteAllTasks() {
    let comfirmClear = window.confirm(
      'Are you sure you want to delete all tasks'
    );
    comfirmClear ? this.arrTasks.splice(0) : this.arrTasks;
    localStorage.setItem('localTasks', JSON.stringify(this.arrTasks));
  }
}
