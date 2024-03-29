import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-playertype-select',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './playertype-select.component.html',
  styleUrl: './playertype-select.component.css'
})
export class PlayertypeSelectComponent {
  isLocalSelected: boolean = false;
  isBotSelected: boolean = false;

  selectLocalMode(): void {
    this.isLocalSelected = true;
    this.isBotSelected = false;
  }

  selectBotMode(): void {
    this.isLocalSelected = false;
    this.isBotSelected = true;
  }

}
