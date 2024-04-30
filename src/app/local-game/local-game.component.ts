import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-local-game',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './local-game.component.html',
  styleUrl: './local-game.component.css'
})
export class LocalGameComponent {
  numberOfLives: number = 1;
  lifeArray: number[] = [];
  currentPlayer: any;
  RoundNum: number =1 ;


  public players = {
    player1: {
      lives: this.numberOfLives,
      name: 'Player 1',
      livesArray: [] as number[],
      limbs: {
        head: false,
        body: false,
        legs: false
      },
      selectedPart: null as 'head' | 'body' | 'legs' | null
    },
    player2: {
      lives: this.numberOfLives,
      name: 'Player 2',
      livesArray: [] as number[],
      limbs: {
        head: false,
        body: false,
        legs: false
      },
      selectedPart:null as 'head' | 'body' | 'legs' | null
    }
  };



  constructor(private sharedService: SharedService) {
  }


  ngOnInit(): void {
    this.numberOfLives = this.sharedService.numberOfLives;
    this.populateLifeArray();
      //initialize random player
  this.currentPlayer = Math.random() < 0.5 ? this.players.player1 : this.players.player2;
  }

  private populateLifeArray(): void {
  for (let i = 0; i < this.numberOfLives; i++) {
    this.players.player1.livesArray.push(0);
    this.players.player2.livesArray.push(0);
  }
    this.players.player1.lives = this.numberOfLives;
    this.players.player2.lives = this.numberOfLives;


  }


  //select body part
  selectPart(player: 'Player 1' | 'Player 2', part: 'head' | 'body' | 'legs' | null) {
    if (this.currentPlayer.name === player && part !== null) {
      this.currentPlayer.selectedPart = part;
    }
  }

    //switch turn
    switchTurn() {
      if(this.currentPlayer.selectedPart != null){
      this.currentPlayer = this.currentPlayer === this.players.player1 ? this.players.player2 : this.players.player1;
      if(this.players.player1.selectedPart != null && this.players.player2.selectedPart != null){

        let winner = this.determineWinner(this.players.player1.selectedPart, this.players.player2.selectedPart);

        if (winner === this.players.player1) {
            this.players.player2.lives -= 1; // player2 loses a life if player1 wins
        } else if (winner === this.players.player2) {
            this.players.player1.lives -= 1; // player1 loses a life if player2 wins
        }

        // Increase the round number after processing the turn
        this.RoundNum += 1;

        // Reset selected parts for the next round
        this.players.player1.selectedPart = null;
        this.players.player2.selectedPart = null;
      }
    }
  }

  //End Round and determine round winner
  determineWinner(p1Move:any, p2Move: any) {
    if (p1Move === p2Move) {
        return null; // It's a draw
    } else if ((p1Move === 'Head Shot' && p2Move === 'Body Shot') ||
               (p1Move === 'Body Shot' && p2Move === 'Low Kick') ||
               (p1Move === 'Low Kick' && p2Move === 'Head Shot')) {
        return this.players.player1; // Player 1 wins the round
    } else {
        return this.players.player2; // Player 2 wins the round
    }
}




}
