import {Component, h, Prop, State, Event, EventEmitter} from '@stencil/core';
import authService from '../../../services/AuthService';
import {RouterHistory} from "@stencil/router";

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

  @Event() loggedIn: EventEmitter;

  @Prop() history: RouterHistory;
  @Prop() nextPage: String;

  @State() alert: boolean;

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
            <input type="text" name="username" onInput={e => this.handleUsernameInput(e)} required/>
          </label>
          <label>
            Passwort
            <input type="password" name="password" onInput={e => this.handlePasswordInput(e)} required/>
          </label>
          <button type="submit">Einloggen</button>
        </form>
        {this.alert
          ? <p class="alert">Falsche Eingabe</p>
          : {}
        }
      </div>
    );
  }

  async handleSubmit(e) {
    e.preventDefault();
    const res = await authService.login(this.user);
    if(res) {
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

  handlePasswordInput(e) {
    this.user.password = e.target.value;
  }
}
