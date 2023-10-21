import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  matches!:any
  match:any={}
  addMatchForm !: FormGroup
  id: any;
  title:string='ADD MATCH'

  constructor(private activatedRoute:ActivatedRoute,private router:Router){
  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    if(this.id){
      this.title='EDIT MATCH'
      this.getMatchById()
  }}

  addMatch(){
    if(this.id){
      //edit
      let t=JSON.parse(localStorage.getItem("matches") || '[]')
      for (let i = 0; i < t.length; i++) {
        if (t[i].id===Number(this.id)) {
          t[i]=this.match
        }
        localStorage.setItem('matches',JSON.stringify(t))
      }
    }else{
      //ajout
      this.matches=JSON.parse(localStorage.getItem("matches") || "[]")
      this.match.id = this.matches.length === 0 ? 0 : this.matches[this.matches.length - 1].id + 1;
      console.log(this.match)
      this.matches.push(this.match)
      localStorage.setItem("matches",JSON.stringify(this.matches))
    }
    this.router.navigate(['/match'])
  }
getMatchById(){
  let matches = JSON.parse(localStorage.getItem('matches') || '[]');
  for (let i = 0; i < matches.length; i++) {
      if (matches[i].id === Number(this.id)) {
          this.match = matches[i]
      }
  }
  return null;
}
}