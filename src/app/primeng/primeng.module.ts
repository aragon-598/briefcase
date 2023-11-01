import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from "primeng/card";
import { FieldsetModule } from "primeng/fieldset";
import { PanelModule } from "primeng/panel";
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
  ],
  imports: [

  ],
  exports:[
    MenubarModule,
    SidebarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    TableModule,
    ToolbarModule,
    MenuModule,
    PanelMenuModule,
    SlideMenuModule,
    InputTextModule
  ]
})
export class PrimengModule { }
