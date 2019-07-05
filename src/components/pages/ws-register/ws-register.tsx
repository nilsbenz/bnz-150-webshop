import {Component, Event, EventEmitter, h, Prop, State} from '@stencil/core';
import authService from "../../../services/AuthService";
import {RouterHistory} from "@stencil/router";

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

  @Event() loggedIn: EventEmitter;

  @Prop() history: RouterHistory;

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
            <input type="text" name="username" onInput={e => this.handleUsernameInput(e)} required/>
          </label>
          <label>
            Mail
            <input type="email" name="email" onInput={e => this.handleMailInput(e)} required/>
          </label>
          <label>
            Passwort
            <input type="password" name="password" onInput={e => this.handlePasswordInput(e)} required/>
          </label>
          <button type="submit">Registrieren</button>
        </form>
        {this.alert
          ? <p class="alert">Benutzername oder Mailadresse bereits vergeben.</p>
          : {}
        }
      </div>
    );
  }

  async handleSubmit(e) {
    e.preventDefault();
    const res = await authService.register(this.user);
    if(res.status === 200) {
      await authService.login(this.user);
      this.alert = false;
      this.loggedIn.emit();
      this.history.push('/');
    } else {
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
