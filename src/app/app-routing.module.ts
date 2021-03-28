import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { HomeComponent } from "./modules/home/home/home.component";

const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
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