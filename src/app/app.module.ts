import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesCardComponent } from './activitiesCard/activitiesCard.component';
import { ImageSliderComponent } from './imageSlider/imageSlider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IncomingFeatureComponent } from './incoming-feature/incoming-feature.component';
import { ContactComponent } from './contact/contact.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { CoursComponent } from './cours/cours.component';
import { ClubComponent } from './club/club.component';
import { BABaComponent } from './b-aba/b-aba.component';
import { AgendaComponent } from './agenda/agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    ActivitiesCardComponent,
    ImageSliderComponent,
    PageNotFoundComponent,
    IncomingFeatureComponent,
    ContactComponent,
    MentionsLegalesComponent,
    CoursComponent,
    ClubComponent,
    BABaComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
