import { Component,Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-container-items',
  templateUrl: './container-items.component.html',
  styleUrls: ['./container-items.component.css']
})
export class ContainerItemsComponent {
  @Input() items=[];
  @Output() deleteItem = new EventEmitter<number>();
  index:number=0;
  completeTask:boolean=false;
  OnInit(){

  }

  handleDeleteItem(){
    this.deleteItem.emit(this.index)
  }
  // handleComplete(){
  //   this.completeTask = !this.completeTask;
  // }
}
