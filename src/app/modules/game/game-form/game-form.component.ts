import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/core/players_service';
import { IPlayer } from 'src/app/interfaces/Player.interface';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit, OnDestroy {


  player1?:IPlayer;
  player2?: IPlayer;

  constructor(
    private palyerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  
    this.palyerService.players$.subscribe(players =>{
      this.player1 = players[0];
      this.player2 = players[1];
      console.log(players)
      if(!players.length){
        this.palyerService.clearPlayer();
        this.router.navigate(['']);
      }
    })
  }

  ngOnDestroy(){
    // this.palyerService.players$
  }


}
