import { Component, OnInit } from '@angular/core';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

 skills: Skill[]

  constructor(skills: Skill[]){this.skills= skills }

  ngOnInit(): void {
      this.skills  = [
      new Skill('Angular', "https://fakeimg.pl/350x200/?text=Angular",'https://angular.io'),
      new Skill('JavaScript',"https://fakeimg.pl/350x200/?text=Javascript",'https://www.javascript.com/')
    ]

  }

}
