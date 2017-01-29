import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsRoutingModule } from './cats-routing.module';
import { CatsComponent } from './cats.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CatsRoutingModule
  ],
  declarations: [CatsComponent, CatDetailComponent]
})
export class CatsModule { }
