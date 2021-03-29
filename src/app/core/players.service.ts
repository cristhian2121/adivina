import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IPlayer } from "../interfaces/IPlayer.interface";


@Injectable({
    providedIn: 'root',
})
export class PlayerService {

    // suscriotor -> quien escucha
    // ??
    
    // subject -> Canal
    private playersSubject = new BehaviorSubject<IPlayer[]>([]);
    // Observable -> Genera
    players$ = this.playersSubject.asObservable();

    constructor(){}

    crearJugadores(player1: IPlayer, player2: IPlayer){
        this.playersSubject.next([player1, player2]) // lo que quiero transmitir por el canal
    }

    clearPlayer(){
        this.playersSubject.next([])
    }



}