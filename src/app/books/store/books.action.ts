import { createAction, props } from "@ngrx/store";
import { Book } from "./book";

export const invokeBookApi=createAction(
    "[BookApi] invoke book fetch api"
)
export const bookFetchApiSuccess=createAction(
    "[BookApi] book fetch api success",
    props<{allBooks:Book[]}>()
)
export const addBookApi=createAction(
    "[BookApi] add book api",props<{payload:Book}>()
)

export const saveBookApiSuccess=createAction(
    "[BookApi] save book api success",props<{response:Book}>()

)
export const deleteBookApi=createAction(
    "[BookApi] delete book api",props<{id:number}>()
)
export const deleteBookApiSuccess=createAction(
    "[BookApi] delete book api success",props<{id:number}>()
)
export const updateBookApi=createAction(
    "[BookApi] update book api",props<{update:Book}>()
)
export const updateBookApiSuccess=createAction(
    "[BookApi] update book api success",props<{update:Book}>()
)