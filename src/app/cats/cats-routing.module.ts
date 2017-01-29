import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './cats.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';

const routes: Routes = [{
    path: '',
    component: CatsComponent
}, {
    path: 'cat-detail/:id',
    component: CatDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CatsRoutingModule { }
