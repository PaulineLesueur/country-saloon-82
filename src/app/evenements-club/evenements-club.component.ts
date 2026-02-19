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
        title: 'Soirée & après midi Concert',
        description: 'Deux jours sous le signe de la country avec des concerts, des bals et des animations pour tous les âges.',
        imageUrl: '/assets/img/events-img/ConcertBalCountryV3flyer.png',
        pageUrl: '/28-02-01-03-soiree-apres-midi-concert'
      }
    ];
  }
}
