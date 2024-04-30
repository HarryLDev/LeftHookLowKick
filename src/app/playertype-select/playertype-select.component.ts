import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';



@Component({
  selector: 'app-playertype-select',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './playertype-select.component.html',
  styleUrl: './playertype-select.component.css'
})
export class PlayertypeSelectComponent {

  constructor(private sharedService: SharedService) {}

  selectLocalMode(): void {
    this.sharedService.setPlayerType("local");
    console.log("Local Mode Selected");

  }

  selectBotMode(): void {
    this.sharedService.setPlayerType("bot");
    console.log("Bot Mode Selected");
  }

}
