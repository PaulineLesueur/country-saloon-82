import { Component, Input } from '@angular/core';
import { SlideInterface } from '../types/slide.interface';

@Component({
  selector: 'app-image-slider',
  templateUrl: './imageSlider.component.html',
  styleUrls: ['./imageSlider.component.scss']
})
export class ImageSliderComponent {

  @Input() slides: SlideInterface[] = [];
  currentIndex: number = 0;

  getCurrentSlideUrl(): string {
    return `url('${this.slides[this.currentIndex].url}')`
  }
}
