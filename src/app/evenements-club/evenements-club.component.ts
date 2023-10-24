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
        title: 'Soirée & après midi dansante - 28/29 octobre 2023',
        description: 'Salle des fêtes St Etienne-de-Tulmont',
        imageUrl: '/assets/img/events-img/soiree2829Oct23.png',
        pageUrl: '/28-29-octobre-2023-st-etienne-de-tulmont'
      }
    ];
  }
}
