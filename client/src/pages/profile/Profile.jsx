import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import dayjs from "dayjs"
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Multiselect from 'multiselect-react-dropdown';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { data } = useFetch(`/trainer/profile/${user._id}`)
    console.log(data);
    const [value, setValue] = useState(dayjs(user.birthday));
    const [info, setInfo] = useState({
        name: undefined,
        phone: undefined,
        birthday: undefined,
        gender: undefined,
    });
    const [ex, setEx] = useState({
        specialize: undefined,
        languages: undefined,
        description: undefined,
    })
    const [payment, setPayment] = useState({
        port: undefined,
        owner: undefined,
        number: undefined,
    })
    const [password, setPassword] = useState({
        old: undefined,
        new: undefined,
        replace: undefined,
    })
    const [options, setOptions] = useState(["Fitness", "Yoga", "Cardio", "Aerobic", "Workout"]);
    const [languages, setLanguages] = useState(["Việt", "Anh", "Pháp", "Nhật", "Hàn", "Trung"]);

    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const handleChange = (e) => {
        switch (toggleState) {
            case 1:
                setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                break;
            case 2:
                setPayment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                break;
            case 3:
                setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
                break;
            case 5:
                setEx((prev) => ({ ...prev, [e.target.name]: e.target.value }))
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        switch (toggleState) {
            case 1:
                try {
                    const res = await axios.put(`/user/${user._id}`, info);
                    console.log(res.data);
                    localStorage.setItem('user', JSON.stringify(res.data));
                    toast.success("Cập nhập thông tin cá nhân thành công");
                } catch (err) {
                    toast.error("Có lỗi xảy ra vui lòng thử lại sau")
                }
                break;
            case 2:
                try {
                    const res = await axios.put(`/user/${user._id}`, payment);
                    console.log(res);
                    localStorage.setItem('user', JSON.stringify(res.data));
                    toast.success("Cập nhập thông tin thanh toán thành công");
                } catch (err) {
                    toast.error("Có lỗi xảy ra vui lòng thử lại sau")
                }
                break;
            case 3:
                try {
                    const res = await axios.post(`/user/reset/${user._id}`, password);
                    console.log(res.data);
                    localStorage.setItem('user', JSON.stringify(res.data));
                    toast.success("Cập nhập mật khẩu thành công");
                } catch (err) {
                    toast.error(err.response.data.message);
                }
                break;
            case 5:
                try {
                    const res = await axios.post(`/user/${user._id}`, ex);
                    toast.success("Đăng ký làm HLV thành công");
                } catch (err) {
                    toast.error(err.response.data.message);
                } break;
        }
    }

    useEffect(() => {
        if (value) {
            info.birthday = value.toString();
        }
    });

    const setSpec = (e) => {
        ex.specialize = e;
    }

    const setLang = (e) => {
        ex.languages = e;
    }

    return (
        <div>
            <Navbar />
            <div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-3 sidebar">
                            <div className="sidebar-title">
                                Tài khoản
                            </div>
                            <div className={toggleState === 1 ? "title active" : "title"} onClick={() => toggleTab(1)}>Thông tin cá nhân</div>
                            <div className={toggleState === 2 ? "title active" : "title"} onClick={() => toggleTab(2)}>Thanh toán</div>
                            <div className={toggleState === 3 ? "title active" : "title"} onClick={() => toggleTab(3)}>Bảo mật</div>
                            {/* <div className={toggleState === 4 ? "title active" : "title"} onClick={() => toggleTab(4)}>Lịch sử giao dịch</div> */}
                            {user.isTrainer === false ? <div className={toggleState === 5 ? "title active" : "title"} onClick={() => toggleTab(5)}>Đăng ký làm HLV</div> : <div className={toggleState === 6 ? "title active" : "title"} onClick={() => toggleTab(6)}>Chỉnh sửa thông tin HLV</div>}
                        </div>
                        <div className="col-9">
                            <div className={toggleState === 1 ? "content active" : "content"}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="total">
                                            <h2>
                                                Tổng RCoin hiện có
                                            </h2>
                                            <span>{user.coins} RCoin</span>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="form-title">
                                            Thông tin cá nhân
                                        </div>
                                        <form action="#" onSubmit={handleSubmit} method="post">
                                            <div className="group">
                                                <label htmlFor="name">Họ và tên</label>
                                                <input type="text" id="name" name="name" placeholder={user.name} onChange={handleChange} />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="phone">Số điện thoại</label>
                                                <input type="text" id="phone" name="phone" placeholder={user.phone} onChange={handleChange} />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="date">Ngày sinh</label>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        views={['year', 'month', 'day']}
                                                        value={value}
                                                        onChange={(newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                        inputFormat="DD-MM-YYYY"
                                                        renderInput={({ inputRef, inputProps, InputProps }) => (
                                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                <input ref={inputRef} {...inputProps} />
                                                                {InputProps?.endAdornment}
                                                            </Box>
                                                        )}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="gender">Giới tính</label>
                                                <div className="d-flex align-center">
                                                    <input type="radio" id="gender-1" name="gender" value="Nam" onChange={handleChange} defaultChecked={user.gender === 'Nam' ? `checked="checked"` : ''} />
                                                    <label htmlFor="gender-1">Nam</label>
                                                    <input type="radio" id="gender-2" name="gender" value="Nữ" onChange={handleChange} defaultChecked={user.gender === 'Nữ' ? 'checked="checked"' : ''} />
                                                    <label htmlFor="gender-2">Nữ</label>
                                                </div>
                                            </div>
                                            <input type="submit" className="submit-btn" value="Cập nhập" />
                                        </form>
                                    </div>
                                    <div className="col-4">
                                        <div className="avatar-container">
                                            <div className="avatar-img">
                                                <i className="fa-solid fa-user"></i>
                                            </div>
                                            <div className="avatar-input">
                                                <label htmlFor="avatar">Chọn Ảnh</label>
                                                <input type="file" id="avatar" name="avatar" />
                                            </div>
                                            <div className="avatar-desc">
                                                Dung lượng file tối đa 1 MB
                                                Định dạng: JPEG, PNG
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleState === 2 ? "content active" : "content"}>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="form-title">
                                            Cài đặt thanh toán
                                        </div>
                                        <form onSubmit={handleSubmit} method="post">
                                            <div className="group">
                                                <label htmlFor="cong">Cổng thanh toán</label>
                                                <select name="port" id="cong" defaultValue="" onChange={handleChange}>
                                                    <option value="" disabled hidden>Chọn ngân hàng</option>
                                                    <option value="1">Saccombank</option>
                                                    <option value="2">BIDV</option>
                                                    <option value="3">Vietcombank</option>
                                                    <option value="4">MB Bank</option>
                                                    <option value="5">Vietinbank</option>
                                                    <option value="6">ACB Bank</option>
                                                </select>
                                            </div>
                                            <div className="group">
                                                <label htmlFor="owner">Chủ tài khoản</label>
                                                <input type="text" id="owner" name="owner" placeholder="Ví dụ: Nguyễn Văn A" onChange={handleChange} />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="number">Số tài khoản</label>
                                                <input type="text" id="number" name="number" placeholder="Ví dụ: 0123456789" onChange={handleChange} />
                                            </div>
                                            <input type="submit" className="submit-btn" value="Cập nhập" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleState === 3 ? "content active" : "content"}>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="form-title">
                                            Cài đặt bảo mật
                                        </div>
                                        <form onSubmit={handleSubmit} method="post">
                                            <div className="group">
                                                <label htmlFor="old">Mật khẩu cũ</label>
                                                <input type="password" id="old" name="old" onChange={handleChange} />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="new">Mật khẩu mới</label>
                                                <input type="password" id="new" name="new" onChange={handleChange} />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="rep">Nhập lại mật khẩu mới</label>
                                                <input type="password" id="rep" name="replace" onChange={handleChange} />
                                            </div>
                                            <input type="submit" className="submit-btn" value="Cập nhập" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleState === 4 ? "content active" : "content"}>
                                <div className="row">
                                    <div className="col-12">

                                    </div>
                                    <div className="col-12">

                                    </div>
                                </div>
                            </div>
                            <div className={toggleState === 5 ? "content active" : "content"}>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="form-title">
                                            Đăng ký làm HLV
                                        </div>
                                        <form onSubmit={handleSubmit} method="post">
                                            <div className="group">
                                                <label htmlFor="specialize">Chuyên môn</label>
                                                <Multiselect
                                                    options={options}
                                                    placeholder={"Chọn chuyên môn"}
                                                    isObject={false}
                                                    onSelect={setSpec}
                                                    onRemove={setSpec}
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="lang">Ngôn ngữ</label>
                                                <Multiselect
                                                    options={languages}
                                                    placeholder={"Chọn ngôn ngữ"}
                                                    isObject={false}
                                                    onSelect={setLang}
                                                    onRemove={setLang}
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="description">Miêu tả</label>
                                                <textarea id="description" name="description" onChange={handleChange} />
                                            </div>
                                            <input type="submit" className="submit-btn" value="Đăng ký" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {data.length !== 0 && <div className={toggleState === 6 ? "content active" : "content"}>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="form-title">
                                            Cập nhập thông tin HLV
                                        </div>
                                        <form onSubmit={handleSubmit} method="post">
                                            <div className="group">
                                                <label htmlFor="special ized">Chuyên môn</label>
                                                <Multiselect
                                                    options={options}
                                                    placeholder={"Chọn chuyên môn"}
                                                    isObject={false}
                                                    selectedValues={data[0].specialize}
                                                    onSelect={setSpec}
                                                    onRemove={setSpec}
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="lang">Ngôn ngữ</label>
                                                <Multiselect
                                                    options={languages}
                                                    placeholder={"Chọn ngôn ngữ"}
                                                    isObject={false}
                                                    selectedValues={data[0].languages}
                                                    onSelect={setLang}
                                                    onRemove={setLang}
                                                />
                                            </div>
                                            <div className="group">
                                                <label htmlFor="description">Miêu tả</label>
                                                <input type="text" id="description" name="description" value={data[0].description} onChange={handleChange} />
                                            </div>
                                            <input type="submit" className="submit-btn" value="Cập nhập" />
                                        </form>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </div>

    );
};

export default Profile;
