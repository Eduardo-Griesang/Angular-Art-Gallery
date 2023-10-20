import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { PaintingsComponent } from './pages/paintings/paintings.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'content/:id',
    component: ContentComponent
  },
  {
    path:'paintings',
    component: PaintingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
