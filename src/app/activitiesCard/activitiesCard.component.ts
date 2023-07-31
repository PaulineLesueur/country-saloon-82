import { Component, OnInit, Input } from '@angular/core';
import { ActivitiesCard } from '../models/activities-card.model';

@Component({
  selector: 'app-activities-card',
  templateUrl: './activitiesCard.component.html',
  styleUrls: ['./activitiesCard.component.scss']
})
export class ActivitiesCardComponent implements OnInit {
  @Input() activitiesCard!: ActivitiesCard;
  ngOnInit(): void {
    
  }
}
