import React from 'react';
import './Style/LawyerSignup.css'

const LawyerSignup = () => {
    const [selectedOption, setSelectedOption] = React.useState('');

    // Handle change when an option is selected
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="container-fluid">
            <div className="box">
                <h3><span className="span"></span>Sign Up</h3>

                <form action="#">

                    <div className="input_box">
                        <label>Username</label>
                        <input type="text" required />
                    </div>
                    <div className="input_box">
                        <label>Email</label>
                        <input type="text" required />
                    </div>
                    <div className="input_box" style={{padding:'10px 0px'}}>
                        <label>Field</label>
                        <select className='select' value={selectedOption} onChange={handleOptionChange}>
                            <option value="">Select an option</option>
                            <option value="option1">Civil Litigation</option>
                            <option value="option2">Criminal Defence</option>
                            <option value="option3">Family</option>
                            <option value="option4">Real State</option>
                            <option value="option5">BankRupty</option>
                        </select>
                    </div>
                    <div className="input_box">
                        <label>Password</label>
                        <input type="text" required />
                    </div>

                </form>

                <div className="row">
                    <div className="col-6 otherAccount">
                        <p class="forgot_password"><a href="/customer-signup">Not an Advocate?</a></p>
                    </div>
                    <div className="col-6 otherAccount">
                        <p class="forgot_password"><a href="/">Already have an Account?</a></p>
                    </div>
                </div>

                <button className='submitButton' type="submit">Create an Account</button>
            </div>
        </div>
    );
}

export default LawyerSignup;
