import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameComponent } from "./modules/game/game/game.component";

// Components
import { HomeComponent } from "./modules/home/home/home.component";

const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'game',
        component: GameComponent
    }
]


@NgModule({
    declarations:[], // componentes, pipes, directivas
    imports: [
        RouterModule.forRoot(routes)
    ], // otros modulos a importar
    exports:[
        RouterModule
    ] // que se va a usar cuadno importen a este modulo
})

export class AppRoutingModule {}