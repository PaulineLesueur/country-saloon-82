import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BABaComponent } from './b-aba/b-aba.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IncomingFeatureComponent } from './incoming-feature/incoming-feature.component';
import { ContactComponent } from './contact/contact.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { CoursComponent } from './cours/cours.component';
import { ClubComponent } from './club/club.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'b-a-ba', component: BABaComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'club', component: ClubComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'coming-soon', component: IncomingFeatureComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
