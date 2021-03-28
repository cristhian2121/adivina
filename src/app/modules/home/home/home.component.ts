import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/core/players_service';
import { IPlayer } from 'src/app/interfaces/Player.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  error = false;



  constructor(
    private router : Router,
    private playerService: PlayerService
  ) { }

 

  ngOnInit(): void {
  }


  startGame(players: IPlayer[]){
    if(players.length){
      this.error = false;
      // redireccion
      this.router.navigate(['/game'])
      this.playerService.crearJugadores(players[0], players[1]);
    }else{
      this.error = true;
      //return
    }
    
    // ....
  }
  
}
