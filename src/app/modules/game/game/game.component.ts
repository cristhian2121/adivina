import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/core/players.service';
import { IPlayer } from 'src/app/interfaces/IPlayer.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  player1?: IPlayer;
  player2?: IPlayer;

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.playerService.players$.subscribe(players => {
      this.player1 = players[0];
      this.player2 = players[1];
    })
  }

}
