import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-items-sidebar',
  templateUrl: './items-sidebar.component.html',
  styles: [
  ]
})
export class ItemsSidebarComponent {
  public items:MenuItem[]=[];

  ngOnInit(): void {
    this.items = [
      {
          label: 'Menu',
          items: [
              {
                  label: 'Profile',
                  icon: 'pi pi-fw pi-user',
                  routerLink:'./profile'
              },
              {
                  label: 'Skills',
                  icon: 'pi pi-fw pi-th-large',
                  routerLink:'./skills'
              },
              {
                  label: 'Experience',
                  icon: 'pi pi-fw pi-folder-open',
                  routerLink:'./experience'
              },
              {
                  label: 'Education',
                  icon: 'pi pi-fw pi-book',
                  routerLink:'./education'
              },
              {
                  label: 'Social media',
                  icon: 'pi pi-fw pi-comments',
                  routerLink:'./social-media'
              },
              {
                  separator: true
              },
              {
                  label: 'Projects',
                  icon: 'pi pi-fw pi-briefcase',
                  routerLink:'./profile',
                  disabled:true
              }
          ]
      }
  ];
  }
}
