import {Component, Event, EventEmitter, h, Prop, State} from '@stencil/core';
import authService from "../../../services/AuthService";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: 'ws-login-overlay',
  styleUrl: 'ws-login-overlay.css',
  shadow: true
})
export class WsLoginOverlay {

  private loginUser: {
    username: string,
    password: string
  };

  private registerUser: {
    username: string,
    mail: string,
    password: string
  };

  private passwordInput: HTMLInputElement;

  @Event() loggedIn: EventEmitter;
  @Event() closeLoginOverlay: EventEmitter;

  @Prop() history: RouterHistory;
  @Prop() nextPage: String;

  @State() alert: boolean;
  @State() register: boolean;

  componentWillLoad() {
    this.loginUser = {
      username: null,
      password: null
    };
    this.registerUser = {
      username: null,
      mail: null,
      password: null
    };
  }

  render() {
    return (
      <div>
        <ws-heading>Du musst dich zuerst einloggen</ws-heading>
        <ws-button emphasis="middle" onClick={() => this.closeLoginOverlay.emit()}>Fenster schliessen</ws-button>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Benutzername
            <input type="text" name="username" onInput={e => this.handleUsernameInput(e)} required/>
          </label>
          {this.register
            ? <label>
              Mail
              <input type="email" name="mail" onInput={e => this.handleMailInput(e)} value={this.registerUser.mail}
                     required/>
            </label>
            : {}
          }
          <label>
            Passwort
            <input type="password" name="password" onInput={e => this.handlePasswordInput(e)}
                   ref={el => this.passwordInput = el as HTMLInputElement} required/>
          </label>
          <button type="submit">
            {this.register
              ? 'Registrieren'
              : 'Einloggen'
            }
          </button>
          {this.register
            ? <ws-text>Bereits registriert? Hier gehts zum <strong onClick={() => this.toggleRegister()}>Login</strong>
            </ws-text>
            : <ws-text>Zum ersten Mal hier? Hier gehts zur <strong
              onClick={() => this.toggleRegister()}>Registrierung</strong></ws-text>
          }

        </form>
        {this.alert
          ? <p class="alert">
            {this.register
              ? 'Benutzername oder Mail bereits vergeben'
              : 'Falsche Eingabe'
            }
          </p>
          : {}
        }
      </div>
    );
  }

  toggleRegister() {
    this.register = !this.register;
    this.alert = false;
    this.loginUser.password = '';
    this.registerUser.password = '';
    this.passwordInput.value = '';
  }

  async handleSubmit(e) {
    e.preventDefault();
    let res;
    if (this.register) {
      let registered = await authService.register(this.registerUser);
      this.alert = registered.status !== 200;
    }
    if (!this.alert) {
      res = await authService.login(this.loginUser);
    }
    if (res) {
      this.alert = false;
      this.loggedIn.emit();
    } else {
      this.alert = true;
    }
  }

  handleUsernameInput(e) {
    this.loginUser.username = e.target.value;
    this.registerUser.username = e.target.value;
  }

  handleMailInput(e) {
    this.registerUser.mail = e.target.value;
  }

  handlePasswordInput(e) {
    this.loginUser.password = e.target.value;
    this.registerUser.password = e.target.value;
  }

}
