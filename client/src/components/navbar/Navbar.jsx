import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY > 0) {
      setShow(true)
    } else {
      setShow(false);
    }
  }

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    toast.success("Đăng xuất thành công");
    navigate("/")
  };

  window.addEventListener('scroll', changeNavbar);


  return (
    <div className={show ? 'header fixed-top active' : 'header fixed-top'}>

      <div className="container">

        <div className="row align-items-center justify-content-between">

          <Link to="/" className="logo">
            <img src="/img/logo.png" alt="logo"></img>
          </Link>

          <div className="nav">
            {/* <a href="/#">Khóa học</a>
            {/* <a href="/blogs">Tin tức</a> */}
            {/* <a href="/#">Trở thành HLV</a> */}
            <Link to="/trainers">Huấn luyện viên</Link>
            <Link to="/health">Kiểm tra sức khỏe</Link>
            <Link to="/class">Lớp của tôi</Link>
            <Link to="/about">Về chúng tôi</Link>
            {user ? (
              <div className="dropdown">
                <div className="dropdown-toggle" onClick={() => setOpen(!open)}>
                  <img src="https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg" alt="User img" />
                  <p>{user.name}</p>
                </div>
                {open ? (
                  <div className="menu">
                    <Link to="/profile" className="dropdown-item">Tài khoản</Link>
                    <Link to="/messenger" className="dropdown-item">Tin nhắn</Link>
                    <a href="/#" className="dropdown-item" onClick={handleClick}>Đăng xuất</a>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link to="/login" className="login-btn">
                Đăng nhập
              </Link>
            )}
          </div>

        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
