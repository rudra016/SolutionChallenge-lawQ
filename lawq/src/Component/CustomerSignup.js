import React from 'react';
import './Style/CustomerSignup.css'
import { auth, db } from './firebase'; // Assuming you have a firebase.js file exporting auth and db
import { useNavigate } from 'react-router-dom';

const CustomerSignup = () => {
    const [Username, SetUsername] = React.useState('');
    const [Email, SetEmail] = React.useState('');
    const [Age, SetAge] = React.useState('');
    const [Password, SetPassword] = React.useState('');
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        try {
            const authUser = await auth.createUserWithEmailAndPassword(Email, Password);
            if (authUser) {
                alert('Welcome : ' + Username);
                navigate('/');
            }

            await db.collection('users').doc(authUser.user.uid).set({
                email: authUser.user.Email,
                password: authUser.user.Password,
                username: authUser.user.Username,
                age: authUser.user.Age,
            });

            alert('Registration successful');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container-fluid">
            <div className="box">
                <h3><span className="span"></span>Sign Up</h3>

                <form action="#">

                    <div className="input_box">
                        <label>Username</label>
                        <input type="text" required onChange={(event) => SetUsername(event.target.value)} />
                    </div>
                    <div className="input_box">
                        <label>Email</label>
                        <input type="text" required onChange={(event) => SetEmail(event.target.value)} />
                    </div>
                    <div className="input_box">
                        <label>Age</label>
                        <input type="text" onChange={(event) => SetAge(event.target.value)} />
                    </div>
                    <div className="input_box">
                        <label>Password</label>
                        <input type="password" required onChange={(event) => SetPassword(event.target.value)} />
                    </div>

                </form>

                <div className="row">
                    <div className="col-6 otherAccount">
                        <p className="forgot_password"><a href="/lawyer-signup">Are you an Advocate?</a></p>
                    </div>
                    <div className="col-6 otherAccount">
                        <p className="forgot_password"><a href="/">Already have an Account?</a></p>
                    </div>
                </div>

                <button className='submitButton' type="submit" onClick={register}>Create an Account</button>
            </div>
        </div>
    );
}

export default CustomerSignup;
