import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubMenuPage } from './sub-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SubMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubMenuPageRoutingModule {}
