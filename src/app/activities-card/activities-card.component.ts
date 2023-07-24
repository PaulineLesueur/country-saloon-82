import { Component, OnInit, Input } from '@angular/core';
import { ActivitiesCard } from '../models/activities-card.model';

@Component({
  selector: 'app-activities-card',
  templateUrl: './activities-card.component.html',
  styleUrls: ['./activities-card.component.scss']
})
export class ActivitiesCardComponent implements OnInit {
  @Input() activitiesCard!: ActivitiesCard;
  ngOnInit(): void {
    
  }
}
