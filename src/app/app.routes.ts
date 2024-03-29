import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { PlayertypeSelectComponent } from './playertype-select/playertype-select.component';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LivesSelectComponent } from './lives-select/lives-select.component';

export const routes: Routes = [

  {path: 'help', component: HelpComponent},
  {path: 'player-type', component: PlayertypeSelectComponent},
  {path: '', component: MainMenuComponent},
  {path: 'lives', component: LivesSelectComponent},

];
