import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Book } from "./book";
import { bookFetchApiSuccess, deleteBookApiSuccess, saveBookApiSuccess, updateBookApiSuccess } from "./books.action";


export const initialState:ReadonlyArray<Book>=[]
export const bookReducer=createReducer(
    initialState,
    on(bookFetchApiSuccess,(state,{allBooks})=>{
        return allBooks
    }),
    on(saveBookApiSuccess,(state,{response})=>{
        let newState=[...state]
        newState.unshift(response);
        return newState;
    }),
    on(deleteBookApiSuccess,(state,{id})=>{
       console.log(state)
        let newState =state.filter((i)=> (i).id != id);
        console.log(newState)
        return newState;
    }),
    on(updateBookApiSuccess, (state, { update }) => {
        let newState = state.filter((i) => i.id != update.id);
        newState.unshift(update);
        return newState;
      })
)
