import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 'ws-header',
  styleUrl: 'ws-header.css',
  shadow: true
})
export class WsHeader {

  @Prop() isLoggedIn: boolean;

  @Event() loggedOut: EventEmitter;

  render() {
    return (
      <header>
        <div class="container">
          <h1>Nils Benz</h1>
          <p>Videography</p>
          <nav>
            <div>
              <ws-button routeLink="/" routeLinkExact onPrimary>Home</ws-button>
              <ws-button routeLink="/videos" onPrimary>Videos</ws-button>
              <ws-button routeLink="/fotos" onPrimary>Fotos</ws-button>
              <ws-button routeLink="/kontakt" onPrimary>Kontakt</ws-button>
            </div>
            <div>
              {this.isLoggedIn
                ? <ws-button onClick={() => this.loggedOut.emit()} onPrimary>Ausloggen</ws-button>
                : [
                  <ws-button route-link="/registrieren" onPrimary>Registrieren</ws-button>,
                  <ws-button route-link="/login" onPrimary>Login</ws-button>
                ]
              }
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
