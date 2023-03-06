import "./trainer.css";
import Navbar from "../../components/navbar/Navbar";
import Modal from "../../components/modal/Modal";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Trainer = () => {
    const params = useParams();
    const { data } = useFetch(`/trainer/${params.id}`);
    const [open, setOpen] = useState(false);
    const [join, setJoin] = useState('');
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const handleDate = () => {
        if (data[0].createdAt) {
            let result = Date.parse(data[0].createdAt.slice(0, 10) + ' ' + data[0].createdAt.slice(11, 19));
            let time = (Math.round(Math.floor((((Date.now() - result.toString()) / 1000)) / 3600) / 24));
            if (time > 0 && time < 30) {
                const timeString = time.toString() + ' ngày trước';
                setJoin(timeString);
            }
            else if (time >= 30 && time <= 365) {
                const timeString = Math.floor(time / 30) + ' tháng trước';
                setJoin(timeString);

            }
            else if (time > 365) {
                const timeString = Math.floor(time / 365).toString() + ' năm trước';
                setJoin(timeString);
            }
        }
    }

    if (join === '' && data.length > 0) {
        handleDate();
    }

    if (data.length > 0) {
        return (
            <div>
                <Navbar />
                <div className="trainer">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="trainer-info">
                                    <img src={data[0].user[0].img} alt="trainer" />
                                    <div className="trainer-name">
                                        {data[0].user[0].name}
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="d-flex justify-content-between">
                                    <ul className="info">
                                        <li>Đánh giá: {data[0].rate} (124 đánh giá)</li>
                                        <li>Ngôn ngữ: {data.language}</li>
                                        <li>Đã tham gia: {join} </li>
                                    </ul>
                                    <ul className="info">
                                        <li>Học viên: 42 người</li>
                                        <li>Chuyên môn: Cardio</li>
                                        <li>
                                            <button onClick={() => { setOpen(true) }}>Đặt lịch</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="trainer-desc">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quae inventore molestiae accusamus facere ducimus, magni quidem cumque debitis sed beatae totam, culpa dolore voluptatum incidunt hic quia, mollitia fugit accusamus facere ducimus, magni quidem cumque debist Justo laoreet sit amet cursus sit amet dictum sit amet. Volutpat sed cras ornare arcu dui vivamus. Eget est sit. Congue quisque egestas diam in arcu cursus euismod quis. Hac habitasse platea dictumst vestibulum.
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="trainer-price">
                                            Bảng giá
                                            <div className="trainer-price__info">
                                                Cá nhân <span>100 R-coins / buổi</span>
                                            </div>
                                            <div className="trainer-price__info">
                                                Theo lớp <span>50 R-coins / buổi - 10 người</span>
                                            </div>
                                            <div className="trainer-price__remind">
                                                Khi mua đặt lịch trên 10 buổi giảm giá 20%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modals">
                    <div className="container">
                        <div className="modal-btns">
                            <div className={toggleState === 1 ? "modal-btn active" : "modal-btn"} onClick={() => toggleTab(1)}>Đánh giá</div>
                            <div className={toggleState === 2 ? "modal-btn active" : "modal-btn"} onClick={() => toggleTab(2)}>Ảnh</div>\
                            <div className={toggleState === 3 ? "modal-btn active" : "modal-btn"} onClick={() => toggleTab(3)}>Video</div>
                        </div>
                        <div className="modal-wrapper">
                            <div className={toggleState === 1 ? "modal-container active" : "modal-container"}>
                                <div className="rate-container">
                                    <div className="rate-number">
                                        <span>
                                            4.4
                                        </span>
                                        <span>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star-half"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="comment-container">
                                    <div className="comment-avatar">
                                        T
                                    </div>
                                    <div className="comment-content">
                                        <div className="name">
                                            Võ Văn Tiến
                                        </div>
                                        <div className="info">
                                            <span className="rate">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star-half"></i>
                                            </span>
                                            <div className="time">
                                                3 tháng trước
                                            </div>
                                        </div>
                                        <p className="para">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <img src="/img/new1.jpg" alt="new" />
                                    </div>
                                </div>
                            </div>
                            <div className={toggleState === 2 ? "modal-container active" : "modal-container"}>
                                <div className="video-container">
                                    <iframe width="350" height="200" src="https://www.youtube.com/embed/hj83cwfOF3Y" title="Peaceful Piano & Soft Rain - Relaxing Sleep Music, A Bitter Rain" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <iframe width="350" height="200" src="https://www.youtube.com/embed/1D_87pbuv-Q" title="Autumn Days 🍂 Chill Lofi Beats" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <iframe width="350" height="200" src="https://www.youtube.com/embed/AhxbeH9cFRM" title="Floating Garden 🍃 Chill Lofi Beats" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <iframe width="350" height="200" src="https://www.youtube.com/embed/sB5BJnsnoiA" title="Lost Sky 🍃 Chill Lofi Beats" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <button className="more-btn">
                                    Xem thêm
                                </button>
                            </div>
                            <div className={toggleState === 3 ? "modal-container active" : "modal-container"}>
                                <div className="video-container">
                                    <iframe width="350" height="200" src="https://www.youtube.com/embed/hj83cwfOF3Y" title="Peaceful Piano & Soft Rain - Relaxing Sleep Music, A Bitter Rain" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <iframe width="350" height="200" src="https://www.youtube.com/embed/1D_87pbuv-Q" title="Autumn Days 🍂 Chill Lofi Beats" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <iframe width="350" height="200" src="https://www.youtube.com/embed/AhxbeH9cFRM" title="Floating Garden 🍃 Chill Lofi Beats" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    <iframe width="350" height="200" src="https://www.youtube.com/embed/sB5BJnsnoiA" title="Lost Sky 🍃 Chill Lofi Beats" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <button className="more-btn">
                                    Xem thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {open && <Modal setShow={setOpen} trainerId={params.id} />}
                <Footer />
            </div>
        );
    }
};

export default Trainer;
