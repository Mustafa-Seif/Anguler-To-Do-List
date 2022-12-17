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

  ngOnInit() {}

  handleAddTsk() {
    if (this.task) {
      this.arrTasks.push(this.task);
      this.task = '';
    }
  }
  deleteTask(el:number){
    this.arrTasks.splice(el,1)
  }
  handleDeleteAllTasks(){
    this.arrTasks.splice(0)
  }
}
