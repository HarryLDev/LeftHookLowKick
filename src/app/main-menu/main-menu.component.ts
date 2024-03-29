import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { fadeInAnimation } from '../external-files/animations';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
