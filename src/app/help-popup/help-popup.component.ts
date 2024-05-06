import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-help-popup',
  standalone: true,
  imports: [MatDialogModule, ],
  templateUrl: './help-popup.component.html',
  styleUrl: './help-popup.component.css'
})
export class HelpPopupComponent {

  constructor(public dialogRef: MatDialogRef<HelpPopupComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

}
