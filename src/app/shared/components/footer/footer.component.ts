import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isContentSmaller: boolean = false;


  public currentYear: number = 0;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Comprueba si el contenido es más pequeño que la ventana
    this.isContentSmaller = window.innerHeight > document.body.clientHeight;
  }
}
