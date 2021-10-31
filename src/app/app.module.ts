import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SkillComponent } from './skill/skill.component';
import { DeveloperComponent } from './developer/developer.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
