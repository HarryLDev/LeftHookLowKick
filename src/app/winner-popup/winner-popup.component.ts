import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { LocalGameComponent } from '../local-game/local-game.component';
@Component({
  selector: 'app-winner-popup',
  standalone: true,
  imports: [MatDialogModule, RouterLink, LocalGameComponent],
  templateUrl: './winner-popup.component.html',
  styleUrl: './winner-popup.component.css'
})
export class WinnerPopupComponent {
  @Input()
  @Output() playAgain = new EventEmitter<void>();
  winner!: string;
  constructor(public dialogRef: MatDialogRef<WinnerPopupComponent>,
   ){}


  close(): void {
    this.dialogRef.close();
  }

  onPlayAgain(): void {
    this.playAgain.emit();
    this.dialogRef.close();
  }


}
