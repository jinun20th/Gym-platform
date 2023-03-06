import "./health.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Health = () => {
    const [value, setValue] = useState({
        height: undefined,
        weight: undefined
    })

    const handleChange = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const bmi = (value.weight/((value.height*value.height)/10000))
        toast.success('Chỉ số BMI của bạn là: ' + bmi);
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="health">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="health-title">
                                CHỈ SỐ CƠ THỂ BMI
                            </div>
                            <div className="health-content">
                                BMI - Chỉ số khối cơ thể được xác định thông qua cân nặng và chiều cao của bạn, giúp bạn biết được cơ thể đang ở mức độ gầy hay thừa cân.
                            </div>
                            <div className="health-form">
                                <div className="title">
                                    Để có thể xác định được chỉ số BMI của bạn, vui lòng trả lời những câu hỏi dưới đây
                                </div>
                                <form action="#" method="post" onSubmit={handleSubmit}>
                                    <div className="group">
                                        <input type="radio" value="Nam" name="gender" id="gender-1" />
                                        <label htmlFor="gender-1">
                                            <i className="fa-solid fa-mars"></i>
                                            Nam
                                        </label>
                                        <input type="radio" value="Nữ" name="gender" id="gender-2" />
                                        <label htmlFor="gender-2">
                                            <i className="fa-solid fa-venus"></i>
                                            Nữ
                                        </label>
                                    </div>
                                    <input type="text" name="height" placeholder="Chiều cao (cm)" onChange={handleChange} />
                                    <input type="text" name="weight" placeholder="Cân nặng (kg)" onChange={handleChange} />
                                    <input type="text" name="age" placeholder="Tuổi" />
                                    <input type="submit" className="submit-btn" value="Xem Ngay" />
                                </form>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="health-content">
                                <h2>
                                    BMI là gì?
                                </h2>
                                <ul>
                                    <li>BMI viết tắt của Body Mass Index nghĩa là chỉ số khối cơ thể.</li>
                                    <li>Chỉ số BMI thể hiện sự tương quan giữa cân nặng và chiều cao của bạn.</li>
                                    <li>Dựa vào chỉ số này bạn có thể xác định cơ thể của mình đang khỏe mạnh, thiếu hay thừa cân.</li>
                                </ul>
                                <h2>
                                    Chỉ số BMI có quan trọng không?
                                </h2>
                                <ul>
                                    <li>Chỉ số BMI đóng vai trò quan trọng trong việc giúp bạn xác định các rủi ro sức khỏe tiềm ẩn. Con số này sẽ báo hiệu bạn nên duy trì hay cải thiện tình trạng sức khỏe hiện tại. Nhiều nghiên cứu cho thấy chỉ số BMI cao cũng cảnh báo một số bệnh như béo phì, xương khớp, huyết áp,...</li>
                                    <li>Tuy nhiên không áp dụng chỉ số BMI đối với phụ nữ mang thai, vận động viên thể hình, người già và chỉ số này có sự khác nhau giữa các quốc gia.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Health;
