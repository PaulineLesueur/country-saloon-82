import { Component, OnInit } from '@angular/core';
import { ActivitiesCard } from '../models/activities-card.model';

@Component({
  selector: 'app-evenements-club',
  templateUrl: './evenements-club.component.html',
  styleUrls: ['./evenements-club.component.scss']
})
export class EvenementsClubComponent implements OnInit {
  activitiesCard!: ActivitiesCard[];

  ngOnInit(): void {
    this.activitiesCard = [
      {
        title: 'Festival américain - 26, 27 et 28 septembre 2025',
        description: 'Nous vous proposons, sur 3 jours, le 1er Festival Américain du Tarn et Garonne, les 26,27 et 28 septembre prochain.',
        imageUrl: '/assets/img/events-img/festivalSept25.png',
        pageUrl: '/26-27-28-septembre-2025-st-etienne-de-tulmont'
      }
    ];
  }
}
