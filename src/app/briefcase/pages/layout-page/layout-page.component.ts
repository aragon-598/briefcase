import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sidebarVisible:boolean = false;

  changeSidebarVisible(value:boolean){
    this.sidebarVisible=value;
    this.sidebarVisible
  }
}
