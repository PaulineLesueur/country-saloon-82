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
        pageUrl: '/evenements-du-club'
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
        pageUrl: '/danses'
      }
    ];
  }

  slides: SlideInterface[] = [
    { url: '../assets/img/home-slider/IMG_7810.JPG', title: 'adhérents country saloon 82'},
    { url: '../assets/img/home-slider/IMG-20230316-WA0030.jpg', title: 'téléthon 2023'}
  ]
}
