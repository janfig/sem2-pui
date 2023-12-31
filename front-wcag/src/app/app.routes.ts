import {Routes} from '@angular/router';
import {MainComponent} from "./modules/main/main.component";
import {MovieListComponent} from "./modules/main/movie-list/movie-list.component";
import {MovieComponent} from "./modules/main/movie/movie.component";
import {StartPageComponent} from "./modules/main/start-page/start-page.component";

export const routes: Routes = [
    {
        path: "", component: MainComponent, children: [
            {path: "", redirectTo: "/home", pathMatch: "full"},
            {path: "home", component: StartPageComponent},
            {path: "movies", component: MovieListComponent},
            {path: "movie/:id", component: MovieComponent},
        ]
    },
    {path: "**", redirectTo: ""}
];
