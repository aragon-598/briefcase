import { Component } from '@angular/core';
import { Education } from '../../interfaces/education.interface';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.css']
})
export class EducationPageComponent {

  public educationList : Education[]=[
    {
      career:"Ingeniería de sistemas informáticos",
      school:"Universidad de El Salvador",
      state:false,
      startDate: new Date("2017-02-06"),
      endDate:undefined,
      img:"assets/img/graduated_letter.jpg"
    },
    {
      career:"Python data structures",
      school:"Coursera",
      state:true,
      startDate: new Date("2020-08-15"),
      endDate:new Date("2020-09-03"),
      img:"assets/img/python-structures.jpg"
    },
    {
      career:"Using python to access web data",
      school:"Coursera",
      state:true,
      startDate: new Date("2020-09-03"),
      endDate: new Date("2020-09-30"),
      img:"assets/img/python-access-web-data.jpg"
    },
    {
      career:"Using Databases with python",
      school:"Coursera",
      state:true,
      startDate: new Date("2020-11-20"),
      endDate:new Date("2020-12-08"),
      img:"assets/img/python-db.jpg"
    },
    {
      career:"Patrones de diseños y principios SOLID",
      school:"Udemy",
      state:true,
      startDate: new Date("2023-01-10"),
      endDate:new Date("2022-02-22"),
      img:"assets/img/patterns.jpg"
    },
    {
      career:"Microservicios con spring boot, cloud security Docker y API's",
      school:"Udemy",
      state:true,
      startDate: new Date("2023-04-17"),
      endDate:new Date("2023-06-29"),
      img:"assets/img/spring.jpg"
    },
    {
      career:"Angular de cero a experto - Edición 2023",
      school:"DevTalles - Fernando Herrera",
      state:true,
      startDate: new Date("2023-06-26"),
      endDate:new Date("2024-01-27"),
      img:"assets/img/angular_devtalles.jpg"
    }
  ]

}
