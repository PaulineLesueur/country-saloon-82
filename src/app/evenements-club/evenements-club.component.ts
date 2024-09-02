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
        title: 'Soirée & après midi dansante - 27/28 octobre 2024',
        description: 'Informations à venir....',
        imageUrl: '/assets/img/events-img/coming-soon.jpg',
        pageUrl: '/evenements'
      }
    ];
  }
}
