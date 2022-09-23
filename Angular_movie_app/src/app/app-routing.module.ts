import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './home-page/home-page.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayComponent } from './play/play.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'details/:id/play',
    component: PlayComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
