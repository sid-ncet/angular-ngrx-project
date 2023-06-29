import { compileDeclareInjectableFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { deleteBookApi,invokeBookApi, updateBookApi } from '../store/books.action';
import { selectBookById, selectBooks } from '../store/books.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //please run db.json file in package.json to run command-(npm run jb.json)
  constructor(private store:Store, private route:Router){}
  books=this.store.pipe(select(selectBooks))
  ngOnInit(){
    this.store.dispatch(invokeBookApi())
  }
  deleteBook(data:any){
    console.log(data)
    console.log(data.id)
    this.store.dispatch(deleteBookApi({id:data.id}))
  }
 

}
