import { Component } from '@angular/core';
import { Skill } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-skilks-page',
  templateUrl: './skilks-page.component.html',
  styleUrls: ['./skilks-page.component.css']
})
export class SkilksPageComponent {

  public skills:Skill[]=[
    {
      header: "Java",
      subheader:"Backend - Microservicios",
      img:"https://miro.medium.com/v2/resize:fit:1400/1*vFiGOTV1S8yz0RTIQteTjw.png",
      description:"Desarrollo de API's con java y spring boot, aplicando medidas de seguirdad y autenticación de usuarios."
    },
    {
      header: "Node",
      subheader:"Backend - Monolito",
      img:"https://miro.medium.com/v2/resize:fit:1400/1*f7ztMaMM0etsFHpEfkdiwA.png",
      description:"Desarrollo de API's con Node y spring boot, aplicando medidas de seguirdad y autenticación de usuarios y aplicaciones monoliticas."
    },
    {
      header: "Angular",
      subheader:"Frontend",
      img:"https://miro.medium.com/v2/resize:fit:783/1*Kj8Eq401fP2ecTY8r9B89Q.png",
      description:"Desarrollo de interfaces de usuarios, con librerías como primeng o angular material. Consumo de API's y manejo de las buenas prácticas."
    },
    {
      header: "HTML",
      subheader:"Frontend",
      img:"https://cms.rootstack.com/sites/default/files/inline-images/23-237381_java-html-language-logo-png-transparent-png.png",
      description:"Desarrollo de interfaces de usuarios."
    },
    {
      header: "MySQL",
      subheader:"SQL",
      img:"https://19604448.fs1.hubspotusercontent-na1.net/hubfs/19604448/MySQL%20un%20gestor%20de%20base%20de%20datos.jpg",
      description:"Manejo y administración de bases de datos"
    },
    {
      header: "PostgreSQL",
      subheader:"SQL",
      img:"https://miro.medium.com/v2/resize:fit:800/1*PY24xlr4TpOkXW04HUoqrQ.jpeg",
      description:"Manejo y administración de bases de datos."
    },
    {
      header: "Oracle",
      subheader:"SQL",
      img:"https://www.fujitsu.com/es/Images/oracle-db580x224_tcm77-40873.jpg",
      description:"Manejo y administración de bases de datos y PL/SQL"
    },
    {
      header: "Aws",
      subheader:"Cloud services",
      img:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      description:"Desarrollo y uso de herramientas y servicios de aws como lambda functions, step functions, Aws glue, Athena, etc."
    },
  ]

}
