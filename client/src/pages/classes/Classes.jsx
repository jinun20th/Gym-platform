import "./classes.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Classes = () => {
    const { user } = useContext(AuthContext);
    const [dataTrainer, setDataTrainer] = useState([]);
    const [data, setData] = useState([]);
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`/classes/user/${user._id}`);
                const resTrainer = await axios.get(`/trainer/profile/${user._id}`);
                //console.log("DataUser: ", res.data)
                setData(res.data);
                if (resTrainer.length !== 0) {
                    //console.log("Res: ", resTrainer.data);
                    //console.log("Run 1: ");
                    try {
                        const ress = await axios.get(`/classes/trainer/${resTrainer.data[0]._id}`)
                        //console.log("DataTrainer: ", ress.data);
                        setDataTrainer(ress.data)
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        }
        getData();
    })

    const handleClick = async (item) => {
        console.log(item);
        try {
            await axios.delete(`/classes/${item}`);
            toast.success("Xóa lớp thành công");
        }
        catch (err) {
            toast.error("Xóa lớp không thành công thử lại sau");
        }
    }
    console.log(data);
    console.log(dataTrainer);
    return (
        <div>
            <Navbar />
            <div className="classes">
                {user ?
                    <div className="container">
                        <div className="title">
                            LỚP HỌC CỦA TÔI
                        </div>
                        <div className="btns">
                            <div className={toggleState === 1 ? "modal-btn active" : "modal-btn"} onClick={() => toggleTab(1)}>Lớp học</div>
                            <div className={toggleState === 2 ? "modal-btn active" : "modal-btn"} onClick={() => toggleTab(2)}>Lớp dạy</div>
                            <div className={toggleState === 3 ? "modal-btn active" : "modal-btn"} onClick={() => toggleTab(3)}>Học cá nhân</div>
                            <div className={toggleState === 4 ? "modal-btn active" : "modal-btn"} onClick={() => toggleTab(4)}>Dạy cá nhân</div>
                        </div>
                        <div className={toggleState === 1 ? "modal-container active" : "modal-container"}>
                            <div className="row">
                                {data.filter(item => !item.class.personal).length > 0 ?
                                    data.filter(item => !item.class.personal).map((item, i) => (
                                        <div className="col-md-12" key={i}>
                                            <div className="class-container row">
                                                <div className="col-md-3">
                                                    <img src={item.trainerInfo.img} alt="Trainer" />
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="name">
                                                        HLV: {item.trainerInfo.name}
                                                    </div>
                                                    <div className="class_name">
                                                        Tên lớp: {item.class.name}
                                                    </div>
                                                    <div className="spec">
                                                        Chuyên môn: {item.class.specialize}
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="date">Lịch hẹn</div>
                                                    <div className="days">{item.class.days.map(day => `${day}`).join(' ')}</div>
                                                    <div className="time">Từ {item.class.startTime} tới {item.class.endTime}</div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="feature">Chức năng</div>
                                                    <Link to='/messenger' className="link">
                                                        <i className="fa-solid fa-message"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : <div className="nothings">Bạn chưa đăng ký học lớp học nào cả !!!</div>}
                            </div>
                        </div>
                        <div className={toggleState === 2 ? "modal-container active" : "modal-container"}>
                            <div className="row">
                                <div className="col-md-12">
                                    <Link to='/create' className="create-link">
                                        <div className="create-icon">
                                            Tạo lớp
                                            <i className="fa-solid fa-plus"></i>
                                        </div>
                                    </Link>
                                </div>
                                {dataTrainer.length > 0 ?
                                    dataTrainer.filter(item => !item.personal).map((item, i) => (
                                        <div className="col-md-12" key={i}>
                                            <div className="class-container row">
                                                <div className="col-md-3">
                                                    <img src={item.user.img} alt="Trainer" />
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="name">
                                                        HLV: {item.user.name}
                                                    </div>
                                                    <div className="class_name">
                                                        Tên lớp: {item.name}
                                                    </div>
                                                    <div className="spec">
                                                        Chuyên môn: {item.specialize}
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="date">Lịch dạy</div>
                                                    <div className="days">{item.days[0]}, {item.days[1]}, {item.days[2]}</div>
                                                    <div className="time">Từ {item.startTime} tới {item.endTime}</div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="feature">Chức năng</div>
                                                    <div className="links">
                                                        <Link to={item._id} className="link">
                                                            <i className="fa-solid fa-pen"></i>
                                                        </Link>
                                                        <div className="link delete" onClick={() => { handleClick(item._id) }}>
                                                            <i className="fa-solid fa-x"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : <div className="nothings">Bạn chưa đăng ký dạy lớp học nào cả !!!</div>}
                            </div>

                        </div>
                        <div className={toggleState === 3 ? "modal-container active" : "modal-container"}>
                            <div className="row">
                                {data.filter(i => i.class.personal).length > 0 ?
                                    data.filter(item => item.class.personal).map((item, i) => (
                                        <div className="col-md-12" key={i}>
                                            <div className="class-container row">
                                                <div className="col-md-3">
                                                    <img src={item.trainerInfo.img} alt="Trainer" />
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="name">
                                                        HLV: {item.trainerInfo.name}
                                                    </div>
                                                    <div className="spec">
                                                        Chuyên môn HLV: {item.trainer.specialize.map(s => `${s}`).join(' ')}
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="date">Lịch hẹn</div>
                                                    <div>{item.class.days.map(day => <div className="days">{day}</div>)}</div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="feature">Chức năng</div>
                                                    <Link to='/messenger' className="link">
                                                        <i className="fa-solid fa-message"></i>                                            </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : <div className="nothings">Bạn chưa đăng ký học cá nhân với ai cả !!!</div>}
                            </div>
                        </div>
                        <div className={toggleState === 4 ? "modal-container active" : "modal-container"}>
                            <div className="row">
                                {dataTrainer.filter(i => i.personal).length > 0 ?
                                    dataTrainer.filter(item => item.personal).map((item, i) => (
                                        <div className="col-md-12" key={i}>
                                            <div className="class-container row">
                                                <div className="col-md-3">
                                                    <img src={item.user.img} alt="Trainer" />
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="name">
                                                        Học viên: {item.user.name}
                                                    </div>
                                                    <div className="spec">
                                                        Chuyên môn HLV: {item.trainer.specialize.map(s => `${s}`).join(' ')}
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="date">Buổi dạy</div>
                                                    <div>{item.days.map(day => <div className="days">{day}</div>)}</div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="feature">Chức năng</div>
                                                    <div className="link delete" onClick={() => { handleClick(item._id) }}>
                                                        <i className="fa-solid fa-x"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : <div className="nothings">Bạn chưa nhận đăng ký dạy cá nhân nào cả !!!</div>}
                            </div>
                        </div>
                    </div>
                    : <div className="nothings">Vui lòng đăng nhập</div>}
            </div>
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Classes;