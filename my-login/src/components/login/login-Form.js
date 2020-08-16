import React from 'react';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserlogin = this.submituserlogin.bind(this);

    };
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }
    submituserlogin(e) {
        e.preventDefault();
        if (this.validateLogin()) {
            let fields = {};

            fields["emailid"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            alert("Login successful");
        }

    }
    validateLogin() {

        let fields = this.state.fields;
        let errors = {};
        let loginIsValid = true;
        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                loginIsValid = false;
                errors["password"] = "enter strong password";
            }
        }

        this.setState({
            errors: errors
        });
        return loginIsValid;


    }
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
                        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} placeholder='Password' />
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;