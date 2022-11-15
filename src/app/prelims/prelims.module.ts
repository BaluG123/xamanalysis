import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrelimsRoutingModule } from './prelims-routing.module';
import { PolityComponent } from './polity/polity.component';
import { GeographyComponent } from './geography/geography.component';
import { HistoryComponent } from './history/history.component';
import { EnvironmentComponent } from './environment/environment.component';
import { ArtandCultureComponent } from './artand-culture/artand-culture.component';
import { EconomyComponent } from './economy/economy.component';
import { ScienceandTechnologyComponent } from './scienceand-technology/scienceand-technology.component';

@NgModule({
  declarations: [
    PolityComponent,
    GeographyComponent,
    HistoryComponent,
    EnvironmentComponent,
    ArtandCultureComponent,
    EconomyComponent,
    ScienceandTechnologyComponent,
  ],
  imports: [CommonModule, PrelimsRoutingModule],
  exports: [
    HistoryComponent,
    EconomyComponent,
    EnvironmentComponent,
    GeographyComponent,
    HistoryComponent,
    PolityComponent,
    ScienceandTechnologyComponent,
    ArtandCultureComponent,
  ],
})
export class PrelimsModule {}
