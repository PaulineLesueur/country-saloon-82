import { Component, OnInit } from '@angular/core';
import { ActivitiesCard } from '../models/activities-card.model';
import { SlideInterface } from '../types/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activitiesCard!: ActivitiesCard[];

  ngOnInit(): void {
    this.activitiesCard = [
      {
        title: 'Les événements du club',
        description: 'Notre club organise régulièrement des événements publics où se retrouver entre passionnés de country',
        imageUrl: '/assets/img/activities-img/event-img.jpg',
        pageUrl: '/evenements'
      },
      {
        title: 'Les cours',
        description: 'Le coeur de notre association réside dans les cours de tous niveaux que nous dispensons chaque semaine',
        imageUrl: '/assets/img/activities-img/course-img.jpg',
        pageUrl: '/cours'
      },
      {
        title: 'Les danses',
        description: 'Pour vous permettre de vous entrainer chez vous, nous mettons à votre disposition les fiches des danses apprises lors des cours',
        imageUrl: '/assets/img/activities-img/dance-img.jpg',
        pageUrl: '/coming-soon'
      }
    ];
  }

  slides: SlideInterface[] = [
    { url: '../assets/img/home-slider/IMG_7810.JPG', title: 'adhérents country saloon 82' },
    { url: '../assets/img/home-slider/IMG-20230316-WA0030.jpg', title: 'téléthon 2023' },
    { url: '../assets/img/home-slider/image0000001(1).jpg', title: 'country saloon 82' },
    { url: '../assets/img/home-slider/IMG-20221203-WA0009.jpg', title: 'club country saloon 82' },
    { url: '../assets/img/home-slider/IMG-20221204-WA0005.jpg', title: 'téléthon 2023' },
    { url: '../assets/img/home-slider/IMG-20221204-WA0023.jpg', title: 'téléthon 2023' },
    { url: '../assets/img/home-slider/IMG-20230319-WA0019.jpg', title: 'country saloon 82' },
    { url: '../assets/img/home-slider/IMG-20230320-WA0011.jpg', title: 'danse country' },
    { url: '../assets/img/home-slider/IMG-20230602-WA0019.jpg', title: 'danse country' },
    { url: '../assets/img/home-slider/IMG-20230602-WA0021.jpg', title: 'club danse country' },
    { url: '../assets/img/home-slider/IMG-20230621-WA0007.jpg', title: 'soirée danse country' },
    { url: '../assets/img/home-slider/IMG-20230621-WA0017.jpg', title: 'danse country' },
    { url: '../assets/img/home-slider/IMG-20230623-WA0003.jpg', title: 'country saloon 82' },
    { url: '../assets/img/home-slider/IMG-20230623-WA0011.jpg', title: 'country saloon 82' },
    { url: '../assets/img/home-slider/IMG-20230723-WA0008.jpg', title: 'danse country' },
    { url: '../assets/img/home-slider/IMG-20230723-WA0011.jpg', title: 'événement danse country' },
    { url: '../assets/img/home-slider/IMG-20230723-WA0013.jpg', title: 'club country saloon 82' },
  ]
}
