import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '../../interfaces/social-media.interface';

@Component({
  selector: 'app-social-media-page',
  templateUrl: './social-media-page.component.html',
  styleUrls: ['./social-media-page.component.css']
})
export class SocialMediaPageComponent implements OnInit {

  public socialMediaList:SocialMedia[] = [
    {
      url:"https://github.com/aragon-598",
      img:"assets/img/github.png",
      title:"Github",
      nickname:'@aragon-598'
    },
    {
      url:"https://www.linkedin.com/in/aragon598/",
      img:"assets/img/linkedin.png",
      title:"Linkedin",
      nickname:'@aragon598'
    },
    {
      url:"https://twitter.com/alejo_aragon598",
      img:"assets/img/twitter.png",
      title:"Twitter",
      nickname:'@alejo_aragon598'
    },
    {
      url:"https://www.instagram.com/aaragon__/",
      img:"assets/img/instagram.png",
      title:"Instagram",
      nickname:'@aaragon__'
    },
  ]


  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  goToSocialMediaProfile(url:string):void{
    window.open(url, '_blank');
    // location.replace(url);
  }

}
