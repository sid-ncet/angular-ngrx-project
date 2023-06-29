import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addBookApi } from '../store/books.action';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  constructor(private store:Store, private router:Router){}
  submitForm(data:any){
  
    console.log({payload:{...data}})
    this.store.dispatch(addBookApi({payload:{...data}}));
    this.router.navigate(['/home'])
  }

}
