import React from 'react';
import "./login.scss";
const Login = () => {
    return (
        <div className="container">
                <div className="itemtitle">
                    <h3>Trello</h3>
                </div>
                <div className="itemform">
                    <div className="itemform-title">
                        <h3>Đăng Nhập Vào Trello</h3>
                    </div>
                    <div className="itemform-email">
                        <input placeholder="Nhập Email" />
                    </div>
                    <div className="itemform-password">
                        <input placeholder="Nhập password" />
                    </div>
                    <div className="itemform-buttonlogin">
                        <button>Đăng Nhập</button>
                    </div>
                    <div className="itemform-textOr">
                        <span>Hoặc</span>
                    </div>
                </div>
        </div>
    );
}

export default Login;
