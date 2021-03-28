import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameFormComponent } from "./modules/game/game-form/game-form.component";

// Components
import { HomeComponent } from "./modules/home/home/home.component";

const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
    },
    {
        path:'game',
        component: GameFormComponent
    },
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