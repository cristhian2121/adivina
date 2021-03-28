import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IPlayer } from "../interfaces/Player.interface";


@Injectable({
    providedIn: 'root'
})

export class PlayerService {
    
    // subjet  canal
    private playersSubject = new BehaviorSubject<IPlayer[]>([])
    

    // observable   genera 

    players$ = this.playersSubject.asObservable();

    constructor(

    ){ }
    
    crearJugadores(player1: IPlayer, player2: IPlayer){
        this.playersSubject.next([player1, player2]);
    
    }

    clearPlayer(){
        this.playersSubject.next([]);
    }


    // suscriptor  quien escucha
    

}