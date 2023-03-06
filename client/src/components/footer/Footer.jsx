import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-4 d-flex flex-column ">
            <div className="footer-title">Liên hệ</div>
            <ul className="footer-list">
              <li>Địa chỉ:  Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh</li>
              <li>Giờ làm việc: 08:00 AM - 06:00 PM</li>
              <li>Tổng đài: +841242623</li>
              <li>Email: rocker@gmail.com</li>
            </ul>
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <div className="footer-title">Liên kết</div>
            <ul className="footer-list d-flex flex-column align-items-center">
              <li><a href="/">Trang chủ</a></li>
              <li><a href="/trainers">Huấn luyện viên</a></li>
              <li><a href="/health">Kiểm tra sức khỏe</a></li>
              <li><a href="/about">Về chúng tôi</a></li>
              <li><a href="/blogs">Blog sống khỏe</a></li>
            </ul>
          </div>
          <div className="col-4 d-flex flex-column align-items-center">
            <div className="footer-title">Theo dõi</div>
            <ul className="footer-list d-flex justify-content-around w-100">
              <li><a href="/#"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="/#"><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="/#"><i className="fa-brands fa-youtube"></i></a></li>
              <li><a href="/#"><i className="fa-brands fa-tiktok"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
