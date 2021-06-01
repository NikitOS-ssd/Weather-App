import React, {Component} from 'react'
import Button from '../../components/Button'
import './main.css'

class Authorization extends Component {
  state = {
    login: null,
    password: null
  }

  loginInputFunc(event) {
    let login = event.target.value;

    this.setState({ login });
  }
  passwordInputFunc(event) {
    let password = event.target.value;

    this.setState({ password });
  }

  async loginHandler() {
    const authData = {
      email: this.state.login,
      password: this.state.password,
      returnSecureToken: true
    };
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDiW-wQz7wYLVBZt2pjsJD7HufR7Nqb5qM`, {
      method: 'POST',
      body: JSON.stringify(authData)
    }).then(res => {
      document.location.replace('http://localhost:3000')
      res.json()
    })
      .catch(err => err);

    console.log(response);

    for(let key in response) {
      console.log(key, ' ', response[key]);
    }

    localStorage.setItem('idToken', response.idToken);
    localStorage.setItem('email', response.email);
    localStorage.setItem('localId', response.localId);
    console.log(localStorage);
  }

  async registerHandler() {
    const authData = {
      email: this.state.login,
      password: this.state.password,
      returnSecureToken: true
    };
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDiW-wQz7wYLVBZt2pjsJD7HufR7Nqb5qM`, {
      method: 'POST',
      body: JSON.stringify(authData)
    }).then(res => res.json())
      .catch(err => err);

    console.log(response);
  }

  render() {
    return (
      <div className="authorization-block">
        <input type="text" onChange={ this.loginInputFunc.bind(this) } placeholder="Login name..."/>
        <input type="Password" onChange={ this.passwordInputFunc.bind(this) } placeholder="Password..."/>

        <Button type="submit" text="Войти" func={this.loginHandler.bind(this)} />
        <Button type="submit" text="Зарегистрироваться" classes='pink register-button' func={this.registerHandler.bind(this)} />
      </div>
    )
  }
}




export default Authorization
