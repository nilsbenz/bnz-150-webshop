import {Component, h} from '@stencil/core';

@Component({
  tag: 'ws-register',
  styleUrl: 'ws-register.css',
  shadow: true
})
export class WsRegister {

  render() {
    return (
      <div>
        <ws-heading>Registrieren</ws-heading>
        <form onSubmit={() => this.handleSubmit()}>
          <label>
            Benutzername
            <input type="text"/>
          </label>
          <label>
            Mail
            <input type="email"/>
          </label>
          <label>
            Passwort
            <input type="password"/>
          </label>
          <button type="submit">Registrieren</button>
        </form>
      </div>
    );
  }

  handleSubmit() {

  }
}
