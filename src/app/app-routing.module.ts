import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './books/add-book/add-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { HomeComponent } from './books/home/home.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./books/books.module').then(b=>b.BooksModule)
  },
  {
    path:'add-book',
    component:AddBookComponent

  },
  {
  path:'home',
  component:HomeComponent
  },
  {
    path:'edit-book/:id',
    component:EditBookComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
