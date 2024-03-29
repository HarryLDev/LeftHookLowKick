import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lives-select',
  standalone: true,
  imports: [MatSliderModule, RouterLink],
  templateUrl: './lives-select.component.html',
  styleUrl: './lives-select.component.css'
})
export class LivesSelectComponent {

}
