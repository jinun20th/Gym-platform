import "./modal.css"
import React, { useState, useContext } from "react";
import { Calendar } from "react-multi-date-picker"
import { AuthContext } from "../../context/AuthContext"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import useFetch from "../../hooks/useFetch";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Modal = ({ setShow, trainerId }) => {
    const months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
    const weekDays = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
    const { user } = useContext(AuthContext);
    const { data } = useFetch(`/classes/trainer/class/${trainerId}`);
    const handleClick = () => {
        setShow(false);
    }
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const [days, setDays] = useState();

    const [value, setValue] = useState({
        trainerId: trainerId,
        userId: user._id,
        days: undefined,
    })
    const [classes, setClasses] = useState({
        classId: undefined,
        userId: user._id,
    })
    const handleChange = (e) => {
        switch (toggleState) {
            case 1:
                setDays(days);
                break;
            case 2:
                setClasses((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                break;
        }
    }

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        timeZone: 'Asia/Ho_Chi_Minh'
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        switch (toggleState) {
            case 1:
                const dates = days.map(item => new Date(item));
                const formattedDates = dates.map(date => date.toLocaleString('vi-VN', options));
                value.days = formattedDates
                console.log(value);
                try {
                    const res = await axios.post(`/classes/person/`, value);
                    console.log(res.data);
                    toast.success("Đăng ký cá nhân thành công");
                } catch (err) {
                    console.log(err);
                    toast.error("Có lỗi xảy ra vui lòng thử lại sau")
                }
                break;
            case 2: try {
                const res = await axios.post(`/classes/booking/`, classes);
                console.log(res.data);
                toast.success("Đăng ký lớp học thành công");
            } catch (err) {
                toast.error("Có lỗi xảy ra vui lòng thử lại sau")
            }
                break;
        }
    }

    /* data.forEach(item => {
        const startDateObj = new Date(item.startTime);
        const startHour = startDateObj.getHours();
        const startMinute = startDateObj.getMinutes();
        const startFormattedTime = `${startHour}:${startMinute < 10 ? '0' : ''}${startMinute}`;
        item.start_time = startFormattedTime;

        const endDateObj = new Date(item.endTime);
        const endHour = endDateObj.getHours();
        const endMinute = endDateObj.getMinutes();
        const endFormattedTime = `${endHour}:${endMinute < 10 ? '0' : ''}${endMinute}`;
        item.end_time = endFormattedTime;
    }); */

    return (
        <div className="modal-overlay">
            <div className="modal-react">
                <div className="modal-header-react">
                    <button type="button" className="close-modal" onClick={handleClick}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body-react">
                    <h2>Bạn muốn học:</h2>
                    <div className="modal-btns">
                        <div className={toggleState === 1 ? "modal-btn active" : "modal-btn"} onClick={() => toggleTab(1)}>CÁ NHÂN</div>
                        <div className={toggleState === 2 ? "modal-btn active" : "modal-btn"} onClick={() => toggleTab(2)}>THEO LỚP</div>
                    </div>
                    <div className="modal-wrapper">
                        <div className={toggleState === 1 ? "modal-container active" : "modal-container"}>
                            <Calendar
                                className="orange"
                                months={months}
                                weekDays={weekDays}
                                multiple
                                value={days}
                                onChange={setDays}
                                sort
                                format="DD MM YYYY HH:mm:ss"
                                plugins={[
                                    <DatePanel />,
                                    <TimePicker position="bottom" />
                                ]}
                            />
                            <div className="btn btn-submit" onClick={handleSubmit}>Đăng ký</div>
                        </div>
                        <div className={toggleState === 2 ? "modal-container active" : "modal-container"}>
                            <div className="class-container">
                                <div className="row">
                                    {
                                        data.map((item, i) => (
                                            <div className="col-md-12 class-ctn">
                                                <input type="checkbox" value={item._id} name="classId" onChange={handleChange} />
                                                <div className="class-name">
                                                    {item.name}
                                                </div>
                                                <div className="class-days">
                                                    {item.days.map(day => `${day}`).join(' ')}
                                                </div>
                                                <div className="class-time">
                                                    từ {item.startTime} tới {item.endTime}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="btn btn-submit" onClick={handleSubmit}>Đăng ký</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
};

export default Modal;