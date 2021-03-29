import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { IPlayer } from 'src/app/interfaces/IPlayer.interface';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  @Output() isError = new EventEmitter<IPlayer[]>();
  @Input() player1: string = '';
  @Input() player2 = '';

  playerInput1 = '';
  playerInput2 = '';

  constructor() { }

  ngOnInit(): void {
  }

  validateForm() {
    const player1: IPlayer = {
      name: this.playerInput1
    }
    const player2: IPlayer = {
      name: this.playerInput2
    }
    if (!this.playerInput1 || !this.playerInput2) {
      this.isError.emit([])
    } else {
      this.isError.emit([player1, player2])
    }
  }

}
