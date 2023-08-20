import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const params = useParams();
  if (params.id) {
    console.log(1);
  }
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const [registration, setRegistration] = useState({
    name: undefined,
    username: undefined,
    password: undefined,
    phone: undefined,
    birth: undefined,
    gender: undefined,
    email: undefined,
    img: 'https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg',
  })

  const [isLogin, setIslogin] = useState(true);
  const [rpassword, setRpassword] = useState();

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    if (isLogin) {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
    else if (!isLogin) {
      setRegistration((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/login", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/")
      } catch (err) {
        toast.error(err.response.data.message);
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      }
    }
    else {
      if (registration.password !== rpassword) {
        toast.error("Mật khẩu nhập lại không trùng")
      }
      console.log(registration);
      try {
        await axios.post("/auth/register", registration);
        toast.success("Đăng ký thành công");
        navigate("/login")
      } catch (err) {
        console.log(err.response);
        toast.error(err.response.data.message);
      }
    }
  };

  if (isLogin) {
    return (
      <div>
        <Navbar />
        <div className="container form">
          <div className="row">
            <div className="col-md-6">
              <img src="/img/home-img.png" alt="pic" className="w-100" />
            </div>
            <div className="col-md-6">
              <div className="form">
                <div className="title">
                  <h1>Đăng nhập</h1>
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Tên đăng nhập<span>*</span></label>
                  <input type="text" className="form-control" id="username" onChange={handleChange} placeholder="" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mật khẩu<span>*</span></label>
                  <input type="password" className="form-control" id="password" onChange={handleChange} placeholder="" />
                </div>
                <div className="mb-3">
                  <button className="btn button" onClick={handleClick}>
                    Đăng nhập
                  </button>
                </div>
                <p>Chưa là thành viên Rocker ? <span onClick={() => setIslogin(false)}>đăng ký ngay</span></p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    );
  }
  else {
    return (
      <div>
        <Navbar />
        <div className="container form">
          <div className="row">
            <div className="col-md-6">
              <img src="/img/about-img.png" alt="pic" className="w-100" />
            </div>
            <div className="col-md-6">
              <div className="form">
                <div className="title">
                  <h1>Đăng ký</h1>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Họ và tên<span>*</span></label>
                  <input type="text" className="form-control" id="name" onChange={handleChange} placeholder="" />
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-8">
                      <label htmlFor="birth" className="form-label">Ngày sinh<span>*</span></label>
                      <input type="date" className="form-control" id="birth" onChange={handleChange} placeholder="" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="gender" className="form-label">Giới tính</label>
                      <select name="gender" className="form-control" id="gender" onChange={handleChange}>
                        <option value="" hidden>Giới tính</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email<span>*</span></label>
                  <input type="text" className="form-control" id="email" onChange={handleChange} placeholder="" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Số điện thoại<span>*</span></label>
                  <input type="tel" className="form-control" id="phone" onChange={handleChange} placeholder="" />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Tên đăng nhập<span>*</span></label>
                  <input type="text" className="form-control" id="username" onChange={handleChange} placeholder="" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Mật khẩu<span>*</span></label>
                  <input type="password" className="form-control" id="password" onChange={handleChange} placeholder="" />
                </div>
                <div className="mb-3">
                  <label htmlFor="rpassword" className="form-label">Nhập lại mật khẩu<span>*</span></label>
                  <input type="password" className="form-control" id="rpassword" onChange={(e) => setRpassword(e.target.value)} placeholder="" />
                </div>
                <div className="mb-3">
                  <button className="btn button" onClick={handleClick}>
                    Đăng ký
                  </button>
                </div>
                <p>Đã có tài khoản ? <span onClick={() => setIslogin(true)}>đăng nhập ngay</span></p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    )
  }
};

export default Login;
