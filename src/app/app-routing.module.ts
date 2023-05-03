import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './component/author/author.component';
import { CreateEditComponent } from './component/author/create-edit/create-edit.component';

const routes: Routes = [
  {
   path: 'authors', component: AuthorComponent, children: [
    {
      path: 'nuevo', component: CreateEditComponent
    },
    {
      path:'edicion/:id', component: CreateEditComponent
    }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
