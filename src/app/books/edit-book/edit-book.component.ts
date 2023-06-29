import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select,Store } from '@ngrx/store';
import { switchMap } from 'rxjs';
import { Book } from '../store/book';
import { updateBookApi } from '../store/books.action';
import { selectBookById } from '../store/books.selectors';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  constructor(private route: ActivatedRoute,private store:Store,private router:Router){}
  bookForm: Book = {
    id:0,
    author: '',
    title:'',
    cost: 0,
  };

  ngOnInit(): void {
    let fetchData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        var id = Number(params.get('id'));
        console.log(id)
        return this.store.pipe(select(selectBookById(id)));
      })
    );
    fetchData$.subscribe((data) => {
      console.log(data)
      if (data) {
        this.bookForm = { ...data };
        
      }
      else{
        // this.router.navigate(['/']);
      }
    });
  }
  update(){
    this.store.dispatch(
      updateBookApi({ update: { ...this.bookForm } })
    );
    this.bookForm={
      id:0,
      author: '',
      title:'',
      cost: 0,
    }
    this.router.navigate(['/']);

  }

}
