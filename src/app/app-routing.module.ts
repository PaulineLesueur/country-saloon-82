import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BABaComponent } from './b-aba/b-aba.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'b-a-ba', component: BABaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
