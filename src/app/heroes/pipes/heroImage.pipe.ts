import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})

export class HeroImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    if(!hero.id && !hero.alt_image) return 'assets/no-image.png'
    if(hero.alt_image) return hero.alt_image
    return `assets/heroes/${hero.id}.jpg`
  }

}
