import React from 'react';
import "./signup.scss";

const Signup = () => {
    return (
        <div className="containerSignup">
            <form className="item-form">
                <h1>Sign Up</h1>
                <div className="item-UseNameValue">
                    <input placeholder="Tên Tài Khoản"  />
                </div>
                <div className="item-NameValue">
                    <input placeholder="Tài Khoản" />
                </div>
                <div className="item-PasswordValue">
                    <input placeholder="Mật Khẩu"  />
                </div>
                <div className="item-button">
                    <button>Đăng ký</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
