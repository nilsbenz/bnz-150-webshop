import {Component, h} from '@stencil/core';

@Component({
  tag: 'ws-login',
  styleUrl: 'ws-login.css',
  shadow: true
})
export class WsLogin {

  render() {
    return (
      <div>
        <ws-heading>Login</ws-heading>
        <form onSubmit={() => this.handleSubmit()}>
          <label>
            Benutzername
            <input type="text"/>
          </label>
          <label>
            Passwort
            <input type="password"/>
          </label>
          <button type="submit">Einloggen</button>
        </form>
      </div>
    );
  }

  handleSubmit() {

  }
}