import { useSelector } from "react-redux"
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <section
                className="main-container gradient-color grid grid-cols-2 items-center rounded-3xl"
                style={{ marginTop: `50px` }}>
                <div className="pt-[40px] pl-[50px] pb-[20px]">
                    <Typography.Title level={1}
                        style={{ fontSize: `60px`, lineHeight: 1, fontWeight: 700, color: `white`, marginBottom: `35px` }}>
                        We Got A New Book
                    </Typography.Title>
                    <Typography.Paragraph className="text-lg flex items-center gap-3 text-[#fec300] mb-[15px]">
                        <span>You can find them</span>
                        <FaRegArrowAltCircleDown className="-mb-1" />
                    </Typography.Paragraph>
                    <div className="flex gap-4 items-center">
                        <Link to={`/all-books`}>
                            <Button
                                value="large"
                                type="primary"
                                style={{ backgroundColor: `#fec300`, width: `100px`, height: `40px` }}
                            >All Books</Button>
                        </Link>
                        <Button
                            value="large"
                            type="primary"
                            style={{ backgroundColor: `pink`, width: `120px`, height: `40px`, color: `black` }}
                        >All Categories</Button>
                    </div>
                </div>
                <div className="flex justify-end pr-[100px] pb-[30px]">
                    <img
                        src="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg"
                        alt="new book"
                        className="h-[350px] -mt-[40px] rounded shadow-xl"
                    />
                </div>
            </section>


            <section className="main-container" style={{ marginTop: `130px` }}>
                <h1>All our categories for now</h1>
                <div>
                </div>
                <div></div>
            </section>
        </>
    )
}

export default Home