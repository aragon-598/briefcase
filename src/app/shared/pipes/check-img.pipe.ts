import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkImg'
})
export class CheckImgPipe implements PipeTransform {

  transform(img:string): unknown {
    if (!img) {
      return 'assets/img/no_content.png';
    }

    return img;
  }

}
