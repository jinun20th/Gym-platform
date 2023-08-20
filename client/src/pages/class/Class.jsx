import "./class.css"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import Multiselect from 'multiselect-react-dropdown';
import useFetch from "../../hooks/useFetch";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Class = () => {
    const params = useParams();;
    const { user } = useContext(AuthContext);
    const { data } = useFetch(`/classes/${params.id}`)

    const [info, setInfo] = useState({
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
        const { name, value } = e.target;
        setInfo((prev) => ({ ...prev, [name]: value }))
    }

    const setSpec = (e) => {
        info.specialize = e;
    }

    const setDay = (e) => {
        info.days = e;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(info);
        try {
            const res = await axios.put(`/classes/${params.id}`, info);
            console.log(res.data);
            toast.success("Cập nhập lớp thành công");
        } catch (err) {
            toast.error("Có lỗi xảy ra vui lòng thử lại");
        }
    }
    console.log(data);
    return (
        <div>
            <Navbar />
            <div className="create">
                <div className="container">
                    <div className="title">
                        Cập nhập thông tin lớp dạy học của bạn
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={user.img} className="class-img" alt="user" />
                        </div>
                        <div className="col-md-6">
                            {data.length !== 0 && <form action="#" onSubmit={handleSubmit}>
                                <div className="group">
                                    <label htmlFor="name">Tên lớp</label>
                                    <input type="text" id="name" name="name" placeholder={data[0].name} onChange={handleChange} />
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
                                    <label>Thứ</label>
                                    <Multiselect
                                        options={days}
                                        placeholder={"Chọn thứ ngày"}
                                        isObject={false}
                                        selectedValues={data[0].days}
                                        onSelect={setDay}
                                        onRemove={setDay}
                                    />
                                </div>
                                <div className="group">
                                    <label>Chuyên môn</label>
                                    <Multiselect
                                        options={specs}
                                        placeholder={"Chọn chuyên môn"}
                                        isObject={false}
                                        selectedValues={data[0].specialize}
                                        onSelect={setSpec}
                                        onRemove={setSpec}
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="price">Chi phí</label>
                                    <input type="text" id="price" name="price" placeholder={data[0].price} onChange={handleChange} />
                                </div>
                                <input type="submit" className="submit-btn" value="Cập nhập" />
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>
    )
};

export default Class;