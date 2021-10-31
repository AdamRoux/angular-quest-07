import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer: Developer | undefined


  constructor() { }



  ngOnInit(): void {
    this.developer = new Developer('Roux', 'Adam', 25, 'Male', 'Welcome to Metaverse', [
      new Skill('Angular', "https://fakeimg.pl/200x100/?text=Angular", 'https://angular.io'), new Skill('JavaScript', "https://fakeimg.pl/200x100/?text=Javascript", 'https://javascript.com')]
    )
  }

}
