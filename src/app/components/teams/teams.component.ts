import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getAllTeams();
  }

  getAllTeams() {
    this.teams = JSON.parse(localStorage.getItem('teams') || '[]');
  }

  deleteTeam(id: any) {
    for (let i = 0; i < this.teams.length; i++) {
      if (parseInt(this.teams[i].id) === parseInt(id)) {
        this.teams.splice(i, 1);
        localStorage.setItem('teams', JSON.stringify(this.teams));
        break;
      }
    }
  }

  navigateTo(path: string, id: any) {
    this.router.navigate([path, id]);
  }
}
