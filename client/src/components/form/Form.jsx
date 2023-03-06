import "./form.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = (prop) => {
    const { isLogin, isTrainer } = prop;

    if (isLogin) {
        if (!isTrainer) {
            return (
                <div className="row">
                    <div className="col-md-6">
                        <img src="/img/home-img.png" alt="pic" className="w-100" />
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <h1>Đăng nhập</h1>
                        </div>
                    </div>
                </div>
            );
        }
        else return (
            <div className="row">
                <div className="col-md-6">
                    <img src="/img/about-img.png" alt="pic" className="w-100" />
                </div>
                <div className="col-md-6">
                    <div className="form">
                        <h1>Đăng nhập HLV</h1>

                    </div>
                </div>
            </div>
        );
    }
    else return (
        <div className="row">
            <div className="col-md-6">
                <img src="/img/about-img.png" alt="pic" />
            </div>
            <div className="col-md-6">
                <div className="form">
                    <h1>Đăng ký</h1>
                </div>
            </div>
        </div>
    )
};

export default Form;