import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItemsListComponent} from './items-list/items-list.component';

const routes: Routes = [
  {path: '', component: ItemsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveItemsRoutingModule { }
