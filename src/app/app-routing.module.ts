import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { LoginComponent } from './components/login/login.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:"",component:HomeComponent}, //https:localhost:4200
  {path:"contact",component:ContactComponent}, //https:localhost:4200/contact
  {path:"add-match",component:AddMatchComponent}, //https:localhost:4200/add-match
  {path:"add-match/:id",component:AddMatchComponent},
  {path:"match",component:MatchesComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"match-details/:id",component:MatchDetailsComponent},
  {path:"add-team",component:AddTeamComponent},
  {path:"add-team/:id",component:AddTeamComponent},
  {path:"teams",component:TeamsComponent},
  {path:"team-details/:id",component:TeamDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
