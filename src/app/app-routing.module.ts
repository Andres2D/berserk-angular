
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakePageComponent } from './pages/fake-page/fake-page.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'fake-page',
    component: FakePageComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
