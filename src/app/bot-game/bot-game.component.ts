import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgFor, RouterLink,],
  templateUrl: './bot-game.component.html',
  styleUrl: './bot-game.component.css'
})
export class BotGameComponent {
  numberOfLives: number = 1;
  lifeArray: number[] = [];

  public players = {
    player1: {
      lives: this.numberOfLives,
      livesArray: [] as number[],
      limbs: {
        head: false,
        body: false,
        legs: false
      },
    },
    player2: {
      lives: this.numberOfLives,
      livesArray: [] as number[],
      limbs: {
        head: false,
        body: false,
        legs: false
      }
    }
  };



  constructor(private sharedService: SharedService) {
  }


  ngOnInit(): void {
    this.numberOfLives = this.sharedService.numberOfLives;
    this.populateLifeArray();
  }

  private populateLifeArray(): void {
  for (let i = 0; i < this.numberOfLives; i++) {
    this.players.player1.livesArray.push(0);
    this.players.player2.livesArray.push(0);
  }
    this.players.player1.lives = this.numberOfLives;
    this.players.player2.lives = this.numberOfLives;


  }

  //initialize random player
  currentPlayer: string = Math.random() < 0.5 ? 'Player 1' : 'Player 2';

  //switch turn
  switchTurn() {
    this.currentPlayer = this.currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
  }



}
