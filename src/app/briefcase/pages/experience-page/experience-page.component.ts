import { Component } from '@angular/core';
import { Experience } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css']
})
export class ExperiencePageComponent {

  public exps:Experience[]=[
    {
      startDate: new Date("2022-01-17"),
      endDate: new Date("2022-05-30"),
      workPosition: "Programador full stack",
      descriptions: [
        "Desarrollo de APIs utilizando Spring Boot y la creación de interfaces de usuario con Angular y Angular Material.",
        "Experiencia en la gestión de bases de datos, incluyendo MySQL, Oracle y PostgreSQL.",
        "Implementación de aplicaciones en entornos Docker.",
        "Conocimiento en la configuración y mantenimiento de flujos de datos utilizando Pentaho Spoon."
      ],
      workPlace: "Grupo Consiti",
      img:"assets/img/consiti.png",
      icon:'pi pi-building',
      color:'#607D8B'
    },
    {
      startDate: new Date("2022-06-06"),
      endDate: undefined,
      workPosition: "Desarrollador de software",
      descriptions: [
        "Experiencia en servicios de AWS, incluyendo Athena, y habilidades en programación en Python con Spark para análisis de datos avanzados.",
        "Experiencia en la gestión de bases de datos, incluyendo MySQL, Oracle y PostgreSQL."
      ],
      workPlace: "Lifemiles",
      img:"https://tubcc.com.co/wp-content/uploads/2023/03/Life-miles.png",
      icon:'pi pi-building',
      color:'#607D8B'
    },
  ]
}
