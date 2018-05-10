import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import './styles/general.css';

export default class UserForm extends Component {
  state = {
    login: true
  }
  render() {
    const { user, client } = this.props;
    const { login } = this.state;

    return (
      <div>
        {user._id ? (
          <button onClick={() => {
            Meteor.logout();
            client.resetStore();
          }}
          >
            Logout
          </button>
        ) : (
          <div>
            {login ? (
              <LoginForm client={client} />
            ) : (
              <RegisterForm client={client} />
            )}
            <Button
              bsStyle="primary"
              onClick={() => this.setState({ login: !login })}
            >{login ? 'Register' : 'Login'}</Button>
          </div>
        )}
      </div>
    )
  }
};