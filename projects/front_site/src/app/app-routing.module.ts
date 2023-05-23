import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AppComponent } from './app.component'


const routes : Routes = [
  {path : "catalogue", component: CatalogueComponent },
  {path : "accueil", component: AppComponent },
  {path : "", redirectTo: "accueil", pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule , RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
