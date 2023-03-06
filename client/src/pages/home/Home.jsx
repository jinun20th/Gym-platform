import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
/* import Featured from "../../components/featured/Featured";
import MailList from "../../components/mailList/MailList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import PropertyList from "../../components/propertyList/PropertyList"; */
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="home">

        <div className="container">

          <div className="row align-items-center min-vh-100">

            <div className="col-md-6">
              <img src="/img/home-img.png" className="w-100" alt="template"></img>
            </div>

            <div className="col-md-6 text-center text-md-left">
              <span>chọn sống năng động cùng Rocker</span>
              <h3>BẮT ĐẦU HÀNH TRÌNH NGAY HÔM NAY</h3>
              <a href="/#" className="link-btn">Bắt Đầu</a>
            </div>

          </div>

        </div>
      </section>
      <section className="about" id="about">

        <div className="container">

          <div className="row align-items-center flex-wrap-reverse">

            <div className="col-md-6">
              <span>về chúng tôi</span>
              <h3>TẬP THỂ HÌNH TẠI GIA CÙNG CHUYÊN GIA</h3>
              <p>liên kết với các chuyên gia HLV thể hình tại Rocker</p>
              <ul>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Cách hỗ trợ hệ thống miễn dịch của bạn </li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Hướng dẫn về Thử thách tập thể dục & thể hình trong 30 ngày</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Hướng Dẫn Để Dễ Dàng Trở Lại Trong Phòng Tập Thể Dục</li>
                <li><FontAwesomeIcon icon={faCircleCheck} /> Lợi ích sức khỏe tinh thần của việc tập thể dục tại nhà</li>
              </ul>
            </div>

            <div className="col-md-6">
              <img src="/img/about-img.png" className="w-100" alt="template"></img>
            </div>

          </div>

        </div>

      </section>
      <section className="join">

        <div className="container">

          <div className="row align-items-center">
            <div className="col-md-7">
              <img src="/img/join-us-image.png" className="w-100" alt="template"></img>
            </div>
            <div className="col-md-5 text-center text-md-left">
              <span>tham gia ngay</span>
              <h3>THAM GIA VÀ NHẬN GIẢM GIÁ 10%</h3>
              <p>kết nối với các HLV và nhận ưu đãi khủng</p>
              <a href="/#" className="link-btn">tham gia ngay</a>
            </div>
          </div>

        </div>

      </section>
{/*        <Featured />
      <PropertyList />
      <FeaturedProperties />
      <MailList /> */}
      <Footer />
    </div>
  );
};

export default Home;
