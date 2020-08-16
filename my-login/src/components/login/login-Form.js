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
        if (!fields["emailid"]) {
            loginIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                loginIsValid = false;
                errors["emailid"] = "enter valid email-ID.";
            }
        }
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
            <div id='signup'>
                <h4>Login</h4>
                <br />
                <form action="form-container">
                    <label>Email ID:</label>
                    <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} placeholder='Email' />
                    <div className="errorMsg">{this.state.errors.emailid}</div>

                    <label>Password:</label>
                    <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} placeholder='Password' />

                    <div className="errorMsg">{this.state.errors.password}</div>
                    <input type="submit" className="button" value="signup" />
                </form>
            </div>
        );
    }
}

export default LoginForm;
