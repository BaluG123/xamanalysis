import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtandCultureComponent } from './artand-culture/artand-culture.component';
import { EconomyComponent } from './economy/economy.component';
import { EnvironmentComponent } from './environment/environment.component';
import { GeographyComponent } from './geography/geography.component';
import { HistoryComponent } from './history/history.component';
import { PolityComponent } from './polity/polity.component';
import { ScienceandTechnologyComponent } from './scienceand-technology/scienceand-technology.component';

const routes: Routes = [
  { path: 'history', component: HistoryComponent },
  { path: 'geography', component: GeographyComponent },
  { path: 'environmentandecology', component: EnvironmentComponent },
  { path: 'artandculture', component: ArtandCultureComponent },
  { path: 'polity', component: PolityComponent },
  { path: 'scienceandtechnology', component: ScienceandTechnologyComponent },
  { path: 'economy', component: EconomyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrelimsRoutingModule {}
