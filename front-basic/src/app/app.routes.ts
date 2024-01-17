import {Routes} from '@angular/router';
import {MainComponent} from "./modules/main/main.component";
import {MovieListComponent} from "./modules/main/movie-list/movie-list.component";
import {MovieComponent} from "./modules/main/movie/movie.component";
import {StartPageComponent} from "./modules/main/start-page/start-page.component";
import {LoginComponent} from "./modules/main/login/login.component";
import {RegisterComponent} from "./modules/main/register/register.component";

export const routes: Routes = [
    {
        path: "", component: MainComponent, children: [
            {path: "", redirectTo: "/home", pathMatch: "full"},
            {path: "home", component: StartPageComponent},
            {path: "movies", component: MovieListComponent},
            {path: "movie/:id", component: MovieComponent},
            {path: "login", component: LoginComponent},
            {path: "register", component: RegisterComponent},
        ]
    },
    {path: "**", redirectTo: ""}
];
