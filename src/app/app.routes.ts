import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { DifficultySelectComponent } from './difficulty-select/difficulty-select.component';
import { PlayertypeSelectComponent } from './playertype-select/playertype-select.component';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

export const routes: Routes = [

  {path: 'help', component: HelpComponent},
  {path: 'difficulty-select', component: DifficultySelectComponent},
  {path: 'playertype-select', component: PlayertypeSelectComponent},
  {path: '', component: MainMenuComponent}

];
