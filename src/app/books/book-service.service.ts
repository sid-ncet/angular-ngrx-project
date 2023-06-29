import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './store/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<Book[]>('http://localhost:3000/books')
  }
  create(payload:Book){
    console.log(payload)
    return this.http.post<Book>('http://localhost:3000/books',payload)
  }
  delete(id:number){
    return this.http.delete(`http://localhost:3000/books/${id}`)
  }
  edit(update:Book){
    console.log(update.id)
    console.log(update)
    return this.http.put<Book>(`http://localhost:3000/books/${update.id}`,update)
  }
}
