import { Component,Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-container-items',
  templateUrl: './container-items.component.html',
  styleUrls: ['./container-items.component.css']
})
export class ContainerItemsComponent {
  @Input() items=[];
  @Output() deleteItem = new EventEmitter<number>();
  constructor(){
    
  }
  
  OnInit(){


  }

  handleDeleteItem(el:number){
    this.deleteItem.emit(el)
  }
  
}
