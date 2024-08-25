import React from 'react'
import { useSelector } from 'react-redux';

function AllBooks() {
    let { books } = useSelector((state) => state.books)
    console.log(books);

    return (
        <>
            <section className="my-[50px]">
                <div className="main-container">
                    <div className="grid grid-cols-4 gap-[35px]">
                        {books.map((book) => {
                            return (
                                <div
                                    key={book.id}
                                    className="h-[384px] w-[255px] object-cover cursor-pointer shadow-box"
                                >
                                    <img className="w-full h-full" src={book.image} alt={book.title} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllBooks