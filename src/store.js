import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./app/bookSlice";

let store = configureStore({
    reducer: {
        books: bookReducer,
    }
})

export default store