import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
// import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { IntroComponent} from './intro/intro.component';
import { GameComponent} from './Game/Game.component';


const routes: Routes = [
  { path: '', component: IntroComponent},
  { path: 'home', component: AppComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'intro', component: IntroComponent},
  { path: 'game', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [HeroComponent, AboutComponent, ResumeComponent];
