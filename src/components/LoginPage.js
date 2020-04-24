import React, { Component } from 'react';
import Mensaje from "./Mensaje";

import {
  Redirect
} from 'react-router-dom';

import './style/LoginPageStyle.css';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {nickname: "user1", password: "123456789"},
        {nickname: "user2", password: "1234"},
      ],
      user: "",
      password: "",
      isLoggedIn: false,
      messageOpen: false,
      reason: "",
      message: ""
    }
  }

  changeUser(e) {
    this.setState({
      user: e.target.value
    }, function() {
      console.log(this.state.user);
    });
  }

  changePassword(e) {
    this.setState({
      password: e.target.value
    }, function() {
      console.log(this.state.password);
    });
  }

  handleSubmit(e) {
    if (this.state.user == "" || this.state.password == "") {
      this.setState({
        reason: "Campos Vacíos",
        message: "Complete todos los campos para iniciar sesión",
        messageOpen: true
      })
      return
    }
    for (var i = 0; i < this.state.users.length; i++) {
      if (this.state.user == this.state.users[i].nickname && this.state.password == this.state.users[i].password) {
        this.setState({
          isLoggedIn: true,
        })
        return
      }
      if (i == this.state.users.length - 1) {
        this.setState({
          reason: "Datos Inválidos",
          message: "Verifique que su usuario o contraseña sean los correctos",
          messageOpen: true
        })
      }
    }
  }

  closeMessage() {
    this.setState({
      messageOpen: false
    })
  }

  render() {

    let content;

    if (this.state.isLoggedIn === true) {
      return <Redirect to={{pathname: '/main'}} />
    } else {
      content = (
        <div className="loginBox">
          {this.state.messageOpen ?
            <Mensaje
              reason = {this.state.reason}
              message = {this.state.message}
              closeMessage = {this.closeMessage.bind(this)}
            />
            : null
          }
          <div className="loginForm">
            <h1>Login</h1>
            <input className="inputText" type="text" value={this.state.user} placeholder="Nickname" onChange={this.changeUser.bind(this)} required />
            <input className="inputText" type="password" value={this.state.password} placeholder="Password" onChange={this.changePassword = this.changePassword.bind(this)} required />
            <button className="loginButton" onClick={this.handleSubmit.bind(this)}>Login</button>
          </div>
        </div>
      )
    }

    return (
      <div>{content}</div>
    );
  }
};
