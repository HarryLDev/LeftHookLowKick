import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  numberOfLives: number = 1;
  playerType: String = "bot";


  setNumberOfLives(value: number) {
    this.numberOfLives = value;
  }

  getNumberOfLives(){
    return this.numberOfLives
  }

  setPlayerType(value: string) {
    this.playerType = value;
  }

  getPlayerType(){
    return this.playerType;
  }

}
