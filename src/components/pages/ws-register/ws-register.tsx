import {Component, h, State} from '@stencil/core';
import authService from "../../../services/AuthService";

@Component({
  tag: 'ws-register',
  styleUrl: 'ws-register.css',
  shadow: true
})
export class WsRegister {

  private user: {
    username: string,
    mail: string,
    password: string
  };

  @State() private alert: boolean;

  componentWillLoad() {
    this.user = {
      username: null,
      mail: null,
      password: null
    };
  }

  render() {
    return (
      <div>
        <ws-heading>Registrieren</ws-heading>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Benutzername
            <input type="text" onInput={e => this.handleUsernameInput(e)}/>
          </label>
          <label>
            Mail
            <input type="email" onInput={e => this.handleMailInput(e)}/>
          </label>
          <label>
            Passwort
            <input type="password" onInput={e => this.handlePasswordInput(e)}/>
          </label>
          <button type="submit">Registrieren</button>
        </form>
        {this.alert
          ? <p>Dieser Benutzername ist bereits vergeben.</p>
          : {}
        }
      </div>
    );
  }

  async handleSubmit(e) {
    e.preventDefault();
    const res = await authService.register(this.user);
    if(res.status === 200) {
      console.log('logged in');
    } else {
      console.log(res);
      this.alert = true;
    }
  }

  handleUsernameInput(e) {
    this.user.username = e.target.value;
  }

  handleMailInput(e) {
    this.user.mail = e.target.value;
  }

  handlePasswordInput(e) {
    this.user.password = e.target.value;
  }
}
