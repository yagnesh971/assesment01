import React from 'react';

class LoginForm extends React.Component {
    render() {
        return (
            <div className='login-container'>
                <h4>Login</h4>
                <br />
                <form action="form-container">
                    <div className='input-group'>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className='input-group'>
                        <input type="password" placeholder='Password' />
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;