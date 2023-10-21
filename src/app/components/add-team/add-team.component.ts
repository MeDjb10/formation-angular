import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-add',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team: any = {};
  addTeamForm!: FormGroup;
  id: any;
  title: string = 'ADD TEAM';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'EDIT TEAM';
      this.getTeamById();
    }
  }

  addTeam() {
    if (this.id) {
      let teams = JSON.parse(localStorage.getItem('teams') || '[]');
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].id === Number(this.id)) {
          teams[i] = this.team;
          localStorage.setItem('teams', JSON.stringify(teams));
          break;
        }
      }
    } else {
      let teams = JSON.parse(localStorage.getItem('teams') || '[]');
      this.team.id = teams.length === 0 ? 0 : teams[teams.length - 1].id + 1;
      teams.push(this.team);
      localStorage.setItem('teams', JSON.stringify(teams));
    }
    this.router.navigate(['/teams']);
  }
  

  getTeamById() {
    let teams = JSON.parse(localStorage.getItem('teams') || '[]');
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].id === Number(this.id)) {
        this.team = teams[i];
      }
    }
    return null;
  }
}
