import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  title:number=0;

  count(word:any){
    this.title += 1;
    console.log(word);
  }
}
