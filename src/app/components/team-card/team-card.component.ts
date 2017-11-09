import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../models/team.model';
import { LayoutService } from '../../services/layout/layout.service';

@Component({
  selector: 'bd-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() team: Team;
  constructor(private layout: LayoutService) { }

  ngOnInit() {
  }

}
