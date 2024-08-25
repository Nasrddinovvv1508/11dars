import { Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function SingleCategory() {
    let { category } = useParams();
    let { books } = useSelector((state) => state.books)
    let [motivationCategory, setMotivationCategory] = useState([]);
    let [fictionCategory, setFictionCategory] = useState([]);

    useEffect(() => {
        if (category == `motivational-Literature`) {
            let arr = books.filter((book) => {
                return book.category == `motivational-Literature`
            })
            setMotivationCategory(arr);
        } else if (category == `literary-fiction`) {
            let arr = books.filter((book) => {
                return book.category == `literary-fiction`
            })
            setFictionCategory(arr);
        }
    }, [books])

    if (category == `motivational-Literature` && motivationCategory.length == 0) {
        return <div className='w-full flex justify-center py-[30px]'>
            <iframe src="https://lottie.host/embed/4a1524a6-e2ad-4e35-8224-27045f3a7d31/ievPGQ9dww.json"></iframe>
        </div>
    } else if (category == `literary-fiction` && fictionCategory.length == 0) {
        return <div className='w-full flex justify-center py-[30px]'>
            <iframe src="https://lottie.host/embed/4a1524a6-e2ad-4e35-8224-27045f3a7d31/ievPGQ9dww.json"></iframe>
        </div>
    }

    return (
        <>
            <section className='my-[50px]'>
                <div className='main-container'>
                    {category == `motivational-Literature` ?
                        <div>
                            <Typography.Title level={1}>
                                The're <span className='text-[#c31800]'>{motivationCategory.length}</span> books in this <span className='text-[#fec300]'>category</span>
                            </Typography.Title>
                            <div className='grid grid-cols-4 gap-[35px]' style={{ marginTop: `30px` }}>
                                {motivationCategory.map((book) => {
                                    return <div
                                        key={book.id}
                                        className="h-[384px] w-[255px] object-cover cursor-pointer shadow-box"
                                    >
                                        <img className="w-full h-full" src={book.image} alt={book.title} />
                                    </div>
                                })}
                            </div>
                        </div>
                        :
                        <div>
                            <Typography.Title level={1}>
                                The're <span className='text-[#c31800]'>{fictionCategory.length}</span> books in this <span className='text-[#fec300]'>category</span>
                            </Typography.Title>
                            <div className='grid grid-cols-4 gap-[35px]'>
                                {fictionCategory.map((book) => {
                                    return <div
                                        key={book.id}
                                        className="h-[384px] w-[255px] object-cover cursor-pointer shadow-box"
                                    >
                                        <img className="w-full h-full" src={book.image} alt={book.title} />
                                    </div>
                                })}
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default SingleCategory