import React from 'react';
import './Style/Login.css'

const Login = () => {
    return (
        <div className="container-fluid">
            <div className="box">
                <h3><span className="span"></span>Login</h3>

                <form action="#">

                    <div className="input_box">
                        <label className='label'>Username</label>
                        <input type="text" required />
                    </div>
                    <div className="input_box">
                        <label className='label'>Password</label>
                        <input type="text" required />
                    </div>

                </form>

                <p class="forgot_password"><a href="/lawyer-signup">Don't have an Account?</a></p>

                <button className='submitButton' type="submit">Login</button>
            </div>
        </div>
    );
}

export default Login;
