import {Component, h, Listen, State} from '@stencil/core';
import '@stencil/router';
import authService from "../../../services/AuthService";

@Component({
  tag: 'ws-root',
  styleUrl: 'ws-root.css',
  shadow: true
})
export class WsRoot {

  @State() isLoggedIn: boolean;

  async componentWillLoad() {
    this.isLoggedIn = authService.isLoggedIn();
  }

  render() {
    return (
      <div class="space-between">
        <div>
          <ws-header isLoggedIn={this.isLoggedIn}/>
          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url='/' component='ws-home' exact={true}/>
                <stencil-route url='/login' component='ws-login'/>
                <stencil-route url='/registrieren' component='ws-register'/>
                <stencil-route url='/fotos' component='ws-images'/>
                <stencil-route url='/videos' component='ws-videos'/>
                <stencil-route url='/kontakt' component='ws-contact'/>
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
        <ws-footer/>
      </div>
    );
  }

  @Listen('loggedIn')
  loggedIn() {
    this.isLoggedIn = true;
  }

  @Listen('loggedOut')
  loggedOut() {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('TokenCreated');
    this.isLoggedIn = false;
  }
}
