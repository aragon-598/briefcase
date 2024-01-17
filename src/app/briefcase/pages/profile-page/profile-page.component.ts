import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'briefcase-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  public firtsname:string = 'Alejandro'
  public lastname:string = 'Aragon'
  public country:string = 'El Salvador'
  public work:string = 'Lifemiles'
  public job:string = 'Software Developer'

  /**
   *
   */
  constructor(
    private messageService: MessageService
  ) {}

  show(type:number) {
    if(type===1){
      this.messageService.add({ severity: 'success', summary: 'Hi', detail: `Hola mi nombre es ${this.firtsname} ${this.lastname}` });
      return;
    }

    this.messageService.add({ severity: 'info', summary: 'Thank you', detail: 'Gracias por visitar!!' });
}

}
