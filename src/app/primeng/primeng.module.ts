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
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';
import { TimelineModule } from 'primeng/timeline';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ScrollTopModule } from 'primeng/scrolltop';
import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';



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
    InputTextModule,
    ImageModule,
    CarouselModule,
    TagModule,
    BadgeModule,
    TimelineModule,
    AvatarModule,
    AvatarGroupModule,
    ScrollTopModule,
    DataViewModule,
    ToastModule
  ]
})
export class PrimengModule { }
