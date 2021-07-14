import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PagesComponent } from './pages.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';

const routes: Routes = [
  {path:'', component: PagesComponent, children:[
    { path: '', component: MainComponent},
    { path: 'part1', component: Part1Component},
    { path: 'part2', component: Part2Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
