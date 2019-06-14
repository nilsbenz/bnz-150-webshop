import {Component, h} from '@stencil/core';
import authService from '../../../services/AuthService';

@Component({
  tag: 'ws-login',
  styleUrl: 'ws-login.css',
  shadow: true
})
export class WsLogin {

  private user: {
    username: string,
    password: string
  };

  componentWillLoad() {
    this.user = {
      username: null,
      password: null
    };
  }

  render() {
    return (
      <div>
        <ws-heading>Login</ws-heading>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Benutzername
            <input type="text" onInput={e => this.handleUsernameInput(e)}/>
          </label>
          <label>
            Passwort
            <input type="password" onInput={e => this.handlePasswordInput(e)}/>
          </label>
          <button type="submit">Einloggen</button>
        </form>
      </div>
    );
  }

  async handleSubmit(e) {
    e.preventDefault();
    const res = await authService.login(this.user);
    if(res.status === 200) {
      console.log('logged in');
    } else {
      console.log(res);
    }
  }

  handleUsernameInput(e) {
    this.user.username = e.target.value;
  }

  handlePasswordInput(e) {
    this.user.password = e.target.value;
  }
}
