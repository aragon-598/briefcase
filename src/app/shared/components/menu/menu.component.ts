import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output()
  public sidebarVisibleEmitter:EventEmitter<boolean> =new EventEmitter<boolean>();

  public sidebarVisible:boolean = false;

  public menuItems:MenuItem[] =[];

  items: MenuItem[] | undefined;

  ngOnInit() {}

    changeSidebarVisibility():void{
      this.sidebarVisible=true;
      this.sidebarVisibleEmitter.emit(this.sidebarVisible)
    }
}
