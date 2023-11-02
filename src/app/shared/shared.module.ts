import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ItemsSidebarComponent } from './components/items-sidebar/items-sidebar.component';
import { CheckImgPipe } from './pipes/check-img.pipe';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    ItemsSidebarComponent,
    CheckImgPipe
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    MenuComponent,
    FooterComponent,
    ItemsSidebarComponent,
    CheckImgPipe
  ]
})
export class SharedModule { }
