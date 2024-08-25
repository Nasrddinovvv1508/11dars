import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    books: [
        {
            id: 1,
            title: `Rich Dad Poor Dad`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur unde maiores eaque vel similique autem fugiat soluta suscipit totam nihil iure dolor beatae molestiae voluptates repudiandae, nobis amet qui!`,
            price: 20,
            category: `motivational-Literature`,
            year: 1997,
            image: `https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg`
        },
        {
            id: 2,
            title: `The Godfather`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur unde maiores eaque vel similique autem fugiat soluta suscipit totam nihil iure dolor beatae molestiae voluptates repudiandae, nobis amet qui!`,
            price: 50,
            category: `literary-fiction`,
            year: 1972,
            image: `https://m.media-amazon.com/images/I/61zAyF3qLnL._AC_UF894,1000_QL80_.jpg`
        },
        {
            id: 3,
            title: `The Leader Who Had No Title`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur unde maiores eaque vel similique autem fugiat soluta suscipit totam nihil iure dolor beatae molestiae voluptates repudiandae, nobis amet qui!`,
            price: 30,
            category: `motivational-Literature`,
            year: 2010,
            image: `https://m.media-amazon.com/images/I/715oT+8qVwL._AC_UF1000,1000_QL80_.jpg`
        },
        {
            id: 4,
            title: `The 7 Habits of Highly Effective People`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur unde maiores eaque vel similique autem fugiat soluta suscipit totam nihil iure dolor beatae molestiae voluptates repudiandae, nobis amet qui!`,
            price: 25,
            category: `motivational-Literature`,
            year: 1989,
            image: `https://m.media-amazon.com/images/I/71eCLS1aE6L._AC_UF894,1000_QL80_.jpg`
        },
        {
            id: 5,
            title: `Gulliver's Travels`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur unde maiores eaque vel similique autem fugiat soluta suscipit totam nihil iure dolor beatae molestiae voluptates repudiandae, nobis amet qui!`,
            price: 15,
            category: `literary-fiction`,
            year: 1726,
            image: `https://m.media-amazon.com/images/I/813YyI2mdmL._AC_UF1000,1000_QL80_.jpg`
        },
        {
            id: 6,
            title: `The Little Prince`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur unde maiores eaque vel similique autem fugiat soluta suscipit totam nihil iure dolor beatae molestiae voluptates repudiandae, nobis amet qui!`,
            price: 10,
            category: `literary-fiction`,
            year: 1943,
            image: `https://cdn2.penguin.com.au/covers/original/9780241560303.jpg`,
        },
        {
            id: 7,
            title: `The Dog Named Money`,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur unde maiores eaque vel similique autem fugiat soluta suscipit totam nihil iure dolor beatae molestiae voluptates repudiandae, nobis amet qui!`,
            price: 15,
            category: `motivational-Literature`,
            year: 2000,
            image: `https://cdn.gramedia.com/uploads/picture_meta/2024/3/14/oqwgtqsex8kkba3urhjnr6.jpg`
        },
    ],
}

let bookSlice = createSlice({
    name: `books`,
    initialState,
    reducers: {
        createBook: () => { },
    }
})

export let { createBook } = bookSlice.actions;
export default bookSlice.reducer