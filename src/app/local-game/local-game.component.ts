import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';
import { NgFor } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { HelpPopupComponent } from '../help-popup/help-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { WinnerPopupComponent } from '../winner-popup/winner-popup.component';


@Component({
  selector: 'app-local-game',
  standalone: true,
  imports: [RouterLink, NgFor, MatDialogModule, HelpPopupComponent],
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



  constructor(
    private dialog: MatDialog,
    private sharedService: SharedService) {
  }


  ngOnInit(): void {
    this.numberOfLives = this.sharedService.numberOfLives;
    this.populateLifeArray();
      //initialize random player at start
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

  private updateLifeArrayP1(): void {
    this.players.player1.livesArray.length = 0;

    for (let i = 0; i < this.players.player1.lives; i++) {
      this.players.player1.livesArray[i] = 0;
    }
  }
  private updateLifeArrayP2(): void {
    this.players.player2.livesArray.length = 0;

    for (let i = 0; i < this.players.player2.lives; i++) {
      this.players.player2.livesArray[i] = 0;
    }
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
            this.updateLifeArrayP2();
            if(this.players.player2.lives == 0){
              this.openWinnerPopup('PLAYER 1 BEAT PLAYER 2 UP!');
            }


        } else if (winner === this.players.player2) {
            this.players.player1.lives -= 1; // player1 loses a life if player2 wins
            this.updateLifeArrayP1();
            if(this.players.player1.lives == 0){
              this.openWinnerPopup('PLAYER 2 BEAT PLAYER 1 UP!');
            }


        }
        console.log("player 1 lives:" , this.players.player1.lives);
        console.log("player 2 lives:" , this.players.player2.lives);


        // Increase the round number after processing the turn
        this.RoundNum += 1;


        // Reset selected parts for the next round
        this.players.player1.selectedPart = null;
        this.players.player2.selectedPart = null;
      }
    }
  }

  //End Round and determine round winner
  determineWinner(p1Move: any, p2Move: any) {
    if (p1Move === p2Move) {
        return null; // It's a draw
    } else if ((p1Move === 'head' && p2Move === 'body') ||
               (p1Move === 'body' && p2Move === 'legs') ||
               (p1Move === 'legs' && p2Move === 'head')) {
        return this.players.player1; // Player 1 wins the round
    } else {
        return this.players.player2; // Player 2 wins the round
    }
}

openHelpPopup(width: string = '400px'): void {
  const dialogRef = this.dialog.open(HelpPopupComponent, {
    width: width
  });
}

openWinnerPopup(player: string): void {
  const dialogRef = this.dialog.open(WinnerPopupComponent, {
  });
  dialogRef.componentInstance.winner = player;

  dialogRef.componentInstance.playAgain.subscribe(() => {
    this.resetGame();
  });
}

resetGame(): void {
  // Reset lives
  this.players.player1.lives = this.numberOfLives;
  this.players.player2.lives = this.numberOfLives;

  // Reset life arrays
  this.players.player1.livesArray = Array(this.players.player1.lives).fill(0);
  this.players.player2.livesArray = Array(this.players.player2.lives).fill(0);

  // Reset round number
  this.RoundNum = 1;

  // Reset selected parts
  this.players.player1.selectedPart = null;
  this.players.player2.selectedPart = null;

  // Reset current player
  this.currentPlayer = Math.random() < 0.5 ? this.players.player1 : this.players.player2;

  console.log("game reset");

}


}
