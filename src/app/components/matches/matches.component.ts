import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit{
  ngOnInit(): void {
    this.getAllMatches()
  }
  constructor(private router:Router){}

  matches:any=[]
  getAllMatches(){
    this.matches=JSON.parse(localStorage.getItem("matches") || "[]")
  }
  deletMatch(id:any){
    for (let i=0;i<this.matches.length;i++){
      if(parseInt(this.matches[i].id)==parseInt(id)){
        this.matches.splice(i,1);
        localStorage.setItem('matches', JSON.stringify(this.matches));
        break;
        }
    }
  }
  navigateTo(path:string,id:any){
    this.router.navigate([path, id]);
  }
}
