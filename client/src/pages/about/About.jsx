import "./about.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 about-img">
                                <img src="/img/about-1.png" alt="about" />
                            </div>
                            <div className="col-6 about-content">
                                <div>THE ROCKER là nền tảng kỹ thuật số cung cấp hệ sinh thái lối sống khỏe mạnh dành riêng cho mỗi người dùng. Với một mạng lưới gồm các chuyên gia thể hình, địa điểm, thương hiệu thể hình và sức khỏe, chúng tôi dễ dàng có thể giúp bạn đạt được mục tiêu sức khỏe của bản thân. </div>
                                <br />
                            </div>
                            <div className="col-8 about-content">
                                Tập luyện mọi lúc mọi nơi! Sẽ không còn những lúc đi một vòng thành phố tìm nơi tập luyện, LEEP.APP cung cấp những dịch vụ tuyệt vời đáp ứng với nhu cầu của bạn tại các phòng tập trong hệ thống của chúng tôi để bạn tiết kiệm thời gian và tiền bạc.</div>
                            <div className="col-4 about-img">
                                <img src="/img/about-2.png" alt="about" />
                            </div>
                        </div>
                    </div>
                    <div className="about-bg">
                        <div className="container">
                            <div className="about-bg__title">
                                Vì sao nên chọn ROCKER
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="item-container">
                                        <i className="fa-solid fa-trophy"></i>
                                        <div className="item-content">
                                            <div className="item-title">
                                                Chất lượng
                                            </div>
                                            <div className="item-desc">
                                                Chúng tôi luôn cố gắng để đảm bảo việc cung cấp những dịch vụ chất lượng cao cho khách hàng.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="item-container">
                                        <i className="fa-solid fa-heart"></i>
                                        <div className="item-content">
                                            <div className="item-title">
                                                Sức khỏe
                                            </div>
                                            <div className="item-desc">
                                                không gì quan trọng bằng sức khỏe của bạn chúng tôi cam kết cung cấp những giải pháp thể hình tốt nhất giúp bạn sống khỏe mạnh
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="item-container">
                                        <i className="fa-solid fa-clock"></i>
                                        <div className="item-content">
                                            <div className="item-title">
                                                Tiện lợi
                                            </div>
                                            <div className="item-desc">
                                                thời gian là tiền bạc chúng tôi luôn ghi nhớ trong lòng và sẽ cung cấp những dịch vụ tiết kiệm thời gian nhất
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="connect">
                        <div className="connect-title">
                            KẾT NỐI VỚI CÁC HLV  VÀ CHUYÊN GIA MỌI LÚC, MỌI NƠI
                        </div>
                        <div className="connect-desc">
                            Các huấn luyện viên của ROCKER có thể hướng dẫn bạn ở bất cứ nơi nào bạn thích. Tại nhà, văn phòng, phòng gym gần nhà hay thậm chí là công viên! Bạn chỉ cần kết nối với họ thông qua ứng dụng hoặc trang web THE ROCKER, đặt buổi tập và bắt đầu chinh phục mục tiêu của mình. Thật đơn giản!
                        </div>
                        <div className="connect-btn">
                            Đăng ký ngay
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default About;
