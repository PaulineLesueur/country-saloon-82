import { Component, HostListener, Input } from '@angular/core';
import { SlideInterface } from '../types/slide.interface';

@Component({
  selector: 'app-image-slider',
  templateUrl: './imageSlider.component.html',
  styleUrls: ['./imageSlider.component.scss']
})
export class ImageSliderComponent {

  @Input() slides: SlideInterface[] = [];
  currentIndex: number = 0;

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide ? this.slides.length - 1 : this.currentIndex -1;
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length -1;
    const newIndex = isLastSlide ? 0 : this.currentIndex +1;
    this.currentIndex = newIndex;
  }

  getCurrentSlideUrl(): string {
    return `${this.slides[this.currentIndex].url}`
  }

  @HostListener('window:keydown.ArrowLeft', ['$event'])
  handleLeftArrow(event: KeyboardEvent) {
    this.goToPrevious();
  }

  @HostListener('window:keydown.ArrowRight', ['$event'])
  handleRightArrow(event: KeyboardEvent) {
    this.goToNext();
  }

  isSliderFullscreen = false;
  fullScreenImage(): void {
    this.isSliderFullscreen = !this.isSliderFullscreen;
  }
}
