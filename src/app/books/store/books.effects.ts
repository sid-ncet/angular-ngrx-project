import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { switchMap,map } from "rxjs";
import { BookServiceService } from "../book-service.service";
import { addBookApi, bookFetchApiSuccess, deleteBookApi, deleteBookApiSuccess, invokeBookApi, saveBookApiSuccess, updateBookApi, updateBookApiSuccess } from "./books.action";


@Injectable()
export class BooksEffect{
    constructor(private actions:Actions,private bookService:BookServiceService,private store:Store){}
    loadAllBooks=createEffect(()=>
    this.actions.pipe(
        ofType(invokeBookApi),
        switchMap(()=>{
            return this.bookService.get()
            .pipe(
                map((data)=>bookFetchApiSuccess({allBooks:data}))
               
            )
           
        })
   
    )
    )
    saveNewBook=createEffect(()=>
    this.actions.pipe(
        ofType(addBookApi),
        switchMap((action)=>{
            console.log(action)
            console.log(action.payload)
            return this.bookService.create(action.payload)
            
            .pipe(
                map((data)=>saveBookApiSuccess({response:data}))
            
            )
        })
    )
    )
    deleteNewBook=createEffect(()=>
    this.actions.pipe(
        ofType(deleteBookApi),
        switchMap((action)=>{
           
            console.log(action.id)
           
            return this.bookService.delete(action.id)
            .pipe(
                map(()=>{
                   
                    return deleteBookApiSuccess({id:action.id})
                })
            )
        })
    )
    )
    updateNewBook=createEffect(()=>
    this.actions.pipe(
        ofType(updateBookApi),
        switchMap((action)=>{
            return this.bookService.edit(action.update)
            .pipe(
                map((data)=>updateBookApiSuccess({update:data}))
            )
        })
    )
    )
   
     
}