import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions'

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials);
    }

    render() {
        return (
            <div className="login-form">
                <h1>Login Form</h1>
                <input
                    type='text'
                    name='username'
                    placeholder='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                />
                <input
                    type='text'
                    name='password'
                    placeholder='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                />
                <button onClick={this.login}>Login</button>
            </div>
        )
    };
};

const mapStateToProps = ({ isLoggedIn }) => ({
    isLoggedIn
});

export default connect(
    mapStateToProps,
    { login }
)(LoginForm)