import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
