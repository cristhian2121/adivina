import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/core/players.service';
import { IPlayer } from 'src/app/interfaces/IPlayer.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  error = false;

  constructor(
    private router: Router,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
  }

  /**
  * Inicia el juego pero ante valida que se hayan ingresado 
  * jugadores
  */
  startGame(players: IPlayer[]) {
    if (players.length) {
      this.error = false;
      this.router.navigate(['/game']) // por parametros se puedo enviar
      this.playerService.crearJugadores(players[0], players[1])
    } else {
      this.error = true;
    }
 // RETURNA undefined
  }



}
