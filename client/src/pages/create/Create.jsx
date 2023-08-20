import "./create.css"
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
    const { user } = useContext(AuthContext);
    const { data } = useFetch(`/trainer/profile/${user._id}`)

    const [info, setInfo] = useState({
        trainerId: undefined,
        name: undefined,
        startTime: undefined,
        endTime: undefined,
        days: undefined,
        price: undefined,
        specialize: undefined,
    })
    const [days] = useState(["T2", "T3", "T4", "T5", "T6", "T7", "CN"]);
    const [specs] = useState(["Fitness", "Yoga", "Cardio", "Aerobic", "Workout"]);
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const setSpec = (e) => {
        info.specialize = e;
    }

    const setDay = (e) => {
        info.days = e;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        info.trainerId = data[0]._id;
        console.log(info);
        try {
            const res = await axios.post(`/classes/`, info);
            console.log(res.data);
            toast.success("Tạo lớp thành công");
        } catch (err) {
            toast.error("Có lỗi xảy ra vui lòng thử lại");
        }
    }

    return (
        <div>
            <Navbar />
            <div className="create">
                <div className="container">
                    <div className="title">
                        Tạo lớp dạy học của bạn
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={user.img} className="class-img" alt="user" />
                        </div>
                        <div className="col-md-6">
                            <form action="#" onSubmit={handleSubmit}>
                                <div className="group">
                                    <label htmlFor="name">Tên lớp</label>
                                    <input type="text" id="name" name="name" onChange={handleChange} />
                                </div>
                                <div className="group">
                                    <label htmlFor="startTime">Giờ bắt đầu</label>
                                    <input type="time" id="startTime" name="startTime" onChange={handleChange} />
                                </div>
                                <div className="group">
                                    <label htmlFor="endTime">Giờ kết thúc</label>
                                    <input type="time" id="endTime" name="endTime" onChange={handleChange} />
                                </div>
                                <div className="group">
                                    <label htmlFor="name">Thứ</label>
                                    <Multiselect
                                        options={days}
                                        placeholder={"Chọn thứ ngày"}
                                        isObject={false}
                                        onSelect={setDay}
                                        onRemove={setDay}
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="name">Chuyên môn</label>
                                    <Multiselect
                                        options={specs}
                                        placeholder={"Chọn chuyên môn"}
                                        isObject={false}
                                        onSelect={setSpec}
                                        onRemove={setSpec}
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="price">Chi phí</label>
                                    <input type="text" id="price" name="price" onChange={handleChange} />
                                </div>
                                <input type="submit" className="submit-btn" value="Đăng ký" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    )
};

export default Create;