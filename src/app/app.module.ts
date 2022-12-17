///////////Component////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/////////////Module///////////
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from './item/item.component';
import { ContainerItemsComponent } from './container-items/container-items.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ContainerItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
