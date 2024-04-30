import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-lives-select',
  standalone: true,
  imports: [MatSliderModule, RouterLink, FormsModule],
  templateUrl: './lives-select.component.html',
  styleUrl: './lives-select.component.css'
})
export class LivesSelectComponent {
constructor(private sharedService: SharedService) {}
numberOfLives: number = 1;

onSliderChange(event: any) {
  const target = event.target as HTMLInputElement;
  const sliderValue = parseInt(target.value);
  console.log('Slider value:', sliderValue);
  this.sharedService.setNumberOfLives(sliderValue);
}

}
